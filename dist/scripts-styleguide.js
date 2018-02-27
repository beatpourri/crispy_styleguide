'use strict';

// buttons.js
// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
// Drupal.behaviors.buttonState = {
//   attach: function (context, settings) {

(function () {
    // REMOVE IF DRUPAL

    'use strict';

    // Set 'document' to 'context' if Drupal

    var buttonstate = document.querySelectorAll('button');

    for (var i = 0; i < buttonstate.length; i++) {
        buttonstate[i].addEventListener('click', function (e) {
            this.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
        });
    }
})(); // REMOVE IF DRUPAL

// UNCOMMENT IF DRUPAL
//   }
// };
'use strict';

// accordion-item.js
// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
// Drupal.behaviors.accordion = {
//   attach: function (context, settings) {

(function () {
    // REMOVE IF DRUPAL

    'use strict';
    // Set 'document' to 'context' if Drupal

    var accordionTerm = document.querySelectorAll('.accordion-term');
    var accordionDef = document.querySelectorAll('.accordion-def');

    // If javascript, hide accordion-def on load
    function jsCheck() {
        for (var i = 0; i < accordionDef.length; i++) {
            if (accordionDef[i].classList) {
                accordionDef[i].classList.add('js-active');

                // uncomment to define "active/open" item
                //accordionDef[0].previousElementSibling.classList.add('js-is-active');
            } else {
                accordionDef[i].className += 'js-active';
                // uncomment to define "active/open" item
                //accordionDef[0].previousElementSibling.classList.add('js-is-active');
            }
        }
    }

    jsCheck();

    // Accordion Toggle
    for (var i = 0; i < accordionTerm.length; i++) {
        accordionTerm[i].addEventListener('click', function (e) {
            var className = 'js-is-active';
            if (this.classList) {
                this.classList.toggle(className);
                this.setAttribute('aria-selected', e.target.getAttribute('aria-selected') === 'true' ? 'false' : 'true');
                this.setAttribute('aria-expanded', e.target.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
                // next ".accordion-def" change aria-hidden and toggle class
                this.nextElementSibling.classList.toggle('js-active');
                this.nextElementSibling.setAttribute('aria-hidden', this.nextElementSibling.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
            } else {
                var classes = this.className.split(' ');
                var existingIndex = classes.indexOf(className);

                if (existingIndex >= 0) {
                    classes.splice(existingIndex, 1);
                } else {
                    classes.push(className);
                }
                this.className = classes.join(' ');
            }

            e.preventDefault();
        });
    }
})(); // REMOVE IF DRUPAL

// UNCOMMENT IF DRUPAL
//   }
// };
'use strict';

// status.js
// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
// Drupal.behaviors.status = {
//   attach: function (context, settings) {

(function () {
    // REMOVE IF DRUPAL

    'use strict';

    // Set 'document' to 'context' if Drupal

    var close = document.querySelectorAll('.button--close');

    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function (e) {
            var deleteDiv = 'message';
            var elements = document.getElementsByClassName(deleteDiv);
            if (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
            e.preventDefault();
        });
    }
})(); // REMOVE IF DRUPAL


// UNCOMMENT IF DRUPAL
//   }
// };
'use strict';

// toggle.js
// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
// Drupal.behaviors.buttonSwitch = {
//   attach: function (context, settings) {

(function (w, doc, undefined) {
  // REMOVE IF DRUPAL

  // enable strict mode
  'use strict';

  var ARIAswitch = {};
  /**
  /**
   * Global Create
   *
   * This function validates that the minimum
   * required markup is present to create the
   * ARIA widget(s). Any additional markup elements
   * or attributes that do not exist in the found
   * required markup patterns will be generated
   * via this function.
   */
  ARIAswitch.create = function () {
    // hooks
    var widget = doc.querySelectorAll('[data-action="aria-switch"]');
    var self;
    var i;
    // define error message here, rather than in the weeds of the code
    var ariaLabelError = 'An attribute of "data-missing-label" has been added to a switch/switches that are missing aria-labelledby or aria-label attributes! Please add unique labels to the appropriate components!';

    // if widgets exist, loop through all instances
    // and set up appropriate attributes
    for (i = 0; i < widget.length; i++) {
      // set this specific widget
      self = widget[i];

      // give each instance the role of switch if the role hasn't been set
      // or if it was set to something else in error
      if (!self.hasAttribute('role') || self.getAttribute('role') !== 'switch') {
        self.setAttribute('role', 'switch');
      }

      // since these sorts of buttons won't work if
      // JavaScript is disabled, (hopefully) a disabled
      // attribute is set to them by default. When JavaScript
      // is on, we should remove the disabled attributes EXCEPT
      // if a switch button is meant to be disabled by default,
      // in which case, look for the data-keep-disabled attribute
      // and DON'T remove that disabled attribute...
      if (!self.hasAttribute('data-keep-disabled')) {
        self.removeAttribute('disabled');
      }

      // if an instance doesn't have a set aria-checked attribute,
      // then it must not be checked, so populate an aria-checked='false'
      if (!self.hasAttribute('aria-checked')) {
        self.setAttribute('aria-checked', 'false');
      }

      // log an error if an aria-label or labelledby attribute
      // is not found on a switch. also add a 'data-missing-label' attribute
      // to further call out what instance(s) are without appropriate labeling.
      if (!self.hasAttribute('aria-label') && !self.hasAttribute('aria-labelledby')) {
        console.warn(ariaLabelError);
      }

      self.addEventListener('click', ARIAswitch.actions);
    } // for(widget.length)
  }; // ARIAswitch.create()


  // primary actions function
  ARIAswitch.actions = function (e) {
    e.preventDefault();
    this.setAttribute('aria-checked', e.target.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  }; // ARIAswitch.events()


  // init function to run start-up functions.
  // if expanding this script, place any other
  // initialize functions within here.
  ARIAswitch.init = function () {
    ARIAswitch.create();
  }; // ARIAswitch.init()


  ARIAswitch.init();
})(window, document); // REMOVE IF DRUPAL


// UNCOMMENT IF DRUPAL
//   }
// };
"use strict";

// Init responsive nav
var customToggle = document.getElementById('mobile-menu');
var navigation = responsiveNav(".navigation--main", {
  customToggle: "#mobile-menu", // Selector: Specify the ID of a custom toggle
  enableFocus: true,
  enableDropdown: true,
  openDropdown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" stroke-width="2" d="M13.143134,4.14629114 L7.99968741,9.79287925 L2.8572411,4.14629114 C2.66118596,3.95123629 2.3430965,3.95123629 2.14704136,4.14629114 C1.95098621,4.34634741 1.95098621,4.66643744 2.14704136,4.86149229 L7.62008065,10.8681817 C7.72461005,10.9732112 7.86314901,11.0182239 7.99968741,11.0082211 C8.13672595,11.0182239 8.27526492,10.9732112 8.38029446,10.8681817 L13.8533338,4.86149229 C14.0488887,4.66643744 14.0488887,4.34634741 13.8533338,4.14629114 C13.6567785,3.95123629 13.338689,3.95123629 13.143134,4.14629114 Z"></path></svg><span class="sr-only">Open sub menu</span>',
  closeDropdown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" stroke-width="2" d="M13.143134,4.14629114 L7.99968741,9.79287925 L2.8572411,4.14629114 C2.66118596,3.95123629 2.3430965,3.95123629 2.14704136,4.14629114 C1.95098621,4.34634741 1.95098621,4.66643744 2.14704136,4.86149229 L7.62008065,10.8681817 C7.72461005,10.9732112 7.86314901,11.0182239 7.99968741,11.0082211 C8.13672595,11.0182239 8.27526492,10.9732112 8.38029446,10.8681817 L13.8533338,4.86149229 C14.0488887,4.66643744 14.0488887,4.34634741 13.8533338,4.14629114 C13.6567785,3.95123629 13.338689,3.95123629 13.143134,4.14629114 Z"></path></svg><span class="sr-only">Close sub menu</span>',
  open: function open() {
    customToggle.innerHTML = 'Menu <div class="icon icon__mobile_menu" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0.857142857,1.8 L11.1428571,1.8 C11.616,1.8 12,1.3968 12,0.9 C12,0.4032 11.616,0 11.1428571,0 L0.857142857,0 C0.384,0 0,0.4032 0,0.9 C0,1.3968 0.384,1.8 0.857142857,1.8 Z M11.1428571,3.6 L0.857142857,3.6 C0.384,3.6 0,4.0032 0,4.5 C0,4.9968 0.384,5.4 0.857142857,5.4 L11.1428571,5.4 C11.616,5.4 12,4.9968 12,4.5 C12,4.0032 11.616,3.6 11.1428571,3.6 Z M11.1428571,7.2 L0.857142857,7.2 C0.384,7.2 0,7.6032 0,8.1 C0,8.5968 0.384,9 0.857142857,9 L11.1428571,9 C11.616,9 12,8.5968 12,8.1 C12,7.6032 11.616,7.2 11.1428571,7.2 Z" transform="translate(2 3)"></path></svg></div>';
  },
  close: function close() {
    customToggle.innerHTML = 'Menu <div class="icon icon__mobile_menu" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0.857142857,1.8 L11.1428571,1.8 C11.616,1.8 12,1.3968 12,0.9 C12,0.4032 11.616,0 11.1428571,0 L0.857142857,0 C0.384,0 0,0.4032 0,0.9 C0,1.3968 0.384,1.8 0.857142857,1.8 Z M11.1428571,3.6 L0.857142857,3.6 C0.384,3.6 0,4.0032 0,4.5 C0,4.9968 0.384,5.4 0.857142857,5.4 L11.1428571,5.4 C11.616,5.4 12,4.9968 12,4.5 C12,4.0032 11.616,3.6 11.1428571,3.6 Z M11.1428571,7.2 L0.857142857,7.2 C0.384,7.2 0,7.6032 0,8.1 C0,8.5968 0.384,9 0.857142857,9 L11.1428571,9 C11.616,9 12,8.5968 12,8.1 C12,7.6032 11.616,7.2 11.1428571,7.2 Z" transform="translate(2 3)"></path></svg></div>';
  },
  resizeMobile: function resizeMobile() {
    customToggle.setAttribute('aria-controls', 'nav');
  },
  resizeDesktop: function resizeDesktop() {
    customToggle.removeAttribute('aria-controls');
  }
});
"use strict";

// main_menu.js
// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
// Drupal.behaviors.mainmenu = {
//   attach: function (context, settings) {

(function () {// REMOVE IF DRUPAL
    /*  'use strict';
      var mobileMenu = document.querySelector('.mobile-menu');
      var mainMenu = document.querySelectorAll('.main-menu');
      mobileMenu.addEventListener('click', function(e) {
          e.preventDefault();
          [].map.call(mainMenu, function(el) {
              el.classList.toggle('js-main-menu--open');
          });
      });*/

    /* TODO: clean this sh***t up */
    // expand menu
    /*    var expandMenu = document.querySelector('.link-icon__menu-expand');
        var subMenu = document.querySelector('.main-menu__sub');
    
        expandMenu.addEventListener('click', function (e) {
            e.preventDefault();
            subMenu.classList.toggle('js-main-menu__sub--open');
        });*/
    // expand submenu
    /*    var expandMenu1 = document.querySelector('.sub-1 .main-menu__sub--item-expanded .link-icon__menu-expand');
        var subMenu2 = document.querySelector('.main-menu__sub.sub-2');
    
        expandMenu1.addEventListener('click', function (e) {
            e.preventDefault();
            subMenu2.classList.toggle('js-main-menu__sub--open');
        });
        var expandMenu1a = document.querySelector('.sub-1 .main-menu__sub--item-active-trail .link-icon__menu-expand');
        var subMenu2a = document.querySelector('.main-menu__sub.sub-2');
    
        expandMenu1a.addEventListener('click', function (e) {
            e.preventDefault();
            subMenu2a.classList.toggle('js-main-menu__sub--open');
        });
    
        var expandMenu2 = document.querySelector('.sub-2 .main-menu__sub--item-expanded .link-icon__menu-expand');
        var subMenu3 = document.querySelector('.main-menu__sub.sub-3');
    
        expandMenu2.addEventListener('click', function (e) {
            e.preventDefault();
            subMenu3.classList.toggle('js-main-menu__sub--open');
        });
    
    
        var expandMenu2a = document.querySelector('.sub-2 .main-menu__sub--item-active-trail .link-icon__menu-expand');
        var subMenu3a = document.querySelector('.main-menu__sub.sub-3');
    
        expandMenu2a.addEventListener('click', function (e) {
            e.preventDefault();
            subMenu3a.classList.toggle('js-main-menu__sub--open');
        });*/

    //


})(); // REMOVE IF DRUPAL

// UNCOMMENT IF DRUPAL
//   }
// };
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! responsive-nav.js 1.0.39
 * https://github.com/viljamis/responsive-nav.js
 * http://responsive-nav.com
 *
 * Copyright (c) 2015 @viljamis
 * Available under the MIT license
 */

/* global Event */
(function (document, window, index) {
  // Index is used to keep multiple navs on the same page namespaced

  "use strict";

  var responsiveNav = function responsiveNav(el, options) {

    var computed = !!window.getComputedStyle;

    /**
     * getComputedStyle polyfill for old browsers
     */
    if (!computed) {
      window.getComputedStyle = function (el) {
        this.el = el;
        this.getPropertyValue = function (prop) {
          var re = /(\-([a-z]){1})/g;
          if (prop === "float") {
            prop = "styleFloat";
          }
          if (re.test(prop)) {
            prop = prop.replace(re, function () {
              return arguments[2].toUpperCase();
            });
          }
          return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        };
        return this;
      };
    }
    /* exported addEvent, removeEvent, getChildren, setAttributes, addClass, removeClass, forEach */

    /**
     * Add Event
     * fn arg can be an object or a function, thanks to handleEvent
     * read more at: http://www.thecssninja.com/javascript/handleevent
     *
     * @param  {element}  element
     * @param  {event}    event
     * @param  {Function} fn
     * @param  {boolean}  bubbling
     */
    var addEvent = function addEvent(el, evt, fn, bubble) {
      if ("addEventListener" in el) {
        // BBOS6 doesn't support handleEvent, catch and polyfill
        try {
          el.addEventListener(evt, fn, bubble);
        } catch (e) {
          if ((typeof fn === "undefined" ? "undefined" : _typeof(fn)) === "object" && fn.handleEvent) {
            el.addEventListener(evt, function (e) {
              // Bind fn as this and set first arg as event object
              fn.handleEvent.call(fn, e);
            }, bubble);
          } else {
            throw e;
          }
        }
      } else if ("attachEvent" in el) {
        // check if the callback is an object and contains handleEvent
        if ((typeof fn === "undefined" ? "undefined" : _typeof(fn)) === "object" && fn.handleEvent) {
          el.attachEvent("on" + evt, function () {
            // Bind fn as this
            fn.handleEvent.call(fn);
          });
        } else {
          el.attachEvent("on" + evt, fn);
        }
      }
    },


    /**
     * Remove Event
     *
     * @param  {element}  element
     * @param  {event}    event
     * @param  {Function} fn
     * @param  {boolean}  bubbling
     */
    removeEvent = function removeEvent(el, evt, fn, bubble) {
      if ("removeEventListener" in el) {
        try {
          el.removeEventListener(evt, fn, bubble);
        } catch (e) {
          if ((typeof fn === "undefined" ? "undefined" : _typeof(fn)) === "object" && fn.handleEvent) {
            el.removeEventListener(evt, function (e) {
              fn.handleEvent.call(fn, e);
            }, bubble);
          } else {
            throw e;
          }
        }
      } else if ("detachEvent" in el) {
        if ((typeof fn === "undefined" ? "undefined" : _typeof(fn)) === "object" && fn.handleEvent) {
          el.detachEvent("on" + evt, function () {
            fn.handleEvent.call(fn);
          });
        } else {
          el.detachEvent("on" + evt, fn);
        }
      }
    },


    /**
     * Get the children of any element
     *
     * @param  {element}
     * @return {array} Returns matching elements in an array
     */
    getChildren = function getChildren(e) {
      if (e.children.length < 1) {
        throw new Error("The Nav container has no containing elements");
      }
      // Store all children in array
      var children = [];
      // Loop through children and store in array if child != TextNode
      for (var i = 0; i < e.children.length; i++) {
        if (e.children[i].nodeType === 1) {
          children.push(e.children[i]);
        }
      }
      return children;
    },


    /**
     * Sets multiple attributes at once
     *
     * @param {element} element
     * @param {attrs}   attrs
     */
    setAttributes = function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    },


    /**
     * Adds a class to any element
     *
     * @param {element} element
     * @param {string}  class
     */
    addClass = function addClass(el, cls) {
      if (el.className.indexOf(cls) !== 0) {
        el.className += " " + cls;
        el.className = el.className.replace(/(^\s*)|(\s*$)/g, "");
      }
    },


    /**
     * Remove a class from any element
     *
     * @param  {element} element
     * @param  {string}  class
     */
    removeClass = function removeClass(el, cls) {
      var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
      el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g, "");
    },


    /**
     * forEach method that passes back the stuff we need
     *
     * @param  {array}    array
     * @param  {Function} callback
     * @param  {scope}    scope
     */
    forEach = function forEach(array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    },


    /**
     * Checks if an element has certain class
     *
     * @param  {element}  element
     * @param  {string}   class name
     * @return {Boolean}
     */
    hasClass = function hasClass(el, cls) {
      return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    },


    /**
     * Sets or removes .focus class on an element.
     */
    toggleFocus = function toggleFocus() {
      var self = this,
          menuItems = opts.menuItems;

      // Move up through the ancestors of the current link until we hit 'menu-items' class. That's top level ul-element class name.
      while (-1 === self.className.indexOf(menuItems)) {

        // On li elements toggle the class .focus.
        if ('li' === self.tagName.toLowerCase()) {
          if (-1 !== self.className.indexOf('focus')) {
            self.className = self.className.replace(' focus', '');
          } else {
            self.className += ' focus';
          }
        }

        self = self.parentElement;
      }
    };

    var nav,
        opts,
        navToggle,
        styleElement = document.createElement("style"),
        htmlEl = document.querySelector('.header'),
        hasAnimFinished,
        isMobile,
        navOpen,
        dropdownButton;

    var ResponsiveNav = function ResponsiveNav(el, options) {
      var i;

      /**
       * Default options
       * @type {Object}
       */
      this.options = {
        animate: true, // Boolean: Use CSS3 transitions, true or false
        transition: 284, // Integer: Speed of the transition, in milliseconds
        label: "Menu", // String: Label for the navigation toggle
        insert: "before", // String: Insert the toggle before or after the navigation
        customToggle: "", // Selector: Specify the ID of a custom toggle
        closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
        openPos: "relative", // String: Position of the opened nav, relative or static
        navClass: "navigation--main--colapse", // String: Default CSS class. If changed, you need to edit the CSS too!
        navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
        jsClass: "js", // String: 'JS enabled' class which is added to <html> element
        enableFocus: true, // Boolean: Do we add 'focus' class in nav elements
        enableDropdown: true, // Boolean: Do we use multi level dropdown
        menuItems: "main-menu", // String: Class that is added only to top ul element
        subMenu: "main-menu__sub", // String: Class that is added to sub menu ul elements
        openDropdown: "Open sub menu", // String: Label for opening sub menu
        closeDropdown: "Close sub menu", // String: Label for closing sub menu
        init: function init() {}, // Function: Init callback
        open: function open() {}, // Function: Open callback
        close: function close() {}, // Function: Close callback
        resizeMobile: function resizeMobile() {}, // Function: Resize callback for "mobile"
        resizeDesktop: function resizeDesktop() {} // Function: Resize callback for "desktop"
      };

      // User defined options
      for (i in options) {
        this.options[i] = options[i];
      }

      // Adds "js" class for <html>
      addClass(htmlEl, this.options.jsClass);

      // Wrapper
      this.wrapperEl = el.replace("#", "");

      // Try selecting ID first
      if (document.getElementById(this.wrapperEl)) {
        this.wrapper = document.getElementById(this.wrapperEl);

        // If element with an ID doesn't exist, use querySelector
      } else if (document.querySelector(this.wrapperEl)) {
        this.wrapper = document.querySelector(this.wrapperEl);

        // If element doesn't exists, stop here.
      } else {
        throw new Error("The nav element you are trying to select doesn't exist");
      }

      // Inner wrapper
      this.wrapper.inner = getChildren(this.wrapper);

      // For minification
      opts = this.options;
      nav = this.wrapper;

      // Init
      this._init(this);
    };

    ResponsiveNav.prototype = {

      /**
       * Unattaches events and removes any classes that were added
       */
      destroy: function destroy() {
        this._removeStyles();
        removeClass(nav, "closed");
        removeClass(nav, "opened");
        removeClass(nav, opts.navClass);
        removeClass(nav, opts.navClass + "-" + this.index);
        removeClass(htmlEl, opts.navActiveClass);
        nav.removeAttribute("style");
        nav.removeAttribute("aria-hidden");

        removeEvent(window, "resize", this, false);
        removeEvent(window, "focus", this, false);
        removeEvent(document.body, "touchmove", this, false);
        removeEvent(navToggle, "touchstart", this, false);
        removeEvent(navToggle, "touchend", this, false);
        removeEvent(navToggle, "mouseup", this, false);
        removeEvent(navToggle, "keyup", this, false);
        removeEvent(navToggle, "click", this, false);

        if (!opts.customToggle) {
          navToggle.parentNode.removeChild(navToggle);
        } else {
          navToggle.removeAttribute("aria-hidden");
        }

        if (opts.enableDropdown) {
          var self = this;
          forEach(dropdownButton, function (i, el) {
            removeEvent(el, "touchstart", self, false);
            removeEvent(el, "touchend", self, false);
            removeEvent(el, "mouseup", self, false);
            removeEvent(el, "keyup", self, false);
            removeEvent(el, "click", self, false);
          });
        }
      },

      /**
       * Toggles the navigation open/close
       */
      toggle: function toggle() {
        if (hasAnimFinished === true) {
          if (!navOpen) {
            this.open();
          } else {
            this.close();
          }
        }
      },

      /**
       * Opens the navigation
       */
      open: function open() {
        if (!navOpen) {
          removeClass(nav, "closed");
          addClass(nav, "opened");
          addClass(htmlEl, opts.navActiveClass);
          addClass(navToggle, "active");
          nav.style.position = opts.openPos;
          setAttributes(nav, { "aria-hidden": "false" });
          setAttributes(nav, { "aria-expanded": "true" });
          setAttributes(navToggle, { "aria-expanded": "true" });
          navOpen = true;
          opts.open();
        }
      },

      /**
       * Closes the navigation
       */
      close: function close() {
        if (navOpen) {
          addClass(nav, "closed");
          removeClass(nav, "opened");
          removeClass(htmlEl, opts.navActiveClass);
          removeClass(navToggle, "active");
          setAttributes(nav, { "aria-hidden": "true" });
          setAttributes(nav, { "aria-expanded": "false" });
          setAttributes(navToggle, { "aria-expanded": "false" });

          // If animations are enabled, wait until they finish
          if (opts.animate) {
            hasAnimFinished = false;
            setTimeout(function () {
              nav.style.position = "absolute";
              hasAnimFinished = true;

              if (opts.enableDropdown) {
                removeClass(nav, "dropdown-active");
                forEach(dropdownButton, function (i, el) {
                  removeClass(el, "toggled");
                  removeClass(el.nextSibling, "toggled"); // Remove class from sub-menu ul element.
                });
              }
            }, opts.transition + 10);

            // Animations aren't enabled, we can do these immediately
          } else {
            nav.style.position = "absolute";

            if (opts.enableDropdown) {
              removeClass(nav, "dropdown-active");
              forEach(dropdownButton, function (i, el) {
                removeClass(el, "toggled");
                removeClass(el.nextSibling, "toggled"); // Remove class from sub-menu ul element.
              });
            }
          }

          navOpen = false;
          opts.close();
        }
      },

      /**
       * Resize is called on window resize and orientation change.
       * It initializes the CSS styles and height calculations.
       */
      resize: function resize() {

        // Resize watches navigation toggle's display state
        if (window.getComputedStyle(navToggle, null).getPropertyValue("display") !== "none") {

          isMobile = true;
          setAttributes(navToggle, { "aria-hidden": "false" });
          setAttributes(nav, { "aria-expanded": "false" });
          setAttributes(navToggle, { "aria-expanded": "false" });

          // If the navigation is hidden
          if (nav.className.match(/(^|\s)closed(\s|$)/)) {
            setAttributes(nav, { "aria-hidden": "true" });
            nav.style.position = "absolute";
          }

          // If the navigation is not hidden
          if (!nav.className.match(/(^|\s)closed(\s|$)/)) {
            setAttributes(nav, { "aria-expanded": "true" });
            setAttributes(navToggle, { "aria-expanded": "true" });
          }

          this._createStyles();
          this._calcHeight();
          opts.resizeMobile();
        } else {

          isMobile = false;
          setAttributes(navToggle, { "aria-hidden": "true" });
          setAttributes(nav, { "aria-hidden": "false" });
          nav.removeAttribute("aria-expanded");
          navToggle.removeAttribute("aria-expanded");
          nav.style.position = opts.openPos;
          this._removeStyles();
          opts.resizeDesktop();
        }
      },

      /**
       * Takes care of all even handling
       *
       * @param  {event} event
       * @return {type} returns the type of event that should be used
       */
      handleEvent: function handleEvent(e) {
        var evt = e || window.event;

        switch (evt.type) {
          case "touchstart":
            this._onTouchStart(evt);
            break;
          case "touchmove":
            this._onTouchMove(evt);
            break;
          case "touchend":
          case "mouseup":
            this._onTouchEnd(evt);
            break;
          case "click":
            this._preventDefault(evt);
            break;
          case "keyup":
            this._onKeyUp(evt);
            break;
          case "focus":
          case "resize":
            this.resize(evt);
            break;
        }
      },

      /**
       * Initializes the widget
       */
      _init: function _init() {
        this.index = index++;

        addClass(nav, opts.navClass);
        addClass(nav, opts.navClass + "-" + this.index);
        addClass(nav, "closed");
        hasAnimFinished = true;
        navOpen = false;

        this._closeOnNavClick();
        this._createToggle();
        this._transitions();
        this.resize();

        // Enable more accessible dropdown menu
        this._createFocus();
        this._createDropdown();

        /**
         * On IE8 the resize event triggers too early for some reason
         * so it's called here again on init to make sure all the
         * calculated styles are correct.
         */
        var self = this;
        setTimeout(function () {
          self.resize();
        }, 20);

        addEvent(window, "resize", this, false);
        addEvent(window, "focus", this, false);
        addEvent(document.body, "touchmove", this, false);
        addEvent(navToggle, "touchstart", this, false);
        addEvent(navToggle, "touchend", this, false);
        addEvent(navToggle, "mouseup", this, false);
        addEvent(navToggle, "keyup", this, false);
        addEvent(navToggle, "click", this, false);

        /**
         * Init callback here
         */
        opts.init();
      },

      /**
       * Creates Styles to the <head>
       */
      _createStyles: function _createStyles() {
        if (!styleElement.parentNode) {
          styleElement.type = "text/css";
          document.getElementsByTagName("head")[0].appendChild(styleElement);
        }
      },

      /**
       * Removes styles from the <head>
       */
      _removeStyles: function _removeStyles() {
        if (styleElement.parentNode) {
          styleElement.parentNode.removeChild(styleElement);
        }
      },

      /**
       * Creates Navigation Toggle
       */
      _createToggle: function _createToggle() {

        // If there's no toggle, let's create one
        if (!opts.customToggle) {
          var toggle = document.createElement("a");
          toggle.innerHTML = opts.label;
          setAttributes(toggle, {
            "href": "#",
            "class": "nav-toggle"
          });

          // Determine where to insert the toggle
          if (opts.insert === "after") {
            nav.parentNode.insertBefore(toggle, nav.nextSibling);
          } else {
            nav.parentNode.insertBefore(toggle, nav);
          }

          navToggle = toggle;

          // There is a toggle already, let's use that one
        } else {
          var toggleEl = opts.customToggle.replace("#", "");

          if (document.getElementById(toggleEl)) {
            navToggle = document.getElementById(toggleEl);
          } else if (document.querySelector(toggleEl)) {
            navToggle = document.querySelector(toggleEl);
          } else {
            throw new Error("The custom nav toggle you are trying to select doesn't exist");
          }
        }
      },

      /**
       * Closes the navigation when a link inside is clicked.
       */
      _closeOnNavClick: function _closeOnNavClick() {
        if (opts.closeOnNavClick) {
          var links = nav.getElementsByTagName("a"),
              self = this;
          forEach(links, function (i, el) {
            addEvent(links[i], "click", function () {
              if (isMobile) {
                self.toggle();
              }
            }, false);
          });
        }
      },

      /**
       * Prevents the default functionality.
       *
       * @param  {event} event
       */
      _preventDefault: function _preventDefault(e) {
        if (e.preventDefault) {
          if (e.stopImmediatePropagation) {
            e.stopImmediatePropagation();
          }
          e.preventDefault();
          e.stopPropagation();
          return false;

          // This is strictly for old IE
        } else {
          e.returnValue = false;
        }
      },

      /**
       * On touch start we get the location of the touch.
       *
       * @param  {event} event
       */
      _onTouchStart: function _onTouchStart(e) {
        if (!Event.prototype.stopImmediatePropagation) {
          this._preventDefault(e);
        }
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.touchHasMoved = false;

        /**
         * Remove mouseup event completely here to avoid
         * double triggering the event.
         */
        removeEvent(navToggle, "mouseup", this, false);
      },

      /**
       * Check if the user is scrolling instead of tapping.
       *
       * @param  {event} event
       */
      _onTouchMove: function _onTouchMove(e) {
        if (Math.abs(e.touches[0].clientX - this.startX) > 10 || Math.abs(e.touches[0].clientY - this.startY) > 10) {
          this.touchHasMoved = true;
        }
      },

      /**
       * On touch end toggle the navigation.
       *
       * @param  {event} event
       */
      _onTouchEnd: function _onTouchEnd(e) {
        this._preventDefault(e);
        if (!isMobile) {
          return;
        }

        // Get event.target, the old IE way
        var thisEvent = e || window.event,
            targetEl = thisEvent.target || thisEvent.srcElement,
            isDropdownTapped = false;

        // Was it sub-navigation toggle or the main toggle?
        if (hasClass(targetEl, "link-icon__menu-expand") && opts.enableDropdown) isDropdownTapped = true;

        // If the user isn't scrolling
        if (!this.touchHasMoved) {

          // If the event type is touch
          if (e.type === "touchend") {

            // If sub-navigation toggle was tapped
            if (isDropdownTapped) {
              this._toggleDropdown(targetEl);

              // If the main toggle was tapped
            } else {
              this.toggle();
            }
            return;

            // Event type was click, not touch
          } else {
            var evt = e || window.event;

            // If it isn't a right click, do toggling
            if (!(evt.which === 3 || evt.button === 2)) {
              if (isDropdownTapped) {
                this._toggleDropdown(targetEl);
              } else {
                this.toggle();
              }
            }
          }
        }
      },

      /**
       * For keyboard accessibility, toggle the navigation on Enter
       * keypress too.
       *
       * @param  {event} event
       */
      _onKeyUp: function _onKeyUp(e) {
        var evt = e || window.event,
            targetEl = e.target,
            isDropdownTapped = false;

        if (hasClass(targetEl, "link-icon__menu-expand") && opts.enableDropdown) isDropdownTapped = true;
        if (evt.keyCode === 13) {
          if (isDropdownTapped) {
            this._toggleDropdown(targetEl);
          } else {
            this.toggle();
          }
        }
      },

      /**
       * Adds the needed CSS transitions if animations are enabled
       */
      _transitions: function _transitions() {
        if (opts.animate) {
          var objStyle = nav.style,
              transition = "max-height " + opts.transition + "ms, visibility " + opts.transition + "ms linear";

          objStyle.WebkitTransition = objStyle.MozTransition = objStyle.OTransition = objStyle.transition = transition;
        }
      },

      /**
       * Calculates the height of the navigation and then creates
       * styles which are later added to the page <head>
       */
      _calcHeight: function _calcHeight() {
        var savedHeight = 0;
        for (var i = 0; i < nav.inner.length; i++) {
          savedHeight += nav.inner[i].offsetHeight;
        }

        var innerStyles = "." + opts.jsClass + " ." + opts.navClass + "-" + this.index + ".opened{max-height:" + savedHeight + "px !important} ." + opts.jsClass + " ." + opts.navClass + "-" + this.index + ".opened.dropdown-active {max-height:9999px !important}";

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = innerStyles;
        } else {
          styleElement.innerHTML = innerStyles;
        }

        innerStyles = "";
      },

      /**
       * Creates 'focus' class on nav elements
       */
      _createFocus: function _createFocus() {

        // Bail if focus is not enabled.
        if (!opts.enableFocus) {
          return;
        }

        // Get all the link elements within the menu.
        var menu = nav.getElementsByTagName('ul')[0],
            links = menu.getElementsByTagName('a'),
            len,
            i;

        // Each time a menu link is focused or blurred, toggle focus.
        for (i = 0, len = links.length; i < len; i++) {
          links[i].addEventListener('focus', toggleFocus, true);
          links[i].addEventListener('blur', toggleFocus, true);
        }
      },

      /**
       * Enable multi-level dropdown
       */
      _createDropdown: function _createDropdown() {

        // Bail if multiple level dropdown is not enabled.
        if (!opts.enableDropdown) {
          return;
        }

        var self = this;

        // Get submenus
        var menu = nav.getElementsByTagName('ul')[0],
            subMenus = nav.getElementsByClassName(opts.subMenu),
            i,
            len;

        // Add .multiple-level-nav class to nav
        addClass(nav, 'multiple-level-nav');

        // Set menu items with sub menus to aria-haspopup="true" and add toggle button before sub menu.
        for (i = 0, len = subMenus.length; i < len; i++) {
          subMenus[i].parentNode.setAttribute('aria-haspopup', 'true');
          subMenus[i].insertAdjacentHTML('beforebegin', '<div class="link-icon link-icon__menu-expand link-icon--after" aria-hidden="true" aria-expanded="false">' + opts.openDropdown + '</div>');
        }
        // Select all dropdown buttons
        dropdownButton = nav.querySelectorAll('.link-icon__menu-expand');

        // For each dropdown Button element add click event
        forEach(dropdownButton, function (i, el) {
          addEvent(el, "touchstart", self, false);
          addEvent(el, "touchend", self, false);
          addEvent(el, "mouseup", self, false);
          addEvent(el, "keyup", self, false);
          addEvent(el, "click", self, false);
        });
      },

      /**
       * Toggles sub-navigations open/closed
       *
       * @param  {element} The toggle that was tapped
       */
      _toggleDropdown: function _toggleDropdown(targetEl) {

        // Enable active class to let the navigation expand over
        // the calculated max height
        //addClass(nav, "dropdown-active");

        // Change dropdown button text on every click
        if (targetEl.innerHTML === opts.openDropdown) {
          targetEl.innerHTML = opts.closeDropdown;
        } else {
          targetEl.innerHTML = opts.openDropdown;
        }

        // Check if the sub-navigation is inside another sub-nav
        var parentEl = targetEl.parentNode,
            isInsideSub = hasClass(parentEl.parentNode.parentNode, "main-menu__item--expanded");

        // Toggle dropdown button
        if (!hasClass(targetEl, 'toggled')) {

          // Add .toggled class
          addClass(targetEl, 'toggled');

          // Set aria-expanded to true
          targetEl.setAttribute('aria-expanded', 'true');

          // Get next element meaning UL with .main-menu__sub class
          var nextElement = targetEl.nextElementSibling;

          // Add 'toggled' class to sub-menu element
          addClass(nextElement, 'toggled');

          // Add 'dropdown-active' class to nav when dropdown is toggled
          addClass(nav, 'dropdown-active');
        } else {

          // Remove .toggled class
          removeClass(targetEl, 'toggled');

          // Set aria-expanded to false
          targetEl.setAttribute('aria-expanded', 'false');

          // Get next element meaning UL with .main-menu__sub
          var nextElement = targetEl.nextElementSibling;

          // Remove 'toggled' class from sub-menu element
          removeClass(nextElement, 'toggled');

          // Remove 'dropdown-active' class to nav when dropdown is toggled
          removeClass(nav, 'dropdown-active');
        }
      }

    };

    /**
     * Return new Responsive Nav
     */
    return new ResponsiveNav(el, options);
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = responsiveNav;
  } else {
    window.responsiveNav = responsiveNav;
  }
})(document, window, 0);
'use strict';

// tabs.js
// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
// Drupal.behaviors.tabs = {
//   attach: function (context, settings) {

(function () {
    // REMOVE IF DRUPAL

    'use strict';

    // Set 'document' to 'context' if Drupal

    var tabs = document.querySelectorAll('[role=tab]');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", showTabPanel);
    }
    function showTabPanel(el) {
        var tabs2 = document.querySelectorAll('[role=tab]');
        for (var i = 0; i < tabs2.length; i++) {
            tabs2[i].setAttribute('aria-selected', 'false');
        }
        el.target.setAttribute('aria-selected', 'true');

        var tabPanelToOpen = el.target.getAttribute('aria-controls');
        var tabPanels = document.querySelectorAll('[role=tabpanel]');
        for (var i = 0; i < tabPanels.length; i++) {
            tabPanels[i].classList.remove('tabs__content--js-active');
        }
        document.getElementById(tabPanelToOpen).classList.add('tabs__content--js-active');
    }
    $('[role=tablist]').keydown(function (e) {
        if (e.keyCode == 37) {
            $("[aria-selected=true]").prev().click().focus();
            e.preventDefault();
        }
        if (e.keyCode == 38) {
            $("[aria-selected=true]").prev().click().focus();
            e.preventDefault();
        }
        if (e.keyCode == 39) {
            $("[aria-selected=true]").next().click().focus();
            e.preventDefault();
        }
        if (e.keyCode == 40) {
            $("[aria-selected=true]").next().click().focus();
            e.preventDefault();
        }
    });
})(); // REMOVE IF DRUPAL

// UNCOMMENT IF DRUPAL
//   }
// };
'use strict';

// status_overlay.js
// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
// Drupal.behaviors.status = {
//   attach: function (context, settings) {

(function () {
    // REMOVE IF DRUPAL

    'use strict';

    // Set 'document' to 'context' if Drupal

    var close = document.querySelectorAll('.button--close');

    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function (e) {
            var deleteDiv = 'message-wrapper';
            var elements = document.getElementsByClassName(deleteDiv);
            if (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
            e.preventDefault();
        });
    }

    var closewrapper = document.querySelectorAll('.message-wrapper');

    for (var i = 0; i < close.length; i++) {
        closewrapper[i].addEventListener('click', function (e) {
            var deleteWrapper = 'message-wrapper';
            var elements = document.getElementsByClassName(deleteWrapper);
            if (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
            e.preventDefault();
        });
    }

    //

})(); // REMOVE IF DRUPAL


// UNCOMMENT IF DRUPAL
//   }
// };
'use strict';

// user-login-register-password_overlay.js
// UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
// Drupal.behaviors.loginregisterpasswordoverlay = {
//   attach: function (context, settings) {

(function () {
    // REMOVE IF DRUPAL

    'use strict';

    // Set 'document' to 'context' if Drupal

    // remove button on button click

    var removeclosebutton = document.querySelectorAll('.button--close-invert');
    for (var i = 0; i < removeclosebutton.length; i++) {
        removeclosebutton[i].addEventListener('click', function (e) {
            var deleteDiv = 'button--close-register';
            var remove = document.getElementsByClassName(deleteDiv);
            if (remove.length > 0) {
                remove[0].parentNode.removeChild(remove[0]);
            }
            e.preventDefault();
        });
    }

    // remove wrapper-overlay on button click
    var close = document.querySelector('.button--close-invert');
    var removeclassname = document.querySelectorAll('.main__user-register-overlay-wrapper');
    close.addEventListener('click', function (e) {
        e.preventDefault();
        [].map.call(removeclassname, function (el) {
            el.classList.remove('main__user-register-overlay-wrapper');
        });
    });
})(); // REMOVE IF DRUPAL


// UNCOMMENT IF DRUPAL
//   }
// };
//# sourceMappingURL=scripts-styleguide.js.map
