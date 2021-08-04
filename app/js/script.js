var filterTrigger = document.querySelector('.filter-trigger');
if( filterTrigger != undefined ){
    filterTrigger.addEventListener('click', function(){
        var filters = document.querySelector('.filters');
        var body = document.querySelector('body');
        if( filters.classList.contains('open') ){
            filters.classList.remove('open');
            filterTrigger.classList.remove('opened');
            body.classList.remove('noscroll');
        } else {
            filters.classList.add('open');
            filterTrigger.classList.add('opened');
            setTimeout(() => {
                body.classList.add('noscroll');
            }, 250);
        }
        
    });
}