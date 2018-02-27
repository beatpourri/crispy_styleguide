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
//# sourceMappingURL=status_overlay.js.map
