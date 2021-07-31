(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lilyh\Documents\web1\New folder\Mr.Shop\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GnMv":
/*!****************************************************!*\
  !*** ./src/app/nav-scroll/nav-scroll.component.ts ***!
  \****************************************************/
/*! exports provided: NavScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavScrollComponent", function() { return NavScrollComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "VY1o");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");









class NavScrollComponent {
    constructor(auth, translate, maticon, matmenu) {
        this.auth = auth;
        this.translate = translate;
        this.maticon = maticon;
        this.matmenu = matmenu;
        this.check1 = false;
        this.check2 = false;
        this.check3 = false;
        this.check4 = false;
        this.check5 = false;
        this.check6 = false;
        this.language = "de";
        this.rtl = false;
        this.desc = "E";
        this.cartItem = 0;
        this.cartFavItem = 0;
        this.auth.cartSubject.subscribe(data => this.cartItem = data);
        this.auth.cartFavSubject.subscribe(data => this.cartFavItem = data);
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#icon').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('ul').toggleClass('show');
            });
        });
    }
    togleprice1() {
        this.pricefact = 1;
        this.pricesymbol = "$";
        this.auth.priceFact.next(this.pricefact);
        this.auth.priceSynbol.next(this.pricesymbol);
    }
    togleprice2() {
        this.pricefact = 1500;
        this.pricesymbol = "L.L.";
        this.auth.priceFact.next(this.pricefact);
        this.auth.priceSynbol.next(this.pricesymbol);
    }
    navtoggle() {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [document.querySelectorAll(el)];
            }
            else {
                return document.querySelector(el);
            }
        };
        select('#navbar').classList.toggle('navbar-mobile');
        document.querySelector('#navbar').classList.toggle('bi-list');
        document.querySelector('#navbar').classList.toggle('bi-x');
    }
    useLanguage(language) {
        this.rtl = !this.rtl;
        if (this.rtl)
            document.querySelector("#rtl").removeAttribute('disabled');
        else
            document.querySelector("#rtl").setAttribute('disabled', "hi");
        if (this.desc == "E")
            this.desc = "A";
        else
            this.desc = "E";
        this.auth.desc.next(this.desc);
        this.translate.use(language);
        if (this.language == "en")
            this.language = "de";
        else
            this.language = "en";
    }
    ngOnInit() {
        this.cartItemFunc();
        this.cartFavItemFunc();
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [document.querySelectorAll(el)];
            }
            else {
                return document.querySelector(el);
            }
        };
        const navbar = document.querySelector(".navbar").querySelectorAll("a");
        navbar.forEach(elt => {
            elt.addEventListener("click", function () {
                navbar.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
                jquery__WEBPACK_IMPORTED_MODULE_1__('ul').toggleClass('show');
            });
        });
        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all);
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener));
                }
                else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };
        /**
         * Easy on scroll event listener
         */
        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener);
        };
        let navbarlinks = select('#navbar .scrollto', true);
        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash)
                    return;
                let section = select(navbarlink.hash);
                if (!section)
                    return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                }
                else {
                    navbarlink.classList.remove('active');
                }
            });
        };
        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);
    }
    cartItemFunc() {
        if (localStorage.getItem('localCart') != null) {
            var x = localStorage.getItem('localCart');
            if (x != null)
                var cartCount = JSON.parse(x);
            this.cartItem =
                cartCount.length;
        }
    }
    cartFavItemFunc() {
        if (localStorage.getItem('localFav') != null) {
            var xx = localStorage.getItem('localFav');
            if (xx != null)
                var cartCountt = JSON.parse(xx);
            this.cartFavItem =
                cartCountt.length;
        }
    }
    changelang(lang) {
        localStorage.setItem('lang', lang);
        window.location.reload();
    }
}
NavScrollComponent.ɵfac = function NavScrollComponent_Factory(t) { return new (t || NavScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"])); };
NavScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavScrollComponent, selectors: [["app-nav-scroll"]], decls: 48, vars: 9, consts: [["href", "#", 1, "back-to-top", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-arrow-up-short"], ["disabled", "", "id", "rtl", "rel", "stylesheet", "href", "//cdn.rawgit.com/morteza/bootstrap-rtl/v3.3.4/dist/css/bootstrap-rtl.min.css"], ["id", "header", 1, "fixed-top"], [1, "container-fluid", "d-flex", "justify-content-between", "align-items-center"], ["href", "#about", 1, "logo"], ["src", "assets/img/logo.png", "alt", "", 1, "img-fluid"], ["id", "navbar", 1, "flip.text-right", "navbar", "order-last", "order-lg-0"], ["translate", "", "href", "#home", "onclick", "check1=true; check2=check3=check4=check5=check6=false", 1, "active", "nav-link", "scrollto", 3, "translate"], ["translate", "", "href", "#about", "onclick", "check2=true; check1=check3=check4=check5=check6=false", 1, "nav-link", "scrollto", 3, "translate"], ["translate", "", "href", "#Products", "onclick", "check3=true; check1=check2=check4=check5=check6=false", 1, "nav-link", "scrollto", 3, "translate"], ["translate", "", "href", "#services", "onclick", "check4=true; check2=check3=check1=check5=check6=false", 1, "nav-link", "scrollto", 3, "translate"], ["translate", "", "href", "#Partners", 1, "flip.text-right", "nav-link", "scrollto", 3, "translate"], ["translate", "", "href", "#contact", 1, "nav-link", "scrollto", 3, "translate"], ["id", "icon", 1, "bi", "bi-list", "mobile-nav-toggle", 2, "padding-top", "30px"], [1, "header-social-links"], [1, "sh2", "sh"], [1, "fas", "fa-globe-americas", 3, "click"], ["href", "#", "mat-raised-button", "", "matBadgeSize", "medium", "matBadgePosition", "after", "matBadgeColor", "accent", "routerLink", "/fav", 1, "sh2", "sh", 3, "matBadge"], [1, "bi", "bi-heart"], ["mat-raised-button", "", "matBadgeSize", "medium", "matBadgePosition", "after", "matBadgeColor", "accent", "routerLink", "/cart", 1, "sh2", 3, "matBadge"], [1, "bi", "bi-cart-dash-fill"], ["href", "#", 1, "sh2"], [2, "border", "none", "color", "#888888", "background-color", "transparent", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], ["menu", "matMenu"], ["mat-menu-item", ""], [3, "click"]], template: function NavScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Mr.Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Partners");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavScrollComponent_Template_i_click_32_listener() { return ctx.useLanguage(ctx.language); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-menu", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavScrollComponent_Template_span_click_43_listener() { return ctx.togleprice1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Prices in $");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavScrollComponent_Template_span_click_46_listener() { return ctx.togleprice2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Prices in L.L.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "home.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "about.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "products.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "features.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "partners.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "contact.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matBadge", ctx.cartFavItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matBadge", ctx.cartItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadge"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], styles: [".mobile-nav-toggle[_ngcontent-%COMP%] {\r\n    color: #222222;\r\n    font-size: 28px;\r\n    cursor: pointer;\r\n    display: none;\r\n    line-height: 0;\r\n    transition: 0.5s;\r\n  }\r\n  .sh[_ngcontent-%COMP%]   .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\r\n    padding: 4px;border-radius:50%; background-color: #4DA8DA;font-size: 21px;\r\n  \r\n  }\r\n  .sh[_ngcontent-%COMP%]{\r\n  padding: 4px;border-radius:50%; background-color: #4DA8DA;font-size: 21px;\r\n  \r\n }\r\n  .sh[_ngcontent-%COMP%]:hover{\r\n  background-color:  transparent;\r\n }\r\n  .oo[_ngcontent-%COMP%]   .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\r\n    padding: 4px;border-radius:50%; background-color: #4DA8DA;font-size: 21px;\r\n  \r\n  }\r\n  .sh2[_ngcontent-%COMP%] {\r\n    padding: 4px;font-size: 24px;\r\n  \r\n  }\r\n  .mobile-nav-toggle.bi-x[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }\r\n  @media (max-width: 991px) {\r\n    .mobile-nav-toggle[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n      display: block;\r\n      margin: 12px 0;\r\n      line-height: 3px;\r\n      text-align: center;\r\n      padding-bottom:38px;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      display: block;\r\n      padding-left:180px;\r\n      width: 100%;\r\n      height: 100vh;\r\n      position: fixed;\r\n      background: #e9e8e6;\r\n      top: 80px;\r\n      left: -100%;\r\n      transition: all .5s;\r\n      text-align: center;\r\n    }\r\n   .navbar[_ngcontent-%COMP%]   ul.show[_ngcontent-%COMP%]{\r\n     left: 0;\r\n   }\r\n  .navbar-mobile[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    overflow: hidden;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(9, 9, 9, 0.9);\r\n    transition: 0.3s;\r\n    z-index: 999;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   .mobile-nav-toggle[_ngcontent-%COMP%] {\r\n  \r\n    top: 50px;\r\n    right: 15px;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n    display: block;\r\n    position: absolute;\r\n    top: 55px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    left: 15px;\r\n    padding: 2px 0 1px 1px;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n    overflow-y: auto;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    padding-right: 15px;\r\n    color: #222222;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .navbar-mobile[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .navbar-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\r\n    color: #4DA8DA;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   .getstarted[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    position: static;\r\n    display: none;\r\n    margin: 10px 20px;\r\n    padding: 10px 0;\r\n    z-index: 99;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    background: #fff;\r\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    min-width: 200px;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:hover, .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .navbar-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\r\n    color: #4DA8DA;\r\n  }\r\n  \r\n  .navbar-mobile[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-active[_ngcontent-%COMP%]   .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n    display: block;\r\n  }}\r\n  .example-container[_ngcontent-%COMP%]   .navbar-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n    width: 500px;\r\n    height: 300px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n  .example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1zY3JvbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZLENBQUMsaUJBQWlCLEVBQUUseUJBQXlCLENBQUMsZUFBZTs7RUFFM0U7RUFDRDtFQUNDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSx5QkFBeUIsQ0FBQyxlQUFlOztDQUUxRTtFQUNBO0VBQ0MsOEJBQThCO0NBQy9CO0VBQ0M7SUFDRSxZQUFZLENBQUMsaUJBQWlCLEVBQUUseUJBQXlCLENBQUMsZUFBZTs7RUFFM0U7RUFDQTtJQUNFLFlBQVksQ0FBQyxlQUFlOztFQUU5QjtFQUVBO0lBQ0UsV0FBVztFQUNiO0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGNBQWM7TUFDZCxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGFBQWE7TUFDYixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGtCQUFrQjtJQUNwQjtHQUNEO0tBQ0UsT0FBTztHQUNUO0VBQ0Q7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7O0VBR0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0RBQWtEO0VBQ3BEOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQixDQUFDO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztFQUN0QztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBRUE7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoibmF2LXNjcm9sbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vYmlsZS1uYXYtdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgLnNoICAubmF2YmFyLW1vYmlsZSBhOmFjdGl2ZXtcclxuICAgIHBhZGRpbmc6IDRweDtib3JkZXItcmFkaXVzOjUwJTsgYmFja2dyb3VuZC1jb2xvcjogIzREQThEQTtmb250LXNpemU6IDIxcHg7XHJcbiAgXHJcbiAgfVxyXG4gLnNoe1xyXG4gIHBhZGRpbmc6IDRweDtib3JkZXItcmFkaXVzOjUwJTsgYmFja2dyb3VuZC1jb2xvcjogIzREQThEQTtmb250LXNpemU6IDIxcHg7XHJcbiAgXHJcbiB9XHJcbiAuc2g6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHRyYW5zcGFyZW50O1xyXG4gfVxyXG4gIC5vbyAubmF2YmFyLW1vYmlsZSBhOmFjdGl2ZXtcclxuICAgIHBhZGRpbmc6IDRweDtib3JkZXItcmFkaXVzOjUwJTsgYmFja2dyb3VuZC1jb2xvcjogIzREQThEQTtmb250LXNpemU6IDIxcHg7XHJcbiAgXHJcbiAgfVxyXG4gIC5zaDIge1xyXG4gICAgcGFkZGluZzogNHB4O2ZvbnQtc2l6ZTogMjRweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYtdG9nZ2xlLmJpLXgge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLm1vYmlsZS1uYXYtdG9nZ2xlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIGxpe1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206MzhweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgdWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZy1sZWZ0OjE4MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTllOGU2O1xyXG4gICAgICB0b3A6IDgwcHg7XHJcbiAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgIC5uYXZiYXIgdWwuc2hvd3tcclxuICAgICBsZWZ0OiAwO1xyXG4gICB9XHJcbiAgLm5hdmJhci1tb2JpbGUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoOSwgOSwgOSwgMC45KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItbW9iaWxlIC5tb2JpbGUtbmF2LXRvZ2dsZSB7XHJcbiAgXHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1tb2JpbGUgdWwgIC5uYXZiYXItbW9iaWxlIGE6YWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZzogMnB4IDAgMXB4IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5uYXZiYXItbW9iaWxlIGEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLW1vYmlsZSBhOmhvdmVyLCBcclxuICAubmF2YmFyLW1vYmlsZSBhOmFjdGl2ZSwubmF2YmFyLW1vYmlsZSAuYWN0aXZlLCAubmF2YmFyLW1vYmlsZSBsaTpob3ZlciA+IGEge1xyXG4gICAgY29sb3I6ICM0REE4REE7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItbW9iaWxlIC5nZXRzdGFydGVkIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1tb2JpbGUgLmRyb3Bkb3duIHVsIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDEyNywgMTM3LCAxNjEsIDAuMjUpO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLW1vYmlsZSAuZHJvcGRvd24gdWwgbGkge1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1tb2JpbGUgLmRyb3Bkb3duIHVsIGEge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLW1vYmlsZSAuZHJvcGRvd24gdWwgYSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1tb2JpbGUgLmRyb3Bkb3duIHVsIGE6aG92ZXIsIC5uYXZiYXItbW9iaWxlIC5kcm9wZG93biB1bCAuYWN0aXZlOmhvdmVyLFxyXG4gIC5uYXZiYXItbW9iaWxlIGE6YWN0aXZlLCAubmF2YmFyLW1vYmlsZSAuZHJvcGRvd24gdWwgbGk6aG92ZXIgPiBhIHtcclxuICAgIGNvbG9yOiAjNERBOERBO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLW1vYmlsZSAuZHJvcGRvd24gPiAuZHJvcGRvd24tYWN0aXZlICAubmF2YmFyLW1vYmlsZSBhOmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9fVxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciAgLm5hdmJhci1tb2JpbGUgYTphY3RpdmUge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "KJdk":
/*!****************************************!*\
  !*** ./src/app/deal/deal.component.ts ***!
  \****************************************/
/*! exports provided: DealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealComponent", function() { return DealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DealComponent {
    constructor() { }
    ngOnInit() {
        $(window).scroll(function () {
            {
                // if ($(this).scrollTop() > 3000) 
                //$('#1').stop().fadeOut();
                // else
                //   $('#1').stop().fadeIn();
            }
        });
    }
}
DealComponent.ɵfac = function DealComponent_Factory(t) { return new (t || DealComponent)(); };
DealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealComponent, selectors: [["app-deal"]], decls: 5, vars: 0, consts: [[1, "section-counter", "paralax-mf", "bg-image", 2, "background-color", "#e8f9fd"], [1, "overlay-mf"], [1, "container", "position-relative"], [1, "row"], ["src", "../../assets/img/deal.png", "id", "1", "alt", "", 2, "height", "460px"]], template: function DealComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".counter-box[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-align: center;\r\n  }\r\n  \r\n  @media (min-width: 577px) {\r\n    .counter-box[_ngcontent-%COMP%] {\r\n      margin-bottom: 1.8rem;\r\n    }\r\n  }\r\n  \r\n  .counter-ico[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .counter-ico[_ngcontent-%COMP%]   .ico-circle[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n    width: 60px;\r\n    line-height: 1.5;\r\n    box-shadow: 0 0 0 10px #cde1f8;\r\n  }\r\n  \r\n  .counter-num[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  \r\n  \r\n  .work-box[_ngcontent-%COMP%] {\r\n    margin-bottom: 3rem;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .work-box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.3);\r\n  }\r\n  \r\n  .work-img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .work-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 1s;\r\n  }\r\n  \r\n  .work-content[_ngcontent-%COMP%] {\r\n    padding: 2rem 3% 1rem 4%;\r\n  }\r\n  \r\n  .work-content[_ngcontent-%COMP%]   .w-more[_ngcontent-%COMP%] {\r\n    color: #4e4e4e;\r\n    font-size: .8rem;\r\n  }\r\n  \r\n  .work-content[_ngcontent-%COMP%]   .w-more[_ngcontent-%COMP%]   .w-ctegory[_ngcontent-%COMP%] {\r\n    color: #0078ff;\r\n  }\r\n  \r\n  .work-content[_ngcontent-%COMP%]   .w-like[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    color: #0078ff;\r\n    float: right;\r\n  }\r\n  \r\n  .work-content[_ngcontent-%COMP%]   .w-like[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #0078ff;\r\n  }\r\n  \r\n  .work-content[_ngcontent-%COMP%]   .w-like[_ngcontent-%COMP%]   .num-like[_ngcontent-%COMP%] {\r\n    font-size: .7rem;\r\n  }\r\n  \r\n  .w-title[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRTtNQUNFLHFCQUFxQjtJQUN2QjtFQUNGOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTs7aUVBRStEOztFQUMvRDtJQUNFLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJkZWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRlci1ib3gge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzdweCkge1xyXG4gICAgLmNvdW50ZXItYm94IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY291bnRlci1pY28ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvdW50ZXItaWNvIC5pY28tY2lyY2xlIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggI2NkZTFmODtcclxuICB9XHJcbiAgXHJcbiAgLmNvdW50ZXItbnVtIC5jb3VudGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAjIFBvcnRmb2xpb1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAud29yay1ib3gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLndvcmstYm94OmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC53b3JrLWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC53b3JrLWltZyBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIH1cclxuICBcclxuICAud29yay1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMyUgMXJlbSA0JTtcclxuICB9XHJcbiAgXHJcbiAgLndvcmstY29udGVudCAudy1tb3JlIHtcclxuICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLndvcmstY29udGVudCAudy1tb3JlIC53LWN0ZWdvcnkge1xyXG4gICAgY29sb3I6ICMwMDc4ZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC53b3JrLWNvbnRlbnQgLnctbGlrZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGNvbG9yOiAjMDA3OGZmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAud29yay1jb250ZW50IC53LWxpa2UgYSB7XHJcbiAgICBjb2xvcjogIzAwNzhmZjtcclxuICB9XHJcbiAgXHJcbiAgLndvcmstY29udGVudCAudy1saWtlIC5udW0tbGlrZSB7XHJcbiAgICBmb250LXNpemU6IC43cmVtO1xyXG4gIH1cclxuICBcclxuICAudy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9Il19 */"] });


/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 2, vars: 0, template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: httpInterceptorProviders, ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyInterceptor */ "d/jN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









function ProductComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_div_28_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const prod_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.addFav(prod_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_div_28_Template_i_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const prod_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.addCart(prod_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "add_shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Desc: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", prod_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prod_r1.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", prod_r1.productId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.getprice(prod_r1), " ", ctx_r0.pricesymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleCentered", true)("matRippleRadius", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", "desc.text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.description(ctx_r0.desc, prod_r1));
} }
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _MyInterceptor__WEBPACK_IMPORTED_MODULE_2__["NoopInterceptor"], multi: true },
];
class ProductComponent {
    constructor(auth, apicaller) {
        this.auth = auth;
        this.apicaller = apicaller;
        this.dat = "blazer";
        this.productArray = [];
        this.pricefact = 1;
        this.pricesymbol = "$";
        this.itemsCart = [];
        this.cartNumber = 0;
        this.itemsFav = [];
        this.cartFavNumber = 0;
        this.l = 0;
        this.desc = "E";
        this.apicaller.get("https://mrshopapi.herokuapp.com/api/lira").subscribe(users => { this.lira = parseInt(users.toString()); });
        this.auth.Lira.next(this.lira);
        this.auth.priceFact.subscribe(data => this.pricefact = data);
        this.auth.priceSynbol.subscribe(data => this.pricesymbol = data);
        this.getProducts("https://mrshopapi.herokuapp.com/api/" + this.dat);
        this.auth.fetchSub.subscribe(data => this.dat = data);
    }
    getprice(product) {
        console.log(this.pricefact);
        return product.price * this.pricefact;
    }
    getProducts(api) {
        this.apicaller.get(api).subscribe(users => { this.productArray = users; });
    }
    inc(prod) {
        if (prod.qnt != 5) {
            prod.qnt += 1;
        }
    }
    dec(prod) {
        if (prod.qnt != 1) {
            prod.qnt -= 1;
        }
    }
    addCart(category) {
        let cartDataNull = localStorage.getItem('localCart');
        if (cartDataNull == null) {
            let storeDataGet = [];
            storeDataGet.push(category);
            localStorage.setItem('localCart', JSON.stringify(storeDataGet));
        }
        else {
            var id = category.ProductId;
            let index = -1;
            let x = localStorage.getItem('localCart');
            this.itemsCart =
                JSON.parse(x);
            for (let i = 0; i < this.itemsCart.length; i++) {
                if (parseInt(id) ===
                    parseInt(this.itemsCart[i].ProductId)) {
                    this.itemsCart[i].qnt =
                        category.qnt;
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                this.itemsCart.push(category);
                localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
            }
            else {
                localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
            }
        }
        this.cartNumberFunc();
    }
    cartNumberFunc() {
        var y = localStorage.getItem('localCart');
        if (y != null)
            var cartValue = JSON.parse(y);
        this.cartNumber =
            cartValue.length;
        this.auth.cartSubject.next(this.cartNumber);
    }
    removeFav(category) {
        var idd = category.ProductId;
        let xx = localStorage.getItem('localFav');
        this.itemsFav =
            JSON.parse(xx);
        for (let i = 0; i < this.itemsFav.length; i++) {
            if (parseInt(idd) ===
                parseInt(this.itemsFav[i].ProductId)) {
                this.itemsFav.splice(i, 1);
                localStorage.setItem('localFav', JSON.stringify(this.itemsFav));
                break;
            }
        }
        this.cartFavNumberFunc();
    }
    addFav(category) {
        this.st = "#" + category.ProductId;
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.st).css({ "color": "red" });
        let cartNull = localStorage.getItem('localFav');
        if (cartNull == null) {
            let storedGet = [];
            storedGet.push(category);
            localStorage.setItem('localFav', JSON.stringify(storedGet));
        }
        else {
            var idd = category.ProductId;
            let indexx = -1;
            let xx = localStorage.getItem('localFav');
            this.itemsFav =
                JSON.parse(xx);
            for (let i = 0; i < this.itemsFav.length; i++) {
                if (parseInt(idd) ===
                    parseInt(this.itemsFav[i].ProductId)) {
                    indexx = i;
                    break;
                }
            }
            if (indexx == -1) {
                this.itemsFav.push(category);
                localStorage.setItem('localFav', JSON.stringify(this.itemsFav));
            }
            else {
                this.itemsFav.splice(indexx, 1);
                localStorage.setItem('localFav', JSON.stringify(this.itemsFav));
                jquery__WEBPACK_IMPORTED_MODULE_1__(this.st).css({ "color": "white" });
            }
        }
        this.cartFavNumberFunc();
    }
    description(des, prod) {
        if (des == "A")
            return prod.descriptionA;
        else
            return prod.description;
    }
    cartFavNumberFunc() {
        var yy = localStorage.getItem('localFav');
        if (yy != null)
            var cartValuee = JSON.parse(yy);
        this.cartFavNumber =
            cartValuee.length;
        this.auth.cartFavSubject.next(this.cartFavNumber);
    }
    ngOnInit() {
        this.fetchData('blazer');
        let y = localStorage.getItem('localFav');
        let itemsFav2 = JSON.parse(y);
        if (itemsFav2 != null)
            for (let i = 0; i < itemsFav2.length; i++) {
                let id2 = "#" + itemsFav2[i].ProductId;
                jquery__WEBPACK_IMPORTED_MODULE_1__(id2).css({ "color": "red" });
            }
    }
    fetchData(dat) {
        this.dat = dat;
        this.auth.desc.subscribe(data => this.desc = data);
        this.getProducts("https://mrshopapi.herokuapp.com/api/" + dat);
        if (dat == "accessories") {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#tabs").show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#tabs").hide();
        }
    }
    fetchAcc(dat) {
        this.getProducts("https://mrshopapi.herokuapp.com/api/accessories");
        if (dat == "bag") {
            this.productArray = this.productArray.splice(0, 6);
        }
        else if (dat == "belt") {
            this.productArray = this.productArray.splice(6, 4);
        }
        else if (dat == "cap") {
            this.productArray = this.productArray.splice(10, 6);
        }
        else {
            this.productArray = this.productArray.splice(16, 10);
        }
        ;
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product" }, decls: 29, vars: 5, consts: [["id", "portfolio", 1, "section-bg"], ["id", "cv", 1, "light"], ["data-aos", "fade-up", 1, "container"], [1, "section-header"], [1, "section-title"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "row"], [1, "col-lg-12"], ["id", "portfolio-flters"], ["translate", "", 1, "filter-active", "filter", 3, "translate", "click"], ["translate", "", 1, "filter", 3, "translate", "click"], ["id", "tabs", 1, "container"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", 2, "padding-left", "500px", "padding-bottom", "27px"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row"], ["class", "col-md-3 pb-3", 4, "ngFor", "ngForOf"], [1, "col-md-3", "pb-3"], [1, "wrapper"], [1, "container"], [1, "top"], ["alt", "", 2, "height", "80%", "width", "100%", "padding-top", "5px", 3, "src"], [2, "height", "5px"], [1, "bottom"], [1, "left", "container"], [1, "details", 2, "direction", "ltr!important"], [2, "font-size", "14px !important"], ["href", "#", 1, "add-favorite", 3, "id", "click"], [1, "fa", "fa-fw", "fa-heart"], [1, "buy"], ["matRipple", "", 1, "material-icons", 3, "matRippleCentered", "matRippleRadius", "click"], [1, "container", 2, "direction", "ltr", "text-align", "left"], [1, "inside"], [1, "icon"], [1, "material-icons"], [1, "contents"], ["translate", "", 3, "translate"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Our Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_Template_li_click_9_listener() { return ctx.fetchData("blazer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Blazers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_Template_li_click_11_listener() { return ctx.fetchData("shirts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_Template_li_click_13_listener() { return ctx.fetchData("shoes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_Template_li_click_15_listener() { return ctx.fetchData("accessories"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Accessories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_19_listener() { return ctx.fetchAcc("bag"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_21_listener() { return ctx.fetchAcc("belt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Belt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_23_listener() { return ctx.fetchAcc("lun"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Sunglasses");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_25_listener() { return ctx.fetchAcc("cap"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cap");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ProductComponent_div_28_Template, 31, 9, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", "blazer.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", "shirt.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", "shoes.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translate", "acces.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productArray);
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background: #E3E3D8;\n  font-family: sans-serif;\n  padding: 25px;\n}\n\n.add-favorite[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 450px;\n  background: white;\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  background-size: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom.clicked[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n  background: #f4f4f4;\n  float: left;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 10px;\n  float: left;\n  width: calc(90% - 60px);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(30% - 2px);\n  height: 100%;\n  background: #f1f1f1;\n  transition: background 0.5s;\n  border-left: solid thin rgba(0, 0, 0, 0.1);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 27px;\n  padding: 30px;\n  color: #254053;\n  transition: transform 0.5s;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]:hover {\n  background: #A6CDDE;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n  color: #00394B;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  width: calc(30% - 2px);\n  transition: transform 0.5s;\n  border-right: solid thin rgba(255, 255, 255, 0.3);\n  height: 50%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding: 30px;\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%] {\n  width: calc(30% - 1px);\n  clear: both;\n  border-right: solid thin rgba(255, 255, 255, 0.3);\n  height: 50%;\n  background: #BC3B59;\n  transition: transform 0.5s, background 0.5s;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]:hover {\n  background: #9B2847;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.5s;\n  font-size: 30px;\n  padding: 30px;\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:hover   .remove[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:hover   .done[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: #92879B;\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover {\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 80%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .contents[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n\n\n#portfolio[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n\n#portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 5px 0 35px 0;\n  list-style: none;\n  text-align: center;\n}\n\n#filters[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding: 8px 5px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n#portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 15px 15px 15px 0;\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  text-transform: uppercase;\n  background: #e8f9fd;\n  margin-bottom: 5px;\n  transition: all 0.3s ease-in-out;\n}\n\n#portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, #portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li.filter-active[_ngcontent-%COMP%] {\n  color: #4d8aa5;\n}\n\n#portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \"::\";\n  color: #A6CDDE;\n  font-weight: 700;\n  padding-left: 15px;\n  cursor: default;\n}\n\n#portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n#portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-wrap[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);\n  transition: 0.3s;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-wrap[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.16);\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n  position: relative;\n  height: 360px;\n  overflow: hidden;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  background: #000;\n  overflow: hidden;\n  height: 240px;\n  position: relative;\n  border-radius: 40px 4px 0 0;\n  margin: 0;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  transition: 0.3s;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .link-preview[_ngcontent-%COMP%], #portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .link-details[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  line-height: 1;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  background: #fff;\n  transition: 0.2s linear;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .link-preview[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], #portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .link-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #333;\n  line-height: 0;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .link-preview[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], #portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .link-details[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #A6CDDE;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .link-preview[_ngcontent-%COMP%] {\n  left: calc(50% - 38px);\n  top: calc(50% - 18px);\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .link-details[_ngcontent-%COMP%] {\n  right: calc(50% - 38px);\n  top: calc(50% - 18px);\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   .link-preview[_ngcontent-%COMP%] {\n  opacity: 1;\n  left: calc(50% - 44px);\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   .link-details[_ngcontent-%COMP%] {\n  opacity: 1;\n  right: calc(50% - 44px);\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\n  background: #fff;\n  text-align: center;\n  height: 3000px;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1px;\n  font-weight: 700;\n  margin-bottom: 18px;\n  padding-bottom: 0;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n#portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  color: #b8b8b8;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n\n\n.portfolio-details[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-slider[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  position: relative;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-slider[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  opacity: 1;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\n  padding: 30px;\n  box-shadow: 0px 0 30px rgba(51, 51, 51, 0.08);\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Satisfy\", serif !important;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  font-size: 15px;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.product[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n\n.box[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  height: 400px;\n}\n\n.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background: #4DA8DA;\n  border-radius: 50%;\n  font-size: 16px;\n  color: #fff;\n  margin: 0 8px;\n}\n\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 18px;\n}\n\n.glossy[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 51%), linear-gradient(#4DA8DA, #1be6ce);\n}\n\n.glossy[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 18px rgba(24, 168, 125, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FBR0o7O0FBRkk7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0FBSU47O0FBREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUdOOztBQUZNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFJSixxQkFBQTtBQUlKOztBQUZNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUlSOztBQUhRO0VBQ0UsMkJBQUE7QUFLVjs7QUFIUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBS1o7O0FBSFE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUtaOztBQUhRO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFLVjs7QUFKVTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFNWjs7QUFKVTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7QUFNWjs7QUFMWTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBT2Q7O0FBTFk7RUFDRSxtQkFBQTtBQU9kOztBQUxZO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBT2Q7O0FBSFE7RUFDQSxrQkFBQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBS1Y7O0FBRlU7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0FBSVo7O0FBSFk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFLZDs7QUFGVTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFJWjs7QUFIWTtFQUNFLG1CQUFBO0FBS2Q7O0FBSFk7RUFDRSwwQkFBQTtBQUtkOztBQUhZO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFLZDs7QUFEWTtFQUNFLDRCQUFBO0FBR2Q7O0FBSUk7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURSOztBQUdNO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRFI7O0FBRVE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBVjs7QUFFUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQVY7O0FBR007RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtBQURSOztBQUVRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQVY7O0FBRVE7RUFDRSxZQUFBO0FBQVY7O0FBRVE7RUFDRSxlQUFBO0FBQVY7O0FBTUE7OzthQUFBOztBQUlFO0VBQ0UsZUFBQTtBQUhKOztBQU1FO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUU7RUFDQSxXQUFBO0FBSEY7O0FBTUU7RUFDRSxlQUFBO0FBSEo7O0FBTUU7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSw0Q0FBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFISjs7QUFVRTtFQUNFLGNBQUE7QUFQSjs7QUFVRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFVRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFVRTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQVBKOztBQVVFO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBUEo7O0FBVUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBUEo7O0FBVUU7RUFDRSxXQUFBO0FBUEo7O0FBY0U7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVhKOztBQWNFOzsrREFBQTs7QUFHQTtFQUNFLGlCQUFBO0FBWEo7O0FBY0U7RUFDRSxXQUFBO0FBWEo7O0FBY0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBWEo7O0FBY0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQVhKOztBQWtCRTtFQUNFLGFBQUE7RUFDQSw2Q0FBQTtBQWZKOztBQWtCRTtFQUVFLHdDQUFBO0FBaEJKOztBQW1CRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFoQko7O0FBbUJFO0VBQ0UsZ0JBQUE7QUFoQko7O0FBbUJFO0VBQ0UsaUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsVUFBQTtBQWhCSjs7QUFpQkc7RUFDQyxlQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFiSjs7QUFlQTtFQUNJLGdCQUFBO0FBWko7O0FBY0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBWEo7O0FBYUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFWSjs7QUFZQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhIQUFBO0FBVko7O0FBYUE7RUFDRSw0Q0FBQTtBQVZGIiwiZmlsZSI6InByb2R1Y3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTNFM0Q4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxuLmFkZC1mYXZvcml0ZXtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG4gIC53cmFwcGVye1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cywgdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggMjBweCAzMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgIC50b3B7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5ib3R0b217XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgJi5jbGlja2Vke1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgIC5kZXRhaWxze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoOTAlIC0gNjBweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnV5e1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzAlIC0gMnB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6c29saWQgdGhpbiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjI3cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjU0MDUzO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0E2Q0RERTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIGl7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzAwMzk0QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0E2Q0RERTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwMCU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG9uZXtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzAlIC0gMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDpzb2xpZCB0aGluIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwJTtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVtb3Zle1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygzMCUgLSAxcHgpO1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OnNvbGlkIHRoaW4gcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQkMzQjU5O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgYmFja2dyb3VuZCAwLjVzO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5QjI4NDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciBpe1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgLnJlbW92ZSwgLmRvbmV7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5zaWRle1xyXG4gICAgICB6LWluZGV4Ojk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM5Mjg3OUI7XHJcbiAgICAgIHdpZHRoOjE0MHB4O1xyXG4gICAgICBoZWlnaHQ6MTQwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtNzBweDtcclxuICAgICAgcmlnaHQ6IC03MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwMHB4IDIwMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cywgYm9yZGVyLXJhZGl1cyAycywgdG9wIDFzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuaWNvbntcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDo4NXB4O1xyXG4gICAgICAgIHRvcDo4NXB4O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBoZWlnaHQ6ODAlO1xyXG4gICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHJpZ2h0OjE1cHg7XHJcbiAgICAgICAgICB0b3A6MTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnRze1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50c3tcclxuICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuOHM7XHJcbiAgICAgICAgdGFibGV7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSwgcCwgdGFibGV7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiBcclxuLypiZ2hqa25sa21sYmlodWd2eWhibmprbWo7a2Jna2hcclxuajhoeThvdHZ1Z3lpdmxoYmlqbm9raW1cclxuXFxiaXVndXZoIGlsYmp1bm9pcG1vW1xyXG4gIHBvaHA5eXZvdWcqL1xyXG4gICNwb3J0Zm9saW8ge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvICNwb3J0Zm9saW8tZmx0ZXJzIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDVweCAwIDM1cHggMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNmaWx0ZXJzID4gbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogOHB4IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAjcG9ydGZvbGlvICNwb3J0Zm9saW8tZmx0ZXJzIGxpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZjlmZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvICNwb3J0Zm9saW8tZmx0ZXJzIGxpOmhvdmVyLCAjcG9ydGZvbGlvICNwb3J0Zm9saW8tZmx0ZXJzIGxpLmZpbHRlci1hY3RpdmUge1xyXG4gICAgY29sb3I6ICM0ZDhhYTU7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gI3BvcnRmb2xpby1mbHRlcnMgPiBsaTphZnRlciB7XHJcbiAgY29udGVudDogXCI6OlwiO1xyXG4gIGNvbG9yOiAjQTZDRERFO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuICAjcG9ydGZvbGlvICNwb3J0Zm9saW8tZmx0ZXJzPiBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4gICNwb3J0Zm9saW8gI3BvcnRmb2xpby1mbHRlcnMgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gLnBvcnRmb2xpby13cmFwIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLXdyYXA6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSBmaWd1cmUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweCA0cHggMCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSBmaWd1cmU6aG92ZXIgaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIGZpZ3VyZSAubGluay1wcmV2aWV3LCAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSBmaWd1cmUgLmxpbmstZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSBmaWd1cmUgLmxpbmstcHJldmlldyBpLCAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSBmaWd1cmUgLmxpbmstZGV0YWlscyBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIGZpZ3VyZSAubGluay1wcmV2aWV3OmhvdmVyLCAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSBmaWd1cmUgLmxpbmstZGV0YWlsczpob3ZlciB7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIGZpZ3VyZSAubGluay1wcmV2aWV3OmhvdmVyIGksICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIGZpZ3VyZSAubGluay1kZXRhaWxzOmhvdmVyIGkge1xyXG4gICAgY29sb3I6ICNBNkNEREU7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIGZpZ3VyZSAubGluay1wcmV2aWV3IHtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzhweCk7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMThweCk7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIGZpZ3VyZSAubGluay1kZXRhaWxzIHtcclxuICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDM4cHgpO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE4cHgpO1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSBmaWd1cmU6aG92ZXIgLmxpbmstcHJldmlldyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA0NHB4KTtcclxuICB9XHJcbiAgXHJcbiAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gZmlndXJlOmhvdmVyIC5saW5rLWRldGFpbHMge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDQ0cHgpO1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzAwMHB4O1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWluZm8gaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8taW5mbyBoNCBhIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWluZm8gaDQgYTpob3ZlciB7XHJcblxyXG4gIH1cclxuICBcclxuICAjcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWluZm8gcCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNiOGI4Yjg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICMgUG9ydGZvbGlvIERldGFpbHNcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLnBvcnRmb2xpby1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLXNsaWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWRldGFpbHMtc2xpZGVyIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8taW5mbyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAgMzBweCByZ2JhKDUxLCA1MSwgNTEsIDAuMDgpO1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1pbmZvIGgzIHtcclxuIFxyXG4gICAgZm9udC1mYW1pbHk6IFwiU2F0aXNmeVwiLCBzZXJpZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1pbmZvIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1pbmZvIHVsIGxpICsgbGkge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8tZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWRlc2NyaXB0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXNjcmlwdGlvbiBwIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfS5wcm9kdWN0e1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcbi5ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG59XHJcbi5jb250ZW50IGg0e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogIzREQThEQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxufVxyXG4uY29udGVudCBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uZ2xvc3N5XHJcbntcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4zKSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA1MSUpLCBsaW5lYXItZ3JhZGllbnQoIzREQThEQSwgIzFiZTZjZSk7XHJcbn1cclxuXHJcbi5nbG9zc3k6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE4cHggcmdiYSgyNCwgMTY4LCAxMjUsIDAuMyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'lilyFioree';
        translate.setDefaultLang('en');
        function deferVideo() {
            //defer html5 video loading
            $("video source").each(function () {
                var sourceFile = $(this).attr("data-src");
                $(this).attr("src", sourceFile);
                // uncomment if video is not autoplay
                //video.play();
            });
        }
        window.onload = deferVideo;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[2, "width", "100%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Z7qP":
/*!********************************************************************************************!*\
  !*** ./src/app/dialog-elements-example-dialog/dialog-elements-example-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DialogElementsExampleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElementsExampleDialogComponent", function() { return DialogElementsExampleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");


class DialogElementsExampleDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
DialogElementsExampleDialogComponent.ɵfac = function DialogElementsExampleDialogComponent_Factory(t) { return new (t || DialogElementsExampleDialogComponent)(); };
DialogElementsExampleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogElementsExampleDialogComponent, selectors: [["app-dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your message has been sent. Thank you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory, useLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLanguage", function() { return useLanguage; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_scroll_nav_scroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-scroll/nav-scroll.component */ "GnMv");
/* harmony import */ var _card_shop_card_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-shop/card-shop.component */ "iOxi");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slider/slider.component */ "oB+8");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./text/text.component */ "z51i");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _deal_deal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./deal/deal.component */ "KJdk");
/* harmony import */ var _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./firstpage/firstpage.component */ "fhUg");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _fav_fav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fav/fav.component */ "mIk3");
/* harmony import */ var _dialog_elements_example_dialog_dialog_elements_example_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dialog-elements-example-dialog/dialog-elements-example-dialog.component */ "Z7qP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ "fXoL");



































