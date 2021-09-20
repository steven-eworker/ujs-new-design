var filterTrigger = document.querySelectorAll('.filter-trigger');
var filterTriggers = document.querySelectorAll('.filter-trigger');
var body = document.querySelector('body');
if (filterTrigger != undefined) {
    filterTriggers.forEach(function (elm) {
        elm.addEventListener('click', function () {
            var filters = document.querySelectorAll('.filters');
            filters.forEach(function (fl) {
                if (fl.classList.contains('open')) {
                    fl.classList.remove('open');
                    elm.classList.remove('opened');
                    body.classList.remove('noscroll');
                } else {
                    fl.classList.add('open');
                    elm.classList.add('opened');
                    setTimeout(() => {
                        body.classList.add('noscroll');
                    }, 250);
                }
            })

        });
    });
}

var toggles = document.querySelectorAll('.row.toggles a');
if (toggles != undefined) {
    toggles.forEach(function (elm) {
        elm.addEventListener('click', function (btn) {
            btn.target.parentNode.querySelector('.row.toggles .active').classList.remove('active');
            var targetDiv = btn.target.dataset.target;
            var toggleDivs = btn.target.parentNode.parentNode.querySelectorAll('.toggle-box .wrap');
            toggleDivs.forEach(function (div) {
                div.style.display = 'none';
            });
            var divFocus = document.getElementById(targetDiv);
            divFocus.style.display = 'block';
            if (divFocus.classList.contains('pay')) {
                if (divFocus.classList.contains('now')) {
                    document.querySelector('.submit.pay-now').parentNode.classList.add('p-now');
                    document.querySelector('.submit.pay-now').parentNode.classList.remove('p-later');
                } else {
                    document.querySelector('.submit.pay-now').parentNode.classList.add('p-later');
                    document.querySelector('.submit.pay-now').parentNode.classList.remove('p-now');
                }
            }
            btn.target.classList.add('active');
        })
    })
}

var textareas = document.querySelectorAll('.textarea');
if (textareas != undefined) {
    tinymce.init({
        selector: '.textarea'
    });
}

var mainEl = document.querySelector('main');
if (mainEl.classList.contains('adjust-height')) {
    var height = document.querySelector('.form-box').offsetHeight;
    document.querySelector('.img-box').style.height = height.toString() + 'px';
}

var checkBoxes = document.querySelectorAll('.checks');
if (checkBoxes != undefined)
    checkBoxes.forEach(function (checks) {
        checks.querySelectorAll('label').forEach(function (label) {
            label.addEventListener('click', function (elm) {
                if (elm.target.parentNode.classList.contains('selected')) {
                    elm.target.parentNode.classList.remove('selected');
                } else {
                    elm.target.parentNode.classList.add('selected');
                }
                removeSelectedLabels();
            });
        });
    });

function removeSelectedLabels() {
    checkBoxes.forEach(function (checks) {
        checks.querySelectorAll('label').forEach(function (label) {
            if (label.querySelector('input:checked') == null) {
                label.parentNode.classList.remove('selected');
            } else {
                label.parentNode.classList.add('selected')
            }
        });
    });
}

var searchInputs = document.querySelectorAll('.search');
if (searchInputs != undefined) {
    searchInputs.forEach(function (srch) {
        srch.addEventListener('onkeyup', function (elm) {
            filterListSearch(elm);
        });
    });
}

function filterListSearch(index) {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelectorAll('.search')[index];
    filter = input.value.toUpperCase();
    ul = input.parentNode.querySelector('.list-options');
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("label")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


var header = document.querySelector("header");
var scrollableSidebar = document.querySelector('.stickthis');
if (header != undefined) {
    window.onscroll = fixTheHeader;
    var sticky = header.offsetTop;
    if( scrollableSidebar != undefined ){
        var sidebarOffset = scrollableSidebar.offsetTop;
    }

    function fixTheHeader() {
        if (window.innerWidth > 991) {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky-head");
            } else {
                header.classList.remove("sticky-head");
            }
        }

            // var headerHeight = document.querySelector('.site-header').offsetHeight;
        if( scrollableSidebar != undefined ){

            if (window.pageYOffset > 170) {
                scrollableSidebar.classList.add('sticky-sidebar');
                scrollableSidebar.style.top = '140px';
            } else {
                scrollableSidebar.classList.remove('sticky-sidebar');
                scrollableSidebar.removeAttribute('style');
            }
        }
    }
}

var showPassword = document.querySelectorAll('.show-password');
showPassword.forEach(function (el) {
    el.addEventListener('click', function (toggle) {
        console.log(toggle.target);
        var input = toggle.target.parentNode.querySelector('input');
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    });
});

var plusIcons = document.querySelectorAll('.action a');
if (plusIcons != undefined) {
    plusIcons.forEach(function (pi) {
        pi.addEventListener('click', function (el) {
            var parentEl = el.target.parentNode.parentNode.parentNode;
            if (parentEl.classList.contains('open')) {
                parentEl.classList.remove('open');
            } else {
                parentEl.classList.add('open');
            }
        });
    });
}

var checkboxSwitch = document.querySelectorAll('.note-check .switch input');
if (checkboxSwitch != undefined) {
    checkboxSwitch.forEach(function (sw) {
        sw.addEventListener('change', function (e) {
            if (e.target.checked == true) {
                e.target.parentNode.parentNode.parentNode.classList.add('checking');
            } else {
                e.target.parentNode.parentNode.parentNode.classList.remove('checking');
            }
        });
    });
}

var tabToggles = document.querySelectorAll('.setting-tabs .tab-item a');
if (tabToggles != undefined) {
    tabToggles.forEach(function (tbt) {
        tbt.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.querySelector('.active').classList.remove('active');
            e.target.parentNode.classList.add('active');
            document.querySelectorAll('.tab-content .tab-data.active').forEach(function (tbc) {
                tbc.classList.remove('active');
            })
            document.getElementById(e.target.dataset.target).classList.add('active');
        })
    });
}

var accessToggle = document.querySelectorAll('.toggle-button-cover .link');
if (accessToggle != undefined) {
    accessToggle.forEach(function (togg) {
        togg.addEventListener('click', function (tgbtn) {
            if (tgbtn.target.classList.contains('submit')) {
                tgbtn.target.parentNode.querySelector('.transparent').classList.add('submit');
                tgbtn.target.parentNode.querySelector('.transparent').classList.remove('transparent');
                tgbtn.target.classList.add('transparent');
                tgbtn.target.classList.remove('submit');
            } else {
                tgbtn.target.parentNode.querySelector('.submit').classList.add('transparent');
                tgbtn.target.parentNode.querySelector('.submit').classList.remove('submit');
                tgbtn.target.classList.remove('transparent');
                tgbtn.target.classList.add('submit');
            }
        });
    });
}