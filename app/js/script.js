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
    window.onscroll = scrollFunctions;
    window.resize = scrollFunctions;
    var sticky = header.offsetTop;
    if (scrollableSidebar != undefined) {
        var sidebarOffset = scrollableSidebar.offsetTop;
    }

    function scrollFunctions() {
        if (window.innerWidth > 991) {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky-head");
            } else {
                header.classList.remove("sticky-head");
            }
        } else {
            header.classList.remove("sticky-head");
        }

        // Make Sidebar Sticky
        if (scrollableSidebar != undefined) {

            if (window.innerWidth > 991 && window.pageYOffset + 200 > sidebarOffset) {
                scrollableSidebar.classList.add('sticky-sidebar');
                scrollableSidebar.style.top = '140px';
            } else {
                scrollableSidebar.classList.remove('sticky-sidebar');
                scrollableSidebar.removeAttribute('style');
            }
        }

        // Highlight Sidebar Section
        var sections = ['profile-info', 'job-listing', 'credit-history'];
        highlightSectionsSidebar(sections[1]);
        highlightSectionsSidebar(sections[2]);
        // sections.forEach(function(sec){
        // });
    }

    function highlightSectionsSidebar(sec) {
        var section, sectionOffset, anchorTrigger;
        section = document.getElementById(sec);
        if (section != undefined) {
            sectionOffset = section.offsetTop;
            anchorTrigger = document.querySelectorAll('a[href="#' + sec + '"]');
            var windowScroll = window.scrollY + window.innerHeight - 200;
            if (windowScroll > sectionOffset) {
                anchorTrigger.forEach(function (btn) {
                    btn.classList.add('active');
                });
                // anchorTrigger.classList.add('active');
            } else {
                anchorTrigger.forEach(function (btn) {
                    btn.classList.remove('active');
                });
                // anchorTrigger.classList.remove('active');
            }
        }
    }

    function offsetBottom(el, i) {
        i = i || 0;
        return document.querySelectorAll(el)[i].getBoundingClientRect().bottom
    }
}

var showPassword = document.querySelectorAll('.show-password');
showPassword.forEach(function (el) {
    el.addEventListener('click', function (toggle) {
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

var skipToCredits = document.querySelector('.skip-to-credits');
if (skipToCredits) {
    skipToCredits.addEventListener('click', function (btn) {
        var top = section = document.getElementById('job-listing').offsetTop - 200;
        window.scrollTo(0, top);
    });
}

var newPassword = document.getElementById('newPassword');
var reTypePassword = document.getElementById('reTypePassword');
if (newPassword) {
    newPassword.addEventListener('keyup', function(ev){
        var pw1 = reTypePassword;
        var pw2 = ev.target;
        var errorMessage = pw2.parentNode.parentNode.parentNode.querySelector('.error');
        passwordMatchSame(pw1, pw2, errorMessage);
    });

    reTypePassword.addEventListener('keyup', function(ev){
        var pw1 = newPassword;
        var pw2 = ev.target;
        var errorMessage = pw2.parentNode.parentNode.parentNode.querySelector('.error');
        passwordMatchSame(pw1, pw2, errorMessage);
    });

    function passwordMatchSame(pw1, pw2, errorMessage){
        var pw1 = pw1.value;
        var pw2 = pw2.value;
        if( pw1 != '' ){
            if( pw1 != pw2 ){
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        } else {
            errorMessage.style.display = 'none';
        }
    }
}

var radioToUncheck = document.querySelectorAll('input[type=radio]:checked');
if( radioToUncheck ){
    radioToUncheck.forEach(function(rad){
        rad.addEventListener('click', function(rd){
            rd.checked = false;
        });
    });
}