const routes = [{ path: 'first-component', component: _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_22__["FirstpageComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"] },
    { path: '', component: _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_22__["FirstpageComponent"] },
    { path: 'fav', component: _fav_fav_component__WEBPACK_IMPORTED_MODULE_24__["FavComponent"] },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                }
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _nav_scroll_nav_scroll_component__WEBPACK_IMPORTED_MODULE_3__["NavScrollComponent"],
        _card_shop_card_shop_component__WEBPACK_IMPORTED_MODULE_4__["CardShopComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"],
        _text_text_component__WEBPACK_IMPORTED_MODULE_19__["TextComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
        _deal_deal_component__WEBPACK_IMPORTED_MODULE_21__["DealComponent"],
        _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_22__["FirstpageComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_23__["BlogComponent"],
        _fav_fav_component__WEBPACK_IMPORTED_MODULE_24__["FavComponent"],
        _dialog_elements_example_dialog_dialog_elements_example_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DialogElementsExampleDialogComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_27__["TeamComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http);
}
function useLanguage(language) {
    this.translate.use(language);
}


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _nav_scroll_nav_scroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav-scroll/nav-scroll.component */ "GnMv");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");









function CartComponent_div_8_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_8_tr_13_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const getCartDetail_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.incQnt(getCartDetail_r2.productId, getCartDetail_r2.qnt); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_8_tr_13_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const getCartDetail_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.decQnt(getCartDetail_r2.productId, getCartDetail_r2.qnt); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_8_tr_13_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const getCartDetail_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.singleDelete(getCartDetail_r2.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const getCartDetail_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](getCartDetail_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.getprice(ctx_r1.getCartDetails), " ", ctx_r1.pricesymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", getCartDetail_r2.qnt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", getCartDetail_r2.qnt * getCartDetail_r2.price, " $ ");
} }
function CartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Remove Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_div_8_tr_13_Template, 19, 5, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Continu to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ToHome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_8_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Remove All Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getCartDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Total - ", ctx_r0.pricesymbol, " ", ctx_r0.total, " ");
} }
class CartComponent {
    constructor(auth, inp, snackbar) {
        this.auth = auth;
        this.inp = inp;
        this.snackbar = snackbar;
        this.isLinear = false;
        this.getCartDetails = [];
        this.total = 0;
        this.cartNumber = 0;
        this.auth.priceFact.subscribe(data => this.pricefact = data);
        this.auth.priceSynbol.subscribe(data => this.pricesymbol = data);
        this.loadCart();
    }
    getprice(product) {
        console.log(this.pricefact);
        return product.price * this.pricefact;
    }
    ngOnInit() {
        this.auth.priceFact.subscribe(data => this.pricefact = data);
        this.auth.priceSynbol.subscribe(data => this.pricesymbol = data);
    }
    CartDetails() {
        if (localStorage.getItem('localCart')) {
            var x = localStorage.getItem('localCart');
            if (x != null)
                this.getCartDetails =
                    JSON.parse(x);
        }
    }
    incQnt(ProductId, qnt) {
        for (let i = 0; i < this.getCartDetails.length; i++) {
            if (this.getCartDetails[i].productId
                === ProductId) {
                if (qnt != 5)
                    this.getCartDetails[i].qnt
                        = parseInt(qnt) + 1;
                else
                    this.snackbar.open('Max quantity allowed in one order', 'Ok', {
                        duration: 3000
                    });
            }
        }
        localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
        this.loadCart();
    }
    decQnt(ProductId, qnt) {
        for (let i = 0; i < this.getCartDetails.length; i++) {
            if (this.getCartDetails[i].productId
                === ProductId) {
                if (qnt != 1)
                    this.getCartDetails[i].qnt
                        = parseInt(qnt) - 1;
            }
        }
        localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
        this.loadCart();
    }
    loadCart() {
        if (localStorage.getItem('localCart')) {
            var x = localStorage.getItem('localCart');
            if (x != null)
                this.getCartDetails =
                    JSON.parse(x);
            this.total =
                this.pricefact * this.getCartDetails.reduce(function (acc, val) {
                    return acc + (val.price * val.qnt);
                }, 0);
        }
    }
    removeall() {
        localStorage.removeItem('localCart');
        this.getCartDetails = [];
        this.total = 0;
        this.cartNumber = 0;
        this.auth.cartSubject.next(this.cartNumber);
    }
    singleDelete(getCartDetail) {
        if (localStorage.getItem('localCart')) {
            var x = localStorage.getItem('localCart');
            if (x != null)
                this.getCartDetails =
                    JSON.parse(x);
            for (let i = 0; i < this.getCartDetails.length; i++) {
                if (this.getCartDetails[i].prodId
                    === getCartDetail.productId) {
                    this.getCartDetails.splice(i, 1);
                    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
                    this.loadCart();
                    this.cartNumberFunc();
                }
            }
        }
    }
    cartNumberFunc() {
        var x = localStorage.getItem('localCart');
        if (x != null)
            var cartValue = JSON.parse(x);
        this.cartNumber =
            cartValue.length;
        this.auth.cartSubject.next(this.cartNumber);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 59, vars: 2, consts: [["linear", "", "linear", "false", 2, "padding-top", "100px"], ["label", "CART"], [2, "height", "70px"], [1, "cart_section"], [1, "container"], [4, "ngIf"], ["label", "CheckOut"], [1, "row"], [1, "col-xs-12", "col-md-4"], [1, "row", "display-tr"], [1, "panel-title", "display-td", 3, "translate"], ["role", "form", "id", "payment-form"], [1, "col-xs-12"], [1, "form-group"], ["for", "cardNumber"], [1, "input-group"], ["matInput", "", "type", "tel", "name", "cardNumber", "placeholder", "Valid Card Number", "autocomplete", "cc-number", "required", "", "autofocus", ""], [1, "col-xs-7", "col-md-7"], ["for", "cardExpiry"], [1, "hidden-xs"], [1, "visible-xs-inline"], ["matInput", "", "type", "tel", "name", "cardExpiry", "placeholder", "MM / YY", "autocomplete", "cc-exp", "required", ""], [1, "col-xs-5", "col-md-5", "pull-right"], ["for", "cardCVC"], ["matInput", "", "type", "tel", "name", "cardCVC", "placeholder", "CVC", "autocomplete", "cc-csc", "required", ""], ["for", "couponCode"], ["matInput", "", "type", "text", "name", "couponCode"], [1, "btn", "btn-success", "btn-lg", "btn-block", 3, "click"], [1, "row", 2, "display", "none"], [1, "payment-errors"], [4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "col-md-6", 2, "margin-top", "40px", "margin-left", "400px"], ["type", "button", "matStepperNext", "", 1, "removeall", 2, "margin-right", "10px"], ["href", "#Home", 2, "color", "seashell !important"], ["type", "button", 1, "removeall"], ["type", "button", 1, "removeall", 2, "margin-left", "10px", 3, "click"], [1, "bi", "bi-trash"], [2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"], [1, "content"], ["type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-plus"], [1, "fas", "fa-minus"], ["type", "button", 1, "delete", 3, "click"], [1, "fas", "fa-trash"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-vertical-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_div_8_Template, 27, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Payment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CARD NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "EXPIRATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "EXP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CV CODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "COUPON CODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_54_listener() { return ctx.removeall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getCartDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "paymentt.text");
    } }, directives: [_nav_scroll_nav_scroll_component__WEBPACK_IMPORTED_MODULE_4__["NavScrollComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"]], styles: [".cart_section[_ngcontent-%COMP%]{\r\n    padding: 40px 0;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    font-family: arial, \r\n    sans-serif;\r\nborder-collapse: collapse;\r\n    width: 100%;\r\n  }\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid\r\n     #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n  }\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n    background-color:\r\n     #dddddd;\r\n  }\r\n.btn[_ngcontent-%COMP%]{\r\n    background:\r\n    #4DA8DA;\r\n    border-radius: 50%;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    margin: 0 8px;\r\n}\r\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 800;\r\n    font-size: 18px;\r\n}\r\n.cart_section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    font-size: 22px;\r\n}\r\n.delete[_ngcontent-%COMP%]{\r\n  border: 1px solid\r\n   #4DA8DA;\r\n  cursor: pointer;\r\n}\r\n.delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  color: 4DA8DA;\r\n}\r\n.removeall[_ngcontent-%COMP%]{\r\n  background: #4DA8DA;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    border: 1px solid\r\n     #4DA8DA;\r\n    padding: 4px 10px;\r\n    border-radius: 4px;\r\n    margin-top: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJO2NBQ1U7QUFDZCx5QkFBeUI7SUFDckIsV0FBVztFQUNiO0FBRUE7SUFDRTtZQUNRO0lBQ1IsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUVBO0lBQ0U7WUFDUTtFQUNWO0FBRUE7SUFDRTtXQUNPO0lBQ1Asa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7RUFDRTtVQUNRO0VBQ1IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEI7WUFDUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0X3NlY3Rpb257XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbn1cclxudGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBcclxuICAgIHNhbnMtc2VyaWY7XHJcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkXHJcbiAgICAgI2RkZGRkZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOlxyXG4gICAgICNkZGRkZGQ7XHJcbiAgfVxyXG5cclxuICAuYnRue1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICM0REE4REE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuLmNvbnRlbnQgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmNhcnRfc2VjdGlvbiBoM3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmRlbGV0ZXtcclxuICBib3JkZXI6IDFweCBzb2xpZFxyXG4gICAjNERBOERBO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVsZXRlIGl7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiA0REE4REE7XHJcbn1cclxuLnJlbW92ZWFsbHtcclxuICBiYWNrZ3JvdW5kOiAjNERBOERBO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWRcclxuICAgICAjNERBOERBO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
        this.Lira = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.desc = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.priceFact = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.priceSynbol = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.cartFavSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.fetchSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getProducts(api) {
        return this.http.get(api);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "d/jN":
/*!******************************************!*\
  !*** ./src/app/product/MyInterceptor.ts ***!
  \******************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


/** Pass untouched request through to the next request handler. */
class NoopInterceptor {
    constructor(http) {
        this.http = http;
    }
    intercept(req, next) {
        return next.handle(req);
    }
    getProducts() {
        return this.http.get(`https://jsonplaceholder.typicode.com/users`);
    }
}
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NoopInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoopInterceptor, factory: NoopInterceptor.ɵfac });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");


class HeaderComponent {
    constructor(auth) {
        this.auth = auth;
        this.cartItem = 0;
        this.auth.cartSubject.subscribe(data => this.cartItem = data);
    }
    ngOnInit() {
        this.cartItemFunc();
    }
    cartItemFunc() {
        if (localStorage.getItem('localCart') != null) {
            var x = localStorage.getItem('localCart');
            if (x != null)
                var cartCount = JSON.parse(x);
            this.cartItem =
                cartCount.length;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "fQWx":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 5, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Title for the under construction card
         */
        const MSG_EXTERNAL_7496367199789781856$$SRC_APP_POST_POST_COMPONENT_TS_1 = goog.getMsg("Under Construction!");
        i18n_0 = MSG_EXTERNAL_7496367199789781856$$SRC_APP_POST_POST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:Title for the under construction card:Under Construction!`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc A description for the under construction card.
         */
        const MSG_EXTERNAL_2906745387995266491$$SRC_APP_POST_POST_COMPONENT_TS_3 = goog.getMsg("This page is under construction.");
        i18n_2 = MSG_EXTERNAL_2906745387995266491$$SRC_APP_POST_POST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:A description for the under construction card.:This page is under construction.`;
    } return [i18n_0, i18n_2]; }, template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "fhUg":
/*!**************************************************!*\
  !*** ./src/app/firstpage/firstpage.component.ts ***!
  \**************************************************/
/*! exports provided: FirstpageComponent, DialogElementsExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstpageComponent", function() { return FirstpageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElementsExampleDialog", function() { return DialogElementsExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nav_scroll_nav_scroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav-scroll/nav-scroll.component */ "GnMv");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/product.component */ "LvIC");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../text/text.component */ "z51i");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slider/slider.component */ "oB+8");








