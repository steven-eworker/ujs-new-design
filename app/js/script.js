var filterTrigger = document.querySelectorAll('.filter-trigger');
var filterTriggers = document.querySelectorAll('.filter-trigger');
var body = document.querySelector('body');
if( filterTrigger != undefined ){
    filterTriggers.forEach(function(elm){
        elm.addEventListener('click', function(){
            var filters = document.querySelectorAll('.filters');
            filters.forEach(function(fl){
                if( fl.classList.contains('open') ){
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
if( toggles != undefined ){
    toggles.forEach(function(elm){
        elm.addEventListener('click', function(btn){
            btn.target.parentNode.querySelector('.row.toggles .active').classList.remove('active');
            var targetDiv = btn.target.dataset.target;
            var toggleDivs = btn.target.parentNode.parentNode.querySelectorAll('.toggle-box .wrap');
            toggleDivs.forEach(function(div){
                div.style.display = 'none';
            });
            var divFocus = document.getElementById(targetDiv);
            divFocus.style.display = 'block';
            if( divFocus.classList.contains('pay') ){
                if( divFocus.classList.contains('now') ){
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
if( textareas != undefined ){
    tinymce.init({
        selector: '.textarea'
      });
}

var mainEl = document.querySelector('main');
if( mainEl.classList.contains('adjust-height') ){
    var height = document.querySelector('.form-box').offsetHeight;
    document.querySelector('.img-box').style.height = height.toString() + 'px';
}

var checkBoxes = document.querySelectorAll('.checks');
if( checkBoxes != undefined )
checkBoxes.forEach(function(checks){
    checks.querySelectorAll('label').forEach(function(label){
        label.addEventListener('click', function(elm){
            if( elm.target.parentNode.classList.contains('selected') ){
                elm.target.parentNode.classList.remove('selected');
            } else {
                elm.target.parentNode.classList.add('selected');
            }
            removeSelectedLabels();
        });
    });
});

function removeSelectedLabels(){
    checkBoxes.forEach(function(checks){
        checks.querySelectorAll('label').forEach(function(label){
            if( label.querySelector('input:checked') == null ){
                label.parentNode.classList.remove('selected');
            } else {
                label.parentNode.classList.add('selected')
            }
        });
    });
}

var searchInputs = document.querySelectorAll('.search');
if( searchInputs != undefined ){
    searchInputs.forEach(function(srch){
        srch.addEventListener('onkeyup', function(elm){
            filterListSearch(elm);
        });
    });
}

function filterListSearch1() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelectorAll('.search')[0];
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

function filterListSearch2() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelectorAll('.search')[1];
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

function filterListSearch3() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelectorAll('.search')[2];
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


window.onscroll = fixTheHeader;
var header = document.querySelector("header");
var sticky = header.offsetTop;

function fixTheHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-head");
  } else {
    header.classList.remove("sticky-head");
  }
}