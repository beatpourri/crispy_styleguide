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
//# sourceMappingURL=accordion-item.js.map