class FirstpageComponent {
    constructor(dialog, apicaller) {
        this.dialog = dialog;
        this.apicaller = apicaller;
    }
    ngOnInit() { this.carouselMethod(); }
    carouselMethod() {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [document.querySelectorAll(el)];
            }
            else {
                return document.querySelector(el);
            }
        };
        let heroCarouselIndicators = select("#hero-carousel-indicators");
        let heroCarouselItems = select('#heroCarousel .carousel-item', true);
        heroCarouselItems.forEach((item, index) => {
            (index === 0) ?
                heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
                heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>";
        });
    }
    R() {
        this.dialog.open(DialogElementsExampleDialog);
    }
}
FirstpageComponent.ɵfac = function FirstpageComponent_Factory(t) { return new (t || FirstpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FirstpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstpageComponent, selectors: [["app-firstpage"]], decls: 221, vars: 37, consts: [[1, "Row"], ["id", "Home"], [1, "jumbotron"], [1, "Home-container"], ["autoplay", "", "muted", "", "loop", "", "poster", "../assets/img/vid_Moment.jpg"], ["src", "../assets/video/vid.mp4", "data-src", "", "type", "video/mp4"], [1, "my-4"], [1, "container"], ["translate", "", 2, "font-size", "24px", 3, "translate"], ["href", "#about", "title", "Scroll Down", 1, "btn-scroll", "scrollto"], [1, "bx", "bx-chevron-down"], ["id", "main"], ["id", "featured-services"], [1, "row"], [1, "col-lg-3", "box"], [1, "fas", "fa-money-check"], [1, "title"], ["href", "", "translate", "", 3, "translate"], ["translate", "", 1, "description", 3, "translate"], [1, "col-lg-3", "box", "box-bg"], [1, "fas", "fa-truck"], [1, "fas", "fa-undo"], [1, "far", "fa-comments"], ["id", "about"], ["data-aos", "fade-up", 1, "container"], [1, "section-header"], ["translate", "", 3, "translate"], [1, "row", "about-cols"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-4"], ["id", "Products"], [1, "container", "row", "ml-12", "md-12", "sm-12"], ["id", "Offers"], ["id", "Partners"], ["id", "hero "], [1, "hero-container", 2, "padding", "60px!important"], ["id", "heroCarousel", "data-bs-ride", "carousel", "data-bs-interval", "5000", 1, "carousel", "slide", "carousel-fade"], ["id", "hero-carousel-indicators", 1, "carousel-indicators"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active", 2, "background-image", "url(../../assets/img/team-1.jpg)", "height", "400px", "width", "1420px", "background-size", "100%"], [1, "carousel-container"], [1, "container", 2, "margin", "200px"], ["translate", "", 1, "animate__animated", "animate__fadeInDown", 3, "translate"], [1, "carousel-item", 2, "background-image", "url(../../assets/img/team-2.jpg)", "height", "400px", "background-size", "100%"], [1, "container", 2, "margin", "50px"], [1, "carousel-item", 2, "background-image", "url(../../assets/img/team-3.jpg)", "height", "400px", "background-size", "100%"], [1, "carousel-container", 2, "margin", "200px"], ["translate", "", 1, "animate__animated", "animate__fadeInDown", "container", 3, "translate"], ["href", "#heroCarousel", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", "onclick", "this.carouselMethod()", 1, "carousel-control-prev-icon", "bi", "bi-chevron-left"], ["href", "#heroCarousel", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", "onclick", "this.carouselMethod()", 1, "carousel-control-next-icon", "bi", "bi-chevron-right"], ["id", "contact", 1, "section-bg"], [1, "row", "contact-info"], [1, "col-md-4"], [1, "contact-address"], [1, "bi", "bi-geo-alt"], [1, "contact-phone"], [1, "bi", "bi-phone"], ["href", "tel:+155895548855"], [1, "contact-email"], [1, "bi", "bi-envelope"], ["href", "mailto:info@example.com"], [1, "form"], ["role", "form", 3, "submit"], [1, "form-group", "col-md-6"], ["type", "text", "placeholder", "Your Name", "required", "", 1, "form-control"], ["type", "email", "placeholder", "Your Email", "required", "", 1, "form-control"], [1, "form-group"], ["type", "text", "placeholder", "Subject", "required", "", 1, "form-control"], ["rows", "5", "placeholder", "Message", "required", "", 1, "form-control"], [1, "text-center"], ["type", "submit", "translate", "", 3, "translate"], ["id", "footer"], [1, "footer-top"], [1, "col-lg-4", "col-md-6", "footer-info"], [1, "col-lg-4", "col-md-6", "footer-links"], [1, "bi", "bi-chevron-right"], ["href", "#home", "translate", "", 3, "translate"], ["href", "#about", "translate", "", 3, "translate"], ["href", "#Produts", "translate", "", 3, "translate"], ["href", "#Partners", "translate", "", 3, "translate"], ["href", "#Offers", "translate", "", 3, "translate"], [1, "col-lg-4", "col-md-6", "footer-contact"], ["frameborder", "0", "allowfullscreen", "", "src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52655.444650381585!2d35.81080522265233!3d34.42763675923612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f6ab9db89d33%3A0x323c52527dde8578!2sTripoli!5e0!3m2!1sen!2slb!4v1627591889590!5m2!1sen!2slb", 2, "border", "0", "width", "79%", "height", "120px"], [1, "social-links"], ["href", "#", 1, "twitter"], [1, "bi", "bi-twitter"], ["href", "#", 1, "facebook"], [1, "bi", "bi-facebook"], ["href", "#", 1, "instagram"], [1, "bi", "bi-instagram"], ["href", "#", 1, "linkedin"], [1, "bi", "bi-linkedin"], [1, "copyright"], [1, "credits"], ["href", ""], [1, "bi", "bi-heart"]], template: function FirstpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mr. Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Helping YOU To Be More Fashionable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Payment Secure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Your credit card number, expiry date and cryptogram are encrypted in the transmission ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Free Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Shop now on our website without any delivery charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "14 Days Easy Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "You have 14 days to return a product you bought on our website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Friendly Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "You can contact us by email for any help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "header", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Our Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "From business attire to casual clothing to sportswear, Mr.shop sells high-quality apparel for men and youngs. We Live Without Limits! We are the bigger-the-better idea people and the up-for-anything instigators. Working hard to improve the world around us, we seek new frontiers to fuel our ingenuity as pioneers. We invite you to push beyond what is, to what could be in the work you do and the life you choose. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "app-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Here's some of our team's experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "ol", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "We are professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "At vero eos et accusamus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Temporibus autem quibusdam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstpageComponent_Template_a_click_94_listener() { return ctx.carouselMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstpageComponent_Template_a_click_96_listener() { return ctx.carouselMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "section", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "You can contact us remotely or come to our store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "A108 Adam Street, NY 535022, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "+1 5589 55488 55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "mr.shop@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "form", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FirstpageComponent_Template_form_submit_131_listener() { return ctx.R(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "textarea", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "footer", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Mr.Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "From business attire to casual clothing to sportswear, Mr.shop sells high-quality apparel for men and youngs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Useful Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Terms of service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "strong", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " +961 81393096 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "strong", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " lily.hl80@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "iframe", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u00A9 Copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Mr.Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Designed with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Halima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "help.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "payment.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "paym.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "free.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "shop.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "14.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "14d.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "fsupp.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "supp.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "blog.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "blogg.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "team.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "teams.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "bigcommerce.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "api.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "bigcommerce.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "contact.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "youcan.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "address.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "phone.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "email.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "send.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "frombus.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "usef.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "home.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "about.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "products.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "partners.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "contact.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "contact.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "addresss.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "phone.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "email.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "copy.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "right.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "design.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "by.text");
    } }, directives: [_nav_scroll_nav_scroll_component__WEBPACK_IMPORTED_MODULE_3__["NavScrollComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"], _text_text_component__WEBPACK_IMPORTED_MODULE_6__["TextComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"]], styles: ["#hero[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: #000;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n@media (max-height: 500px) {\r\n  #hero[_ngcontent-%COMP%] {\r\n    height: 150vh;\r\n  }\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  margin: 200px;\r\n  bottom: 0;\r\n  top: 70px;\r\n  left: 50px;\r\n  right: 50px;\r\n}\r\n#hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n#hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: rgb(5, 5, 5);\r\n  margin-bottom: 30px;\r\n  font-size: 48px;\r\n  font-weight: 700;\r\n}\r\n@media (max-width: 768px) {\r\n  #hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n  }\r\n}\r\n#hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin: 0 auto 30px auto;\r\n  color: rgb(12, 11, 11);\r\n}\r\n@media (min-width: 1024px) {\r\n  #hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n  }\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\r\n  transition-property: opacity;\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .active.carousel-item-start[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .active.carousel-item-end[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .carousel-item-next.carousel-item-start[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .carousel-item-prev.carousel-item-end[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transition: 1.2s;\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .carousel-item-next[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .carousel-item-prev[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .active.carousel-item-start[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-fade[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .active.carousel-item-end[_ngcontent-%COMP%] {\r\n  left: 0;\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\r\n  width: 10%;\r\n}\r\n@media (min-width: 1024px) {\r\n  #hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\r\n    width: 5%;\r\n  }\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\r\n  background: none;\r\n  font-size: 32px;\r\n  line-height: 1;\r\n}\r\n#hero[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n#featured-services[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nbackground: linear-gradient(315deg, #20bf55 0%, #01baef 74%);\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n\r\n    font-size: 48px;\r\n    display: inline-block;\r\n    line-height: 1;\r\n  }\r\n#featured-services[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    margin: 15px 0;\r\n    font-size: 18px;\r\n  }\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    overflow: hidden;\r\n    background-color:black;\r\n    height: 600px;\r\n  }\r\n.jumbotron[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 0;\r\n    width:100%;\r\n    height:100%;\r\n    \r\n    object-fit: cover;\r\n    opacity:0.5;\r\n  }\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    position: relative;\r\n  }\r\n#Home[_ngcontent-%COMP%] {\r\n    width: 100%;height:100%;\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n#Home[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n#Home[_ngcontent-%COMP%]   .Home-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n#Home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0 0 10px 0;\r\n    font-size: 64px;\r\n    font-family: \"Satisfy\", serif;\r\n    color: rgb(250, 248, 248);\r\n  }\r\n#Home[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: rgb(241, 238, 238);\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n  }\r\n#Home[_ngcontent-%COMP%]   .btn-scroll[_ngcontent-%COMP%] {\r\n    transition: 1.2s;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    animation: up-down 1s ease-in-out infinite alternate-reverse both;\r\n  }\r\n#Home.btn-scroll[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 48px;\r\n  }\r\n#hero[_ngcontent-%COMP%]   .btn-scroll[_ngcontent-%COMP%]:hover {\r\n    color: #ffb727;\r\n  }\r\n@media (min-width: 1024px) {\r\n    #hero[_ngcontent-%COMP%] {\r\n      background-attachment: fixed;\r\n    }\r\n  }\r\n@media (max-width: 575px) {\r\n    #hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      font-size: 40px;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n    }\r\n  }\r\n@keyframes up-down {\r\n    0% {\r\n      transform: translateY(5px);\r\n    }\r\n    100% {\r\n      transform: translateY(-5px);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7K0RBRStEO0FBQy9EO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7QUFDWDtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBOzs7RUFHRSxVQUFVO0FBQ1o7QUFFQTs7O0VBR0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUVBOzs7O0VBSUUsT0FBTztFQUNQLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNGO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFJRTtBQUNGLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0Isb0NBQW9DOztJQUVoQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUdGO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtFQUNmO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsV0FBVztFQUNiO0FBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXLENBQUMsV0FBVztJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7RUFDVjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixpRUFBaUU7RUFDbkU7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFO01BQ0UsNEJBQTRCO0lBQzlCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0Usa0JBQWtCO0lBQ3BCO0VBQ0Y7QUFXQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRiIsImZpbGUiOiJmaXJzdHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgSGVybyBTZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI2hlcm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1MDBweCkge1xyXG4gICNoZXJvIHtcclxuICAgIGhlaWdodDogMTUwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4jaGVybyAuY2Fyb3VzZWwsICNoZXJvIC5jYXJvdXNlbC1pbm5lciwgI2hlcm8gLmNhcm91c2VsLWl0ZW0sICNoZXJvIC5jYXJvdXNlbC1pdGVtOjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbiNoZXJvIC5jYXJvdXNlbC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4jaGVybyAuY2Fyb3VzZWwtaXRlbTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbiNoZXJvIC5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiAyMDBweDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiA3MHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbiNoZXJvIC5jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2hlcm8gaDIge1xyXG4gIGNvbG9yOiByZ2IoNSwgNSwgNSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI2hlcm8gaDIge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2hlcm8gcCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XHJcbiAgY29sb3I6IHJnYigxMiwgMTEsIDExKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICNoZXJvIHAge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbn1cclxuXHJcbiNoZXJvIC5jYXJvdXNlbC1mYWRlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jaGVybyAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0ge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbn1cclxuXHJcbiNoZXJvIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSxcclxuI2hlcm8gLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1zdGFydCxcclxuI2hlcm8gLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1lbmQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbiNoZXJvIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLFxyXG4jaGVybyAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLXN0YXJ0LFxyXG4jaGVybyAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLWVuZCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAxLjJzO1xyXG59XHJcblxyXG4jaGVybyAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tbmV4dCxcclxuI2hlcm8gLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLXByZXYsXHJcbiNoZXJvIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tc3RhcnQsXHJcbiNoZXJvIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tZW5kIHtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuXHJcbiNoZXJvIC5jYXJvdXNlbC1jb250cm9sLXByZXYsICNoZXJvIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAjaGVybyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAjaGVybyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICAgIHdpZHRoOiA1JTtcclxuICB9XHJcbn1cclxuXHJcbiNoZXJvIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiwgI2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuI2hlcm8gLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4gICNmZWF0dXJlZC1zZXJ2aWNlcyBpIHtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzIwYmY1NSAwJSwgIzAxYmFlZiA3NCUpO1xyXG4td2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICBcclxuICAjZmVhdHVyZWQtc2VydmljZXMgaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gIH1cclxuICAuanVtYm90cm9uIHZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAvKiAgb2JqZWN0LWZpdCBpcyBub3Qgc3VwcG9ydGVkIG9uIElFICAqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvcGFjaXR5OjAuNTtcclxuICB9XHJcbiAgLmp1bWJvdHJvbiAuY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gICNIb21lIHtcclxuICAgIHdpZHRoOiAxMDAlO2hlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgI0hvbWU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNIb21lIC5Ib21lLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgI0hvbWUgaDEge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU2F0aXNmeVwiLCBzZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMjUwLCAyNDgsIDI0OCk7XHJcbiAgfVxyXG4gIFxyXG4gICNIb21lIGgyIHtcclxuICAgIGNvbG9yOiByZ2IoMjQxLCAyMzgsIDIzOCk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gICNIb21lIC5idG4tc2Nyb2xsIHtcclxuICAgIHRyYW5zaXRpb246IDEuMnM7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgYW5pbWF0aW9uOiB1cC1kb3duIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlIGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gICNIb21lLmJ0bi1zY3JvbGwgaSB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNoZXJvIC5idG4tc2Nyb2xsOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZiNzI3O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAjaGVybyB7XHJcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgI2hlcm8gaDEge1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAjaGVybyBoMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHVwLWRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgdXAtZG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIH1cclxuICB9Il19 */"] });
