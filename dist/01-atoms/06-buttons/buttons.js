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
//# sourceMappingURL=buttons.js.map
