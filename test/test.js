requirejs.config({
    baseUrl: '.',
    paths: {
        'test-library': '../dist/library',
    },
});

require(['test-library'], function(TestLibrary) {
    console.log(TestLibrary);
});