class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.ɵfac = function DialogElementsExampleDialog_Factory(t) { return new (t || DialogElementsExampleDialog)(); };
DialogElementsExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogElementsExampleDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your message has been sent. Thank you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "iOxi":
/*!**************************************************!*\
  !*** ./src/app/card-shop/card-shop.component.ts ***!
  \**************************************************/
/*! exports provided: CardShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardShopComponent", function() { return CardShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardShopComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardShopComponent.ɵfac = function CardShopComponent_Factory(t) { return new (t || CardShopComponent)(); };
CardShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardShopComponent, selectors: [["app-card-shop"]], decls: 3, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700i", "rel", "stylesheet"]], template: function CardShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    } }, styles: ["body[_ngcontent-%COMP%]{    \r\nfont-family: 'Roboto Condensed', sans-serif;\r\noverflow-x: hidden;\r\n\r\n}\r\n h1[_ngcontent-%COMP%] { margin:150px auto 30px auto; text-align:center; color:#fff;}\r\n .hi-slide[_ngcontent-%COMP%] { position: relative; width: 754px; height: 292px; margin: 115px auto 0; }\r\n .hi-slide[_ngcontent-%COMP%]   .hi-next[_ngcontent-%COMP%], .hi-slide[_ngcontent-%COMP%]   .hi-prev[_ngcontent-%COMP%] \r\n     { position: absolute;\r\n       top: 50%; \r\n       width: 40px;\r\n       height: 40px; \r\n       margin-top: -20px;     \r\n         border-radius: 50px; \r\n          \r\n         \r\n       line-height: 40px;\r\n       text-align: center; \r\n       cursor: pointer;\r\n       background-color: #fff; \r\n       color: black;               \r\n       transition: all 0.6s;\r\n       font-size: 20px; \r\n         font-weight: bold;\r\n     }\r\n .hi-slide[_ngcontent-%COMP%]   .hi-next[_ngcontent-%COMP%]:hover, .hi-slide[_ngcontent-%COMP%]   .hi-prev[_ngcontent-%COMP%]:hover \r\n     {\r\n     opacity: 1; \r\n     background-color: #fff;  \r\n     }\r\n .hi-slide[_ngcontent-%COMP%]   .hi-prev[_ngcontent-%COMP%] { left: -60px; }\r\n .hi-slide[_ngcontent-%COMP%]   .hi-prev[_ngcontent-%COMP%]::before { content: '<'; }\r\n .hi-slide[_ngcontent-%COMP%]   .hi-next[_ngcontent-%COMP%] { right: -60px; }\r\n .hi-slide[_ngcontent-%COMP%]   .hi-next[_ngcontent-%COMP%]::before { content: '>'; }\r\n .hi-slide[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]\r\n             { \r\n                 list-style: none; \r\n                 position: relative;\r\n                 width: 754px; \r\n                 height: 292px; \r\n                 margin: 0;\r\n                 padding: 0;\r\n     }\r\n .hi-slide[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n     overflow: hidden; \r\n     position: absolute; \r\n     z-index: 0; \r\n     left: 377px;\r\n     top: 146px; \r\n     width: 0; \r\n     height: 0; \r\n     margin: 0; \r\n     padding: 0;\r\n     border: 3px solid #fff;              \r\n     background-color: #333; \r\n     cursor: pointer; }\r\n .hi-slide[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] { width: 100%; height: 100%; background-position: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtc2hvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0Msa0JBQWtCOztBQUVsQjtDQUNDLEtBQUssMkJBQTJCLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxDQUFDO0NBRTVELFlBQVksa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRTtDQUV4Rjs7T0FFTyxrQkFBa0I7T0FDbEIsUUFBUTtPQUNSLFdBQVc7T0FDWCxZQUFZO09BQ1osaUJBQWlCO1NBQ2YsbUJBQW1COzs7T0FHckIsaUJBQWlCO09BQ2pCLGtCQUFrQjtPQUNsQixlQUFlO09BQ2Ysc0JBQXNCO09BQ3RCLFlBQVk7T0FDWixvQkFBb0I7T0FDcEIsZUFBZTtTQUNiLGlCQUFpQjtLQUNyQjtDQUNEOzs7S0FHQyxVQUFVO0tBQ1Ysc0JBQXNCO0tBQ3RCO0NBRUQscUJBQXFCLFdBQVcsRUFBRTtDQUV0Qyw2QkFBNkIsWUFBWSxFQUFFO0NBQzNDLHFCQUFxQixZQUFZLEVBQUU7Q0FDbkMsNkJBQTZCLFlBQVksRUFBRTtDQUV0Qzs7aUJBRVksZ0JBQWdCO2lCQUNoQixrQkFBa0I7aUJBQ2xCLFlBQVk7aUJBQ1osYUFBYTtpQkFDYixTQUFTO2lCQUNULFVBQVU7S0FDdEI7Q0FHSjtLQUNJLGdCQUFnQjtLQUNoQixrQkFBa0I7S0FDbEIsVUFBVTtLQUNWLFdBQVc7S0FDWCxVQUFVO0tBQ1YsUUFBUTtLQUNSLFNBQVM7S0FDVCxTQUFTO0tBQ1QsVUFBVTtLQUNWLHNCQUFzQjtLQUN0QixzQkFBc0I7S0FDdEIsZUFBZSxFQUFFO0NBRXJCLDRCQUE0QixXQUFXLEVBQUUsWUFBWSxFQUFFLDJCQUEyQixDQUFDIiwiZmlsZSI6ImNhcmQtc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiBcclxuYm9keXsgICAgXHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbm92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbn1cclxuIGgxIHsgbWFyZ2luOjE1MHB4IGF1dG8gMzBweCBhdXRvOyB0ZXh0LWFsaWduOmNlbnRlcjsgY29sb3I6I2ZmZjt9XHJcblxyXG4gICAgIC5oaS1zbGlkZSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDc1NHB4OyBoZWlnaHQ6IDI5MnB4OyBtYXJnaW46IDExNXB4IGF1dG8gMDsgfVxyXG4gICAgIFxyXG4uaGktc2xpZGUgLmhpLW5leHQsXHJcbi5oaS1zbGlkZSAuaGktcHJldiBcclxuICAgICB7IHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHRvcDogNTAlOyBcclxuICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgaGVpZ2h0OiA0MHB4OyBcclxuICAgICAgIG1hcmdpbi10b3A6IC0yMHB4OyAgICAgXHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgICAgICBjb2xvcjogYmxhY2s7ICAgICAgICAgICAgICAgXHJcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgICAgIGZvbnQtc2l6ZTogMjBweDsgXHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIH1cclxuICAgIC5oaS1zbGlkZSAuaGktbmV4dDpob3ZlciwgXHJcbiAgICAgLmhpLXNsaWRlIC5oaS1wcmV2OmhvdmVyIFxyXG4gICAgIHtcclxuICAgICBvcGFjaXR5OiAxOyBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgLmhpLXNsaWRlIC5oaS1wcmV2IHsgbGVmdDogLTYwcHg7IH1cclxuICAgICBcclxuLmhpLXNsaWRlIC5oaS1wcmV2OjpiZWZvcmUgeyBjb250ZW50OiAnPCc7IH1cclxuLmhpLXNsaWRlIC5oaS1uZXh0IHsgcmlnaHQ6IC02MHB4OyB9XHJcbi5oaS1zbGlkZSAuaGktbmV4dDo6YmVmb3JlIHsgY29udGVudDogJz4nOyB9XHJcblxyXG4gICAgIC5oaS1zbGlkZSA+IHVsXHJcbiAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxyXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICB3aWR0aDogNzU0cHg7IFxyXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMjkycHg7IFxyXG4gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICBcclxuIC5oaS1zbGlkZSA+IHVsID4gbGkge1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgei1pbmRleDogMDsgXHJcbiAgICAgbGVmdDogMzc3cHg7XHJcbiAgICAgdG9wOiAxNDZweDsgXHJcbiAgICAgd2lkdGg6IDA7IFxyXG4gICAgIGhlaWdodDogMDsgXHJcbiAgICAgbWFyZ2luOiAwOyBcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7ICAgICAgICAgICAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyBcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cclxuICAgICBcclxuIC5oaS1zbGlkZSA+IHVsID4gbGkgPiBpbWcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fVxyXG5cclxuIl19 */", "h1[_ngcontent-%COMP%] { margin:150px auto 30px auto; text-align:center; color:#fff;}\n   \n            .hi-slide[_ngcontent-%COMP%] { position: relative; width: 754px; height: 292px; margin: 115px auto 0; }\n            \n.hi-slide[_ngcontent-%COMP%]   .hi-next[_ngcontent-%COMP%], .hi-slide[_ngcontent-%COMP%]   .hi-prev[_ngcontent-%COMP%] \n            { position: absolute;\n              top: 50%; \n              width: 40px;\n              height: 40px; \n              margin-top: -20px;     \n                border-radius: 50px; \n                 \n                \n              line-height: 40px;\n              text-align: center; \n              cursor: pointer;\n              background-color: #fff; \n              color: black;               \n              transition: all 0.6s;\n              font-size: 20px; \n                font-weight: bold;\n            }\n           .hi-slide[_ngcontent-%COMP%]   .hi-next[_ngcontent-%COMP%]:hover, .hi-slide[_ngcontent-%COMP%]   .hi-prev[_ngcontent-%COMP%]:hover \n            {\n            opacity: 1; \n            background-color: #fff;  \n            }\n            \n           .hi-slide[_ngcontent-%COMP%]   .hi-prev[_ngcontent-%COMP%] { left: -60px; }\n            \n    .hi-slide[_ngcontent-%COMP%]   .hi-prev[_ngcontent-%COMP%]::before { content: '<'; }\n    .hi-slide[_ngcontent-%COMP%]   .hi-next[_ngcontent-%COMP%] { right: -60px; }\n    .hi-slide[_ngcontent-%COMP%]   .hi-next[_ngcontent-%COMP%]::before { content: '>'; }\n    \n            .hi-slide[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]\n                    { \n                        list-style: none; \n                        position: relative;\n                        width: 754px; \n                        height: 292px; \n                        margin: 0;\n                        padding: 0;\n            }\n            \n            \n        .hi-slide[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n            overflow: hidden; \n            position: absolute; \n            z-index: 0; \n            left: 377px;\n            top: 146px; \n            width: 0; \n            height: 0; \n            margin: 0; \n            padding: 0;\n            border: 3px solid #fff;              \n            background-color: #333; \n            cursor: pointer; }\n            \n        .hi-slide[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] { width: 100%; height: 100%; background-position: center;}"] });


/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 2, vars: 0, template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "team works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "mIk3":
/*!**************************************!*\
  !*** ./src/app/fav/fav.component.ts ***!
  \**************************************/
/*! exports provided: FavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavComponent", function() { return FavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_scroll_nav_scroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-scroll/nav-scroll.component */ "GnMv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





function FavComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavComponent_div_3_Template_i_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const prod_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addCart(prod_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "add_shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Added to your cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Desc: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", prod_r1.Src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r1.Brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r1.Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleCentered", true)("matRippleRadius", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r1.Brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description(ctx_r0.desc, prod_r1));
} }
class FavComponent {
    constructor() {
        this.getFavDetails = [];
        this.CartDetails();
    }
    CartDetails() {
        if (localStorage.getItem('localFav')) {
            var x = localStorage.getItem('localFav');
            if (x != null)
                this.getFavDetails =
                    JSON.parse(x);
        }
    }
    ngOnInit() {
    }
}
FavComponent.ɵfac = function FavComponent_Factory(t) { return new (t || FavComponent)(); };
FavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavComponent, selectors: [["app-fav"]], decls: 7, vars: 1, consts: [[2, "height", "80px"], [1, "row"], ["class", "col-md-3 pb-3", 4, "ngFor", "ngForOf"], [1, "text-center", 2, "padding-bottom", "60px"], ["type", "button", "routerLink", "", 1, "btn", "btn-info", "btn-lg"], [1, "col-md-3", "pb-3"], [1, "wrapper"], [1, "container"], [1, "top"], ["alt", "", 2, "height", "80%", "width", "100%", "padding-top", "5px", 3, "src"], [1, "bottom"], [1, "left"], [1, "details"], [2, "font-size", "19PX"], [1, "buy"], ["matRipple", "", 1, "material-icons", 3, "matRippleCentered", "matRippleRadius", "click"], [1, "right"], [1, "done"], [1, "material-icons"], [1, "remove"], [1, "inside"], [1, "icon"], [1, "contents"]], template: function FavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavComponent_div_3_Template, 39, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getFavDetails);
    } }, directives: [_nav_scroll_nav_scroll_component__WEBPACK_IMPORTED_MODULE_1__["NavScrollComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background: #E3E3D8;\n  font-family: sans-serif;\n  padding: 25px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 450px;\n  background: white;\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  background-size: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom.clicked[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n  background: #f4f4f4;\n  position: relative;\n  float: left;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 10px;\n  float: left;\n  width: calc(90% - 60px);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(30% - 2px);\n  height: 100%;\n  background: #f1f1f1;\n  transition: background 0.5s;\n  border-left: solid thin rgba(0, 0, 0, 0.1);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 27px;\n  padding: 30px;\n  color: #254053;\n  transition: transform 0.5s;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]:hover {\n  background: #A6CDDE;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n  color: #00394B;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 20px;\n  float: right;\n  width: calc(70% - 40px);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  width: calc(30% - 2px);\n  float: left;\n  transition: transform 0.5s;\n  border-right: solid thin rgba(255, 255, 255, 0.3);\n  height: 50%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding: 30px;\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%] {\n  width: calc(30% - 1px);\n  clear: both;\n  border-right: solid thin rgba(255, 255, 255, 0.3);\n  height: 50%;\n  background: #BC3B59;\n  transition: transform 0.5s, background 0.5s;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]:hover {\n  background: #9B2847;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.5s;\n  font-size: 30px;\n  padding: 30px;\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:hover   .remove[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:hover   .done[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: #92879B;\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover {\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 80%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .contents[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBQUk7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0FBRU47O0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUFNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFJSixxQkFBQTtBQUVKOztBQUFNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUVSOztBQURRO0VBQ0UsMkJBQUE7QUFHVjs7QUFEUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBR1o7O0FBRFE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUdaOztBQURRO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUdWOztBQUZVO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUlaOztBQUZVO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtBQUlaOztBQUhZO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFLZDs7QUFIWTtFQUNFLG1CQUFBO0FBS2Q7O0FBSFk7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUFLZDs7QUFEUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR1Y7O0FBRlU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSVo7O0FBRlU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtBQUlaOztBQUhZO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBS2Q7O0FBRlU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBSVo7O0FBSFk7RUFDRSxtQkFBQTtBQUtkOztBQUhZO0VBQ0UsMEJBQUE7QUFLZDs7QUFIWTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBS2Q7O0FBRFk7RUFDRSw0QkFBQTtBQUdkOztBQUlJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FBRk47O0FBR007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFEUjs7QUFHTTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURSOztBQUVRO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQVY7O0FBRVE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUFWOztBQUdNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7QUFEUjs7QUFFUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFWOztBQUVRO0VBQ0UsWUFBQTtBQUFWOztBQUVRO0VBQ0UsZUFBQTtBQUFWIiwiZmlsZSI6ImZhdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTNFM0Q4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlcntcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDIwcHggMzBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAudG9we1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuYm90dG9te1xyXG4gICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICYuY2xpY2tlZHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgIC5kZXRhaWxze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoOTAlIC0gNjBweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnV5e1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzAlIC0gMnB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6c29saWQgdGhpbiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjI3cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjU0MDUzO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0E2Q0RERTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIGl7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzAwMzk0QjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0E2Q0RERTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwMCU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNzAlIC0gNDBweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG9uZXtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzAlIC0gMnB4KTtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDpzb2xpZCB0aGluIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwJTtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVtb3Zle1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygzMCUgLSAxcHgpO1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OnNvbGlkIHRoaW4gcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQkMzQjU5O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgYmFja2dyb3VuZCAwLjVzO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5QjI4NDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciBpe1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgLnJlbW92ZSwgLmRvbmV7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5zaWRle1xyXG4gICAgICB6LWluZGV4Ojk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM5Mjg3OUI7XHJcbiAgICAgIHdpZHRoOjE0MHB4O1xyXG4gICAgICBoZWlnaHQ6MTQwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtNzBweDtcclxuICAgICAgcmlnaHQ6IC03MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwMHB4IDIwMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cywgYm9yZGVyLXJhZGl1cyAycywgdG9wIDFzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuaWNvbntcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDo4NXB4O1xyXG4gICAgICAgIHRvcDo4NXB4O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBoZWlnaHQ6ODAlO1xyXG4gICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHJpZ2h0OjE1cHg7XHJcbiAgICAgICAgICB0b3A6MTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnRze1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50c3tcclxuICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuOHM7XHJcbiAgICAgICAgdGFibGV7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSwgcCwgdGFibGV7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAiXX0= */"] });


