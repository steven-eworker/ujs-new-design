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
            document.getElementById(targetDiv).style.display = 'block';
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