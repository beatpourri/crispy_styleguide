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
//# sourceMappingURL=user-login-register-password_overlay.js.map
