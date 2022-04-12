"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
;// CONCATENATED MODULE: ./assets/images/logos/white-text.png
/* harmony default export */ const white_text = ({"src":"/_next/static/media/white-text.a538df69.png","height":60,"width":169,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVklEQVR4nBWLsQ2AMAwE3wxBRccaDMQAbEPLEhmFNi2RQAhBAXI4Fye/3vfm7oOkG7LMimqV9k1Ky0zOIaw8X5iggwfx0HX2cUMYKRtIFCG2LAuZqO8HX2UiCpzpDB8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./layout/header/Header.js







const Header = ()=>{
    const { 0: isOpen , 1: setIsOpen  } = useState(false);
    const router = useRouter();
    const toggle = ()=>setIsOpen(!isOpen)
    ;
    return /*#__PURE__*/ _jsx("div", {
        className: "topbar",
        id: "top",
        children: /*#__PURE__*/ _jsx("div", {
            className: "header6",
            children: /*#__PURE__*/ _jsx(Container, {
                className: "po-relative",
                children: /*#__PURE__*/ _jsxs(Navbar, {
                    className: "navbar-expand-lg h6-nav-bar",
                    children: [
                        /*#__PURE__*/ _jsx(NavbarBrand, {
                            href: "/",
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: logo,
                                alt: "wrapkit"
                            })
                        }),
                        /*#__PURE__*/ _jsx(NavbarToggler, {
                            onClick: toggle,
                            children: /*#__PURE__*/ _jsx("span", {
                                className: "ti-menu"
                            })
                        }),
                        /*#__PURE__*/ _jsxs(Collapse, {
                            isOpen: isOpen,
                            navbar: true,
                            className: "hover-dropdown ml-auto",
                            id: "h6-info",
                            children: [
                                /*#__PURE__*/ _jsxs(Nav, {
                                    navbar: true,
                                    className: "ml-auto",
                                    children: [
                                        /*#__PURE__*/ _jsx(NavItem, {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: router.pathname == "/" ? "text-white nav-link" : "nav-link",
                                                    children: "Custom Components"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(NavItem, {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/basic",
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    className: router.pathname == "/basic" ? "text-white nav-link" : "nav-link",
                                                    children: "Basic-Components"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "act-buttons",
                                    children: /*#__PURE__*/ _jsx(NavLink, {
                                        href: "https://wrappixel.com/templates/nextkit-nextjs-free-uikit",
                                        className: "btn btn-light font-14",
                                        target: "_blank",
                                        children: "Download Free"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const header_Header = ((/* unused pure expression or super */ null && (Header)));

;// CONCATENATED MODULE: ./layout/footer/Footer.js

/* eslint-disable */ 


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer4 b-t spacer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            lg: "3",
                            md: "6",
                            className: "m-b-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "m-b-20",
                                    children: "Address"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "71 Amsteroum Avenue Cronish Night, NY 35098"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            lg: "3",
                            md: "6",
                            className: "m-b-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "m-b-20",
                                    children: "Phone"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Reception : +205 123 4567 ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Office : +207 235 7890"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            lg: "3",
                            md: "6",
                            className: "m-b-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "m-b-20",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Office :",
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: "info@wrappixel.com"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Site :",
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "https://www.wrappixel.com",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: "wrappixel.com"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            lg: "3",
                            md: "6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "m-b-20",
                                    children: "Social"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "round-social light",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-facebook"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-google-plus"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-youtube-play"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-instagram"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "f4-bottom-bar",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            md: "12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex font-14",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "m-t-10 m-b-10 copyright",
                                        children: [
                                            "\xa9 Copyright ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "http://www.themagnisys.com/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "link",
                                                    children: " Themagnisys.com"
                                                })
                                            }),
                                            " All Rights Reserved."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "links ml-auto m-t-10 m-b-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "p-10 p-l-0",
                                                    children: "Terms of Use"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "p-10",
                                                    children: "Legal Disclaimer"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "p-10",
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./layout/Layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "main-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,676,664,675], () => (__webpack_exec__(186)));
module.exports = __webpack_exports__;

})();