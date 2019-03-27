var config = {
    deps: [
        'js/pass'
    ],
    map: {
       '*':{
        'popper': 'js/popper.min',
        'bootstrap4': 'Magento_Theme/js/bootstrap.bundle',
        'slick':'js/slick.min'
        }
    },
    shim: {
        'popper': {
            'deps': ['jquery'],
            'exports': 'popper'
        },
        'bootstrap4': {
            'deps': ['jquery', 'popper']
        },
        'slick':{
            'deps':['jquery']
        }
    }
};