/***/ }),

/***/ "oB+8":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");


class SliderComponent {
    constructor(auth) {
        this.desc = "E";
        this.category = ["accessories", "shirts", "shoes", "blazer"];
        auth.desc.subscribe(data => this.desc = data);
    }
    ngOnInit() {
        fetch("https://shielded-stream-74886.herokuapp.com/" + this.category[Math.floor(Math.random() * (3 + 1))])
            .then(data => {
            return data.json();
        })
            .then(data => {
            this.product = data;
        });
    }
    description(des, prod) {
        if (des == "A")
            return prod.DescriptionA;
        else
            return prod.Description;
    }
    randProd(x) {
        return this.product[x];
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 57, vars: 7, consts: [["id", "carousel", "data-ride", "carousel", "data-interval", "6500", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["alt", "", 1, "w-10", 3, "src"], [1, "carousel-caption", 2, "margin-left", "100px", "padding-bottom", "150px"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-8", "bg-custom", "d-none", "d-md-block", "py-3"], [1, "border-top", "border-primary", "w-50", "mx-auto", "my-3"], [1, "pb-3"], ["id", "full-stars-example"], [1, "rating-group"], ["name", "rating", "id", "rating-none", "value", "0", "type", "radio", 1, "rating__input", "rating__input--none"], ["aria-label", "1 star", "for", "rating-1", 1, "rating__label"], [1, "rating__icon", "rating__icon--star", "fa", "fa-star"], ["name", "rating", "id", "rating-1", "value", "1", "type", "radio", 1, "rating__input"], ["aria-label", "2 stars", "for", "rating-2", 1, "rating__label"], ["name", "rating", "id", "rating-2", "value", "2", "type", "radio", 1, "rating__input"], ["aria-label", "3 stars", "for", "rating-3", 1, "rating__label"], ["name", "rating", "id", "rating-3", "value", "3", "type", "radio", "checked", "", 1, "rating__input"], ["aria-label", "4 stars", "for", "rating-4", 1, "rating__label"], ["name", "rating", "id", "rating-4", "value", "4", "type", "radio", 1, "rating__input"], ["aria-label", "5 stars", "for", "rating-5", 1, "rating__label"], ["name", "rating", "id", "rating-5", "value", "5", "type", "radio", 1, "rating__input"], [1, "carousel-item"], [1, "carousel-caption"], [1, "row", "justify-content-end", "text-right"], [1, "col-8", "bg-custom", "d-none", "d-lg-block", "py-3", "px-0", "pr-3"], [1, "lead", "pb-3"], ["href", "", 1, "btn", "btn-danger", "btn-lg"], [1, "row", "justify-content-start", "text-left"], [1, "col-8", "bg-custom", "d-none", "d-lg-block", "py-3"], [1, "lead"], ["href", "#", 1, "btn", "btn-primary", "btn-lg"], ["href", "#carousel", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], [1, "fas", "fa-chevron-left", "fa-2x"], ["href", "#carousel", "role", "button", "data-slide", "next", 1, "carousel-control-next"], [1, "fas", "fa-chevron-right", "fa-2x"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "See Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Built For Tablet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Start Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.randProd(5).Src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.randProd(5).Brand, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description(ctx.desc, ctx.randProd(5)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.randProd(6).Src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description(ctx.desc, ctx.randProd(6)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.randProd(7).Src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description(ctx.desc, ctx.randProd(7)));
    } }, styles: ["#carousel[_ngcontent-%COMP%] {\n  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  max-height: 38rem !important;\n}\n\n\n\n.carousel-inner-next[_ngcontent-%COMP%], .carousel-inner-prev[_ngcontent-%COMP%], .carousel-inner.active[_ngcontent-%COMP%] {\n  transition: transform 1.2s ease;\n}\n\n\n\n.carousel-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 54%;\n  transform: translateY(-50%);\n  text-transform: uppercase;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n  border-radius: 20;\n}\n\n.carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.8rem;\n  text-shadow: 0.1rem 0.1rem 0.3rem black;\n}\n\n.border-ptimary[_ngcontent-%COMP%] {\n  border-top: 0.2rem solid #4981b3 !important;\n}\n\n.carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  text-shadow: 0.1rem 0.1rem 0.2rem black;\n}\n\n.btn-lg[_ngcontent-%COMP%] {\n  border-radius: 0;\n  text-transform: uppercase;\n  font-size: 1rem;\n  border-width: medium;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #AC2615;\n  border: 0.1rem solid #AC2615;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4981b3;\n  border: 0.1rem solid #4981b3;\n}\n\n.btn-primary[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #68a0d2 !important;\n  border: 0.1rem solid #68a0d2 !important;\n}\n\n\n\n#full-stars-example[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n  \n  \n}\n\n#full-stars-example[_ngcontent-%COMP%]   .rating-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n#full-stars-example[_ngcontent-%COMP%]   .rating__icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n#full-stars-example[_ngcontent-%COMP%]   .rating__input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  left: -9999px !important;\n}\n\n#full-stars-example[_ngcontent-%COMP%]   .rating__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0 0.1em;\n  font-size: 2rem;\n}\n\n#full-stars-example[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n#full-stars-example[_ngcontent-%COMP%]   .rating__icon--none[_ngcontent-%COMP%] {\n  color: #eee;\n}\n\n#full-stars-example[_ngcontent-%COMP%]   .rating__input--none[_ngcontent-%COMP%]:checked    + .rating__label[_ngcontent-%COMP%]   .rating__icon--none[_ngcontent-%COMP%] {\n  color: red;\n}\n\n#half-stars-example[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  left: -9999px !important;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  \n  padding: 0 0.1em;\n  font-size: 2rem;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__label--half[_ngcontent-%COMP%] {\n  padding-right: 0;\n  margin-right: -0.6em;\n  z-index: 2;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__icon--none[_ngcontent-%COMP%] {\n  color: #eee;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__input--none[_ngcontent-%COMP%]:checked    + .rating__label[_ngcontent-%COMP%]   .rating__icon--none[_ngcontent-%COMP%] {\n  color: red;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__input[_ngcontent-%COMP%]:checked    ~ .rating__label[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating-group[_ngcontent-%COMP%]:hover   .rating__label[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%], #half-stars-example[_ngcontent-%COMP%]   .rating-group[_ngcontent-%COMP%]:hover   .rating__label--half[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__input[_ngcontent-%COMP%]:hover    ~ .rating__label[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%], #half-stars-example[_ngcontent-%COMP%]   .rating__input[_ngcontent-%COMP%]:hover    ~ .rating__label--half[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating-group[_ngcontent-%COMP%]:hover   .rating__input--none[_ngcontent-%COMP%]:not(:hover)    + .rating__label[_ngcontent-%COMP%]   .rating__icon--none[_ngcontent-%COMP%] {\n  color: #eee;\n}\n\n#half-stars-example[_ngcontent-%COMP%]   .rating__input--none[_ngcontent-%COMP%]:hover    + .rating__label[_ngcontent-%COMP%]   .rating__icon--none[_ngcontent-%COMP%] {\n  color: red;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  \n  \n  \n  \n  \n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating__icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating__input[_ngcontent-%COMP%] {\n  position: absolute !important;\n  left: -9999px !important;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating__input--none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0 0.1em;\n  font-size: 2rem;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating__input[_ngcontent-%COMP%]:checked    ~ .rating__label[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating-group[_ngcontent-%COMP%]:hover   .rating__label[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n#full-stars-example-two[_ngcontent-%COMP%]   .rating__input[_ngcontent-%COMP%]:hover    ~ .rating__label[_ngcontent-%COMP%]   .rating__icon--star[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n\nbody[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdDLDBDQUFBO0FBRkQ7O0FBSUE7RUFFRSw0QkFBQTtBQUZGOztBQUlBLHlDQUFBOztBQUNBOzs7RUFJRSwrQkFBQTtBQUZGOztBQUlBLHlCQUFBOztBQUVBO0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQUhGOztBQUtBO0VBRUUsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFLQTtFQUVFLGlCQUFBO0VBQ0EsdUNBQUE7QUFIRjs7QUFLQTtFQUVFLDJDQUFBO0FBSEY7O0FBS0E7RUFFRSxpQkFBQTtFQUNBLHVDQUFBO0FBSEY7O0FBTUE7RUFFRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBSkY7O0FBTUE7RUFFRSx5QkFBQTtFQUNBLDRCQUFBO0FBSkY7O0FBT0E7RUFDQyx5QkFBQTtFQUNDLDRCQUFBO0FBSkY7O0FBT0E7RUFDQyxvQ0FBQTtFQUNDLHVDQUFBO0FBSkY7O0FBT0E7Ozs7Ozs7Ozs7RUFBQTs7QUFZQztFQUVDLHdJQUFBO0VBS0EsMENBQUE7RUFLQSxzQkFBQTtFQU1BLDhCQUFBO0VBT0EsMkJBQUE7RUFLQSwwQ0FBQTtFQUtBLHlDQUFBO0VBTUEsZ0RBQUE7QUF0Q0Y7O0FBQUU7RUFDRSxvQkFBQTtBQUVKOztBQUVFO0VBQ0Usb0JBQUE7QUFBSjs7QUFJRTtFQUNDLDZCQUFBO0VBQ0Esd0JBQUE7QUFGSDs7QUFNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFRRTtFQUNFLGFBQUE7QUFOSjs7QUFVRTtFQUNFLFdBQUE7QUFSSjs7QUFZRTtFQUNFLFVBQUE7QUFWSjs7QUFrQkE7RUFFRSx3SUFBQTtFQUtBLDBDQUFBO0VBS0Esc0JBQUE7RUFNQSw4QkFBQTtFQVFBLG9EQUFBO0VBT0EsMkJBQUE7RUFLQSwwQ0FBQTtFQUtBLHlDQUFBO0VBS0EsOERBQUE7RUFLQSxnREFBQTtFQU1BLDBEQUFBO0VBTUEsOENBQUE7RUFLQSxnQ0FBQTtBQXhFRjs7QUFLRTtFQUNFLG9CQUFBO0FBSEo7O0FBT0U7RUFDRSxvQkFBQTtBQUxKOztBQVNFO0VBQ0MsNkJBQUE7RUFDQSx3QkFBQTtBQVBIOztBQVdFO0VBQ0UsZUFBQTtFQUNBLDRHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBVEo7O0FBYUU7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQVhKOztBQWVFO0VBQ0UsYUFBQTtBQWJKOztBQWlCRTtFQUNFLFdBQUE7QUFmSjs7QUFtQkU7RUFDRSxVQUFBO0FBakJKOztBQXFCRTtFQUNFLFdBQUE7QUFuQko7O0FBdUJFOztFQUVFLGFBQUE7QUFyQko7O0FBeUJFOztFQUVFLFdBQUE7QUF2Qko7O0FBMkJFO0VBQ0csV0FBQTtBQXpCTDs7QUE2QkU7RUFDRSxVQUFBO0FBM0JKOztBQStCQTtFQUVFLHdJQUFBO0VBS0EsMENBQUE7RUFLQSxzQkFBQTtFQU1BLHlDQUFBO0VBS0EsOEJBQUE7RUFPQSwyQkFBQTtFQUtBLDhEQUFBO0VBS0EsZ0RBQUE7RUFLQSwwREFBQTtBQWhFRjs7QUFzQkU7RUFDRSxvQkFBQTtBQXBCSjs7QUF3QkU7RUFDRSxvQkFBQTtBQXRCSjs7QUEwQkU7RUFDQyw2QkFBQTtFQUNBLHdCQUFBO0FBeEJIOztBQTRCRTtFQUNFLGFBQUE7QUExQko7O0FBOEJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTVCSjs7QUFnQ0U7RUFDRSxhQUFBO0FBOUJKOztBQWtDRTtFQUNFLFdBQUE7QUFoQ0o7O0FBb0NFO0VBQ0UsYUFBQTtBQWxDSjs7QUFzQ0U7RUFDRSxXQUFBO0FBcENKOztBQXlDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQXRDRiIsImZpbGUiOiJoLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2Nhcm91c2VsXHJcbntcclxuICBcclxuIGJveC1zaGFkb3c6IDAgMXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgLjEpO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lclxyXG57XHJcbiAgbWF4LWhlaWdodDogMzhyZW0haW1wb3J0YW50O1xyXG59XHJcbi8qLS0tQ2hhbmdlIENhcm91c2VsIFRyYW5zaXRpb24gU3BlZWQgLS0qL1xyXG4uY2Fyb3VzZWwtaW5uZXItbmV4dCxcclxuLmNhcm91c2VsLWlubmVyLXByZXYsXHJcbi5jYXJvdXNlbC1pbm5lci5hY3RpdmVcclxue1xyXG4gIHRyYW5zaXRpb24gOiB0cmFuc2Zvcm0gMS4ycyBlYXNlO1xyXG59XHJcbi8qLS0gQ2Fyb3VzZWwgQ29udGVudCAtLSovXHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvblxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlIDtcclxuICB0b3A6IDU0JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYmctY3VzdG9tXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwgMCwgMC40KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjAgO1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9uIGgxXHJcbntcclxuICBmb250LXNpemU6IDMuOHJlbTtcclxuICB0ZXh0LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjNyZW0gcmdiYSgwLCAwLCAwLCAxKSA7XHJcbn1cclxuLmJvcmRlci1wdGltYXJ5XHJcbntcclxuICBib3JkZXItdG9wOiAwLjJyZW0gc29saWQgIzQ5ODFiMyFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcm91c2VsLWNhcHRpb24gaDN7XHJcbiAgIFxyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIHRleHQtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDEpIDtcclxuXHJcbn1cclxuLmJ0bi1sZ1xyXG57XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxufVxyXG4uYnRuLWRhbmdlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDMjYxNTtcclxuICBib3JkZXI6MC4xcmVtIHNvbGlkICAjQUMyNjE1O1xyXG5cclxufVxyXG4uYnRuLXByaW1hcnlcclxue2JhY2tncm91bmQtY29sb3I6ICM0OTgxYjM7XHJcbiAgYm9yZGVyOjAuMXJlbSBzb2xpZCAgIzQ5ODFiMztcclxuXHJcbn1cclxuLmJ0bi1wcmltYXJ5IDpob3ZlclxyXG57YmFja2dyb3VuZC1jb2xvcjogIzY4YTBkMiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOjAuMXJlbSBzb2xpZCAgIzY4YTBkMiFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi8qICBcclxuICogIFB1cmUgQ1NTIHN0YXIgcmF0aW5nIHRoYXQgd29ya3Mgd2l0aG91dCByZXZlcnNpbmcgb3JkZXJcclxuICogIG9mIGlucHV0c1xyXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgTk9URTogRm9yIHRoZSBzdHlsaW5nIHRvIHdvcmssIHRoZXJlIG5lZWRzIHRvIGJlIGEgcmFkaW9cclxuICogICAgICAgIGlucHV0IHNlbGVjdGVkIGJ5IGRlZmF1bHQuIFRoZXJlIGFsc28gbmVlZHMgdG8gYmUgYVxyXG4gKiAgICAgICAgcmFkaW8gaW5wdXQgYmVmb3JlIHRoZSBmaXJzdCBzdGFyLCByZWdhcmRsZXNzIG9mXHJcbiAqICAgICAgICB3aGV0aGVyIHlvdSBvZmZlciBhICdubyByYXRpbmcnIG9yIDAgc3RhcnMgb3B0aW9uXHJcbiAqICBcclxuICogIFRoaXMgY29kZXBlbiB1c2VzIEZvbnRBd2Vzb21lIGljb25zXHJcbiAqL1xyXG5cclxuICNmdWxsLXN0YXJzLWV4YW1wbGUge1xyXG5cclxuICAvKiB1c2UgZGlzcGxheTppbmxpbmUtZmxleCB0byBwcmV2ZW50IHdoaXRlc3BhY2UgaXNzdWVzLiBhbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHB1dCBhbGwgdGhlIGNoaWxkcmVuIG9mIC5yYXRpbmctZ3JvdXAgb24gYSBzaW5nbGUgbGluZSAqL1xyXG4gIC5yYXRpbmctZ3JvdXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIG1ha2UgaG92ZXIgZWZmZWN0IHdvcmsgcHJvcGVybHkgaW4gSUUgKi9cclxuICAucmF0aW5nX19pY29uIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBoaWRlIHJhZGlvIGlucHV0cyAqL1xyXG4gIC5yYXRpbmdfX2lucHV0IHtcclxuICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8qIHNldCBpY29uIHBhZGRpbmcgYW5kIHNpemUgKi9cclxuICAucmF0aW5nX19sYWJlbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAvKiBzZXQgZGVmYXVsdCBzdGFyIGNvbG9yICovXHJcbiAgLnJhdGluZ19faWNvbi0tc3RhciB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuICBcclxuICAvKiBzZXQgY29sb3Igb2Ygbm9uZSBpY29uIHdoZW4gdW5jaGVja2VkICovXHJcbiAgLnJhdGluZ19faWNvbi0tbm9uZSB7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICB9XHJcblxyXG4gIC8qIGlmIG5vbmUgaWNvbiBpcyBjaGVja2VkLCBtYWtlIGl0IHJlZCAqL1xyXG4gIC5yYXRpbmdfX2lucHV0LS1ub25lOmNoZWNrZWQgKyAucmF0aW5nX19sYWJlbCAucmF0aW5nX19pY29uLS1ub25lIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogbWFrZSBhbGwgc3RhcnMgb3JhbmdlIG9uIHJhdGluZyBncm91cCBob3ZlciAqL1xyXG5cclxufVxyXG5cclxuI2hhbGYtc3RhcnMtZXhhbXBsZSB7XHJcblxyXG4gIC8qIHVzZSBkaXNwbGF5OmlubGluZS1mbGV4IHRvIHByZXZlbnQgd2hpdGVzcGFjZSBpc3N1ZXMuIGFsdGVybmF0aXZlbHksIHlvdSBjYW4gcHV0IGFsbCB0aGUgY2hpbGRyZW4gb2YgLnJhdGluZy1ncm91cCBvbiBhIHNpbmdsZSBsaW5lICovXHJcbiAgLnJhdGluZy1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLyogbWFrZSBob3ZlciBlZmZlY3Qgd29yayBwcm9wZXJseSBpbiBJRSAqL1xyXG4gIC5yYXRpbmdfX2ljb24ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGhpZGUgcmFkaW8gaW5wdXRzICovXHJcbiAgLnJhdGluZ19faW5wdXQge1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgbGVmdDogLTk5OTlweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogc2V0IGljb24gcGFkZGluZyBhbmQgc2l6ZSAqL1xyXG4gIC5yYXRpbmdfX2xhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGlmIHlvdSBjaGFuZ2UgdGhlIGxlZnQvcmlnaHQgcGFkZGluZywgdXBkYXRlIHRoZSBtYXJnaW4tcmlnaHQgcHJvcGVydHkgb2YgLnJhdGluZ19fbGFiZWwtLWhhbGYgYXMgd2VsbC4gKi9cclxuICAgIHBhZGRpbmc6IDAgMC4xZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAvKiBhZGQgcGFkZGluZyBhbmQgcG9zaXRpb25pbmcgdG8gaGFsZiBzdGFyIGxhYmVscyAqL1xyXG4gIC5yYXRpbmdfX2xhYmVsLS1oYWxmIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjZlbTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHNldCBkZWZhdWx0IHN0YXIgY29sb3IgKi9cclxuICAucmF0aW5nX19pY29uLS1zdGFyIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHNldCBjb2xvciBvZiBub25lIGljb24gd2hlbiB1bmNoZWNrZWQgKi9cclxuICAucmF0aW5nX19pY29uLS1ub25lIHtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gIH1cclxuXHJcbiAgLyogaWYgbm9uZSBpY29uIGlzIGNoZWNrZWQsIG1ha2UgaXQgcmVkICovXHJcbiAgLnJhdGluZ19faW5wdXQtLW5vbmU6Y2hlY2tlZCArIC5yYXRpbmdfX2xhYmVsIC5yYXRpbmdfX2ljb24tLW5vbmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC8qIGlmIGFueSBpbnB1dCBpcyBjaGVja2VkLCBtYWtlIGl0cyBmb2xsb3dpbmcgc2libGluZ3MgZ3JleSAqL1xyXG4gIC5yYXRpbmdfX2lucHV0OmNoZWNrZWQgfiAucmF0aW5nX19sYWJlbCAucmF0aW5nX19pY29uLS1zdGFyIHtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gIH1cclxuICBcclxuICAvKiBtYWtlIGFsbCBzdGFycyBvcmFuZ2Ugb24gcmF0aW5nIGdyb3VwIGhvdmVyICovXHJcbiAgLnJhdGluZy1ncm91cDpob3ZlciAucmF0aW5nX19sYWJlbCAucmF0aW5nX19pY29uLS1zdGFyLFxyXG4gIC5yYXRpbmctZ3JvdXA6aG92ZXIgLnJhdGluZ19fbGFiZWwtLWhhbGYgLnJhdGluZ19faWNvbi0tc3RhciB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgLyogbWFrZSBob3ZlcmVkIGlucHV0J3MgZm9sbG93aW5nIHNpYmxpbmdzIGdyZXkgb24gaG92ZXIgKi9cclxuICAucmF0aW5nX19pbnB1dDpob3ZlciB+IC5yYXRpbmdfX2xhYmVsIC5yYXRpbmdfX2ljb24tLXN0YXIsXHJcbiAgLnJhdGluZ19faW5wdXQ6aG92ZXIgfiAucmF0aW5nX19sYWJlbC0taGFsZiAucmF0aW5nX19pY29uLS1zdGFyIHtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gIH1cclxuICBcclxuICAvKiBtYWtlIG5vbmUgaWNvbiBncmV5IG9uIHJhdGluZyBncm91cCBob3ZlciAqL1xyXG4gIC5yYXRpbmctZ3JvdXA6aG92ZXIgLnJhdGluZ19faW5wdXQtLW5vbmU6bm90KDpob3ZlcikgKyAucmF0aW5nX19sYWJlbCAucmF0aW5nX19pY29uLS1ub25lIHtcclxuICAgICBjb2xvcjogI2VlZTtcclxuICB9XHJcblxyXG4gIC8qIG1ha2Ugbm9uZSBpY29uIHJlZCBvbiBob3ZlciAqL1xyXG4gIC5yYXRpbmdfX2lucHV0LS1ub25lOmhvdmVyICsgLnJhdGluZ19fbGFiZWwgLnJhdGluZ19faWNvbi0tbm9uZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxufVxyXG5cclxuI2Z1bGwtc3RhcnMtZXhhbXBsZS10d28ge1xyXG5cclxuICAvKiB1c2UgZGlzcGxheTppbmxpbmUtZmxleCB0byBwcmV2ZW50IHdoaXRlc3BhY2UgaXNzdWVzLiBhbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHB1dCBhbGwgdGhlIGNoaWxkcmVuIG9mIC5yYXRpbmctZ3JvdXAgb24gYSBzaW5nbGUgbGluZSAqL1xyXG4gIC5yYXRpbmctZ3JvdXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIG1ha2UgaG92ZXIgZWZmZWN0IHdvcmsgcHJvcGVybHkgaW4gSUUgKi9cclxuICAucmF0aW5nX19pY29uIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBoaWRlIHJhZGlvIGlucHV0cyAqL1xyXG4gIC5yYXRpbmdfX2lucHV0IHtcclxuICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogaGlkZSAnbm9uZScgaW5wdXQgZnJvbSBzY3JlZW5yZWFkZXJzICovXHJcbiAgLnJhdGluZ19faW5wdXQtLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG4gIH1cclxuXHJcbiAgLyogc2V0IGljb24gcGFkZGluZyBhbmQgc2l6ZSAqL1xyXG4gIC5yYXRpbmdfX2xhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMC4xZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHNldCBkZWZhdWx0IHN0YXIgY29sb3IgKi9cclxuICAucmF0aW5nX19pY29uLS1zdGFyIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG5cclxuICAvKiBpZiBhbnkgaW5wdXQgaXMgY2hlY2tlZCwgbWFrZSBpdHMgZm9sbG93aW5nIHNpYmxpbmdzIGdyZXkgKi9cclxuICAucmF0aW5nX19pbnB1dDpjaGVja2VkIH4gLnJhdGluZ19fbGFiZWwgLnJhdGluZ19faWNvbi0tc3RhciB7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLyogbWFrZSBhbGwgc3RhcnMgb3JhbmdlIG9uIHJhdGluZyBncm91cCBob3ZlciAqL1xyXG4gIC5yYXRpbmctZ3JvdXA6aG92ZXIgLnJhdGluZ19fbGFiZWwgLnJhdGluZ19faWNvbi0tc3RhciB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgLyogbWFrZSBob3ZlcmVkIGlucHV0J3MgZm9sbG93aW5nIHNpYmxpbmdzIGdyZXkgb24gaG92ZXIgKi9cclxuICAucmF0aW5nX19pbnB1dDpob3ZlciB+IC5yYXRpbmdfX2xhYmVsIC5yYXRpbmdfX2ljb24tLXN0YXIge1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "z51i":
/*!****************************************!*\
  !*** ./src/app/text/text.component.ts ***!
  \****************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class TextComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(); };
TextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextComponent, selectors: [["app-text"]], decls: 4, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Work+Sans:400,600,800&display=swap", "rel", "stylesheet"], [1, "rainbow-text", 3, "translate"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EDITOR'S PICK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "editor.text");
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #EDDDD4;\r\n  }\r\nh6[_ngcontent-%COMP%] {\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 800;\r\n    font-size: 5em;\r\n    text-align: center;\r\n    width: 5em;\r\n    line-height: 0.9em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n.rainbow-text[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    background: #CA4246;\r\n    background-color: #CA4246;\r\n    background: conic-gradient(\r\n      #4DA8DA 16.666%, \r\n      #0c3f39 16.666%, \r\n      #1f6349 33.333%, \r\n      #98a029 33.333%, \r\n      #4DA8DA 50%, \r\n      #1b7959 50%, \r\n      #8B9862 66.666%, \r\n      #438351 66.666%, \r\n      #0f645d 83.333%, \r\n      #059747 83.333%);\r\n    \r\n    \r\n    background-size: 57%;\r\n    background-repeat: repeat;\r\n    \r\n    \r\n    \r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent; \r\n    \r\n    \r\n    \r\n    animation: rainbow-text-animation-rev 0.5s ease forwards;\r\n  \r\n    cursor: pointer;\r\n  }\r\n\r\n.rainbow-text[_ngcontent-%COMP%]:hover {\r\n    animation: rainbow-text-animation 0.5s ease forwards;\r\n  }\r\n\r\n\r\n@keyframes rainbow-text-animation {\r\n    0% {\r\n      background-size: 57%;\r\n      background-position: 0 0;\r\n    }\r\n    20% {\r\n      background-size: 57%;\r\n      background-position: 0 1em;\r\n    }\r\n    100% {\r\n      background-size: 300%;\r\n      background-position: -9em 1em;\r\n    }\r\n  }\r\n\r\n\r\n@keyframes rainbow-text-animation-rev {\r\n    0% {\r\n      background-size: 300%;\r\n      background-position: -9em 1em;\r\n    }\r\n    20% {\r\n      background-size: 57%;\r\n      background-position: 0 1em;\r\n    }\r\n    100% {\r\n      background-size: 57%;\r\n      background-position: 0 0;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakMsNENBQTRDO0FBQzVDO0lBQ0kseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBR0Esb0NBQW9DO0FBQ3BDO0lBQ0UsNkJBQTZCO0lBQzdCLDBFQUEwRTtJQUMxRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCOzs7Ozs7Ozs7O3NCQVVrQjs7SUFFbEIsb0RBQW9EO0lBQ3BELG9CQUFvQjtJQUNwQix5QkFBeUI7O0lBRXpCLCtDQUErQztJQUMvQyx3RUFBd0U7SUFDeEUsNkJBQTZCO0lBQzdCLG9DQUFvQzs7SUFFcEMsK0NBQStDO0lBQy9DLHlEQUF5RDtJQUN6RCx3REFBd0Q7O0lBRXhELGVBQWU7RUFDakI7QUFFQSw0QkFBNEI7QUFDNUI7SUFDRSxvREFBb0Q7RUFDdEQ7QUFFQSw0Q0FBNEM7QUFDNUMsaURBQWlEO0FBQ2pEO0lBQ0U7TUFDRSxvQkFBb0I7TUFDcEIsd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxvQkFBb0I7TUFDcEIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSxxQkFBcUI7TUFDckIsNkJBQTZCO0lBQy9CO0VBQ0Y7QUFFQSw2Q0FBNkM7QUFDN0MsMEVBQTBFO0FBQzFFO0lBQ0U7TUFDRSxxQkFBcUI7TUFDckIsNkJBQTZCO0lBQy9CO0lBQ0E7TUFDRSxvQkFBb0I7TUFDcEIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSxvQkFBb0I7TUFDcEIsd0JBQXdCO0lBQzFCO0VBQ0YiLCJmaWxlIjoidGV4dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhbCBzdHlsaW5nIG9mIHRoZSBwYWdlLiAqL1xyXG4vKiBTZXRzIGEgYmFja2dyb3VuZCBjb2xvciwgZm9udC1zaXplIGV0Yy4gKi9cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUREREQ0O1xyXG4gIH1cclxuICBcclxuICBoNiB7XHJcbiAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMC45ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHJhaW5ib3cgdGV4dCBlbGVtZW50LiAqL1xyXG4gIC5yYWluYm93LXRleHQge1xyXG4gICAgLyogQ3JlYXRlIGEgY29uaWMgZ3JhZGllbnQuICovXHJcbiAgICAvKiBEb3VibGUgcGVyY2VudGFnZXMgdG8gYXZvaWQgYmx1ciAoIzAwMCAxMCUsICNmZmYgMTAlLCAjZmZmIDIwJSwgLi4uKS4gKi9cclxuICAgIGJhY2tncm91bmQ6ICNDQTQyNDY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0E0MjQ2O1xyXG4gICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXHJcbiAgICAgICM0REE4REEgMTYuNjY2JSwgXHJcbiAgICAgICMwYzNmMzkgMTYuNjY2JSwgXHJcbiAgICAgICMxZjYzNDkgMzMuMzMzJSwgXHJcbiAgICAgICM5OGEwMjkgMzMuMzMzJSwgXHJcbiAgICAgICM0REE4REEgNTAlLCBcclxuICAgICAgIzFiNzk1OSA1MCUsIFxyXG4gICAgICAjOEI5ODYyIDY2LjY2NiUsIFxyXG4gICAgICAjNDM4MzUxIDY2LjY2NiUsIFxyXG4gICAgICAjMGY2NDVkIDgzLjMzMyUsIFxyXG4gICAgICAjMDU5NzQ3IDgzLjMzMyUpO1xyXG4gICAgXHJcbiAgICAvKiBTZXQgdGhlZSBiYWNrZ3JvdW5kIHNpemUgYW5kIHJlcGVhdCBwcm9wZXJ0aWVzLiAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1NyU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgXHJcbiAgICAvKiBVc2UgdGhlIHRleHQgYXMgYSBtYXNrIGZvciB0aGUgYmFja2dyb3VuZC4gKi9cclxuICAgIC8qIFRoaXMgd2lsbCBzaG93IHRoZSBncmFkaWVudCBhcyBhIHRleHQgY29sb3IgcmF0aGVyIHRoYW4gZWxlbWVudCBiZy4gKi9cclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyBcclxuICAgIFxyXG4gICAgLyogQW5pbWF0ZSB0aGUgdGV4dCB3aGVuIGxvYWRpbmcgdGhlIGVsZW1lbnQuICovXHJcbiAgICAvKiBUaGlzIGFuaW1hdGVzIGl0IG9uIHBhZ2UgbG9hZCBhbmQgd2hlbiBob3ZlcmluZyBvdXQuICovXHJcbiAgICBhbmltYXRpb246IHJhaW5ib3ctdGV4dC1hbmltYXRpb24tcmV2IDAuNXMgZWFzZSBmb3J3YXJkcztcclxuICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGFuaW1hdGlvbiBvbiBob3Zlci4gKi9cclxuICAucmFpbmJvdy10ZXh0OmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbjogcmFpbmJvdy10ZXh0LWFuaW1hdGlvbiAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vdmUgdGhlIGJhY2tncm91bmQgYW5kIG1ha2UgaXQgbGFyZ2VyLiAqL1xyXG4gIC8qIEFuaW1hdGlvbiBzaG93biB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHRleHQuICovXHJcbiAgQGtleWZyYW1lcyByYWluYm93LXRleHQtYW5pbWF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1NyU7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTclO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDFlbTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05ZW0gMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBNb3ZlIHRoZSBiYWNrZ3JvdW5kIGFuZCBtYWtlIGl0IHNtYWxsZXIuICovXHJcbiAgLyogQW5pbWF0aW9uIHNob3duIHdoZW4gZW50ZXJpbmcgdGhlIHBhZ2UgYW5kIGFmdGVyIHRoZSBob3ZlciBhbmltYXRpb24uICovXHJcbiAgQGtleWZyYW1lcyByYWluYm93LXRleHQtYW5pbWF0aW9uLXJldiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTllbSAxZW07XHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDU3JTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxZW07XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1NyU7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map