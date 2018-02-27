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
//# sourceMappingURL=tabs.js.map
