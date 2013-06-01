require.config({
    paths: {
        jquery: '../components/jquery/jquery',
    },
    shim: {
        app: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    console.log(app);
});
