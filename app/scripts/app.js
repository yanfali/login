/*global define */
define(['jquery'], function($) {
    'use strict';
    var clickHandler = function(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            var $target = $(evt.target);
            if ($target[0].disabled) {
                return;
            }
            var f = $target.closest('form');
            // Disable button for 1000ms after submission to debounce
            // and avoid double clicks
            $target.addClass('disabled_button')[0].disabled = true;
            f.trigger('submit');
            setTimeout(function() {
                $target.removeClass('disabled_button')[0].disabled = false;
            }, 1000);
        };
    var init = function() {
            var $button = $('.login_button');
            $button.on('click', clickHandler);
            var $username = $('.username input');
            $username.on('focus', function(evt) {
                console.log('focus');
                var $target = $(evt.target);
                if ($target.val().length > 0) {
                    console.log('removable');
                    $target.parent().find('.remove_button').css('visibility', 'visible');
                }
            });
            $username.on('keyup', function(evt) {
                var $target = $(evt.target);
                if ($target.val().length > 0) {
                    console.log('removable');
                    $target.parent().find('.remove_button').css('visibility', 'visible');
                } else {
                    $target.parent().find('.remove_button').css('visibility', 'hidden');
                }
            });
            $username.on('blur', function() {
                console.log('blur');
            });
            $('.username .remove_button').on('click', function(evt) {
                $(evt.target).closest('.remove_button').css('visibility', 'hidden');
                $username.val('').trigger('focus');
            });
        };
    $(init());
    return 'Ready';
});
