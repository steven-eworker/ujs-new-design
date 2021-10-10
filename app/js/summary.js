var $ = jQuery;
(function () {
    $('.checks').on('click', function () {
        var priceType;
        if ($(this).hasClass('singular')) {
            priceType = 'singular';
        } else if ($(this).hasClass('plural')) {
            priceType = 'plural';
        }

        summaryPriceManager($(this).data('price'), priceType).then(
            (message) => {
                var actualPrice = 0;
                $('.checks.plural').each(function () {
                    var ifChecked = $(this).find('input').is(':checked');
                    if (ifChecked) {
                        if ($('.form.summary .list[data-price="' + $(this).data('price') + '"]').length > 1) {
                            $('.form.summary .list[data-price="' + $(this).data('price') + '"]:not(:eq(0))').remove();
                        }
                    } else {
                        $('.form.summary .list[data-price="' + $(this).data('price') + '"]').remove();
                    }
                });
                return 'true';
            }
        ).then(
            (message) => {
                updateSummaryPrice();
            }
        );
    });
    $('.checks.later').on('click', function () {
        $('.form.summary .singular').remove();
        updateSummaryPrice();
    });

})();

function summaryPriceManager(price, priceType, selected = true) {
    var priceText = '$' + parseFloat(price).toFixed(2).toString();
    var offerText = $('.checks[data-price="' + price + '"]').text();
    if ($('.form.summary').length) {
        if (priceType == 'singular' && price > 0) {
            if ($('.form.summary .singular').length == 0) {
                $('<p class="list singular"  data-price="' + price + '"><span class="first">' + offerText + '</span><span class="price">' + priceText + '</span></p>').insertBefore('.form.summary .total');
            } else {
                $('.form.summary .singular').attr('data-price', price);
                $('.form.summary .singular .first').text($('.checks[data-price="' + price + '"]').text());
                $('.form.summary .singular .price').text(priceText);
            }
        } else if (priceType == 'plural') {
            $('<p class="list plural"  data-price="' + price + '"><span class="first">' + offerText + '</span><span class="price">' + priceText + '</span></p>').insertBefore('.form.summary .total');
        }
    }
    return Promise.resolve('true');
}

function updateSummaryPrice() {
    var actualPrice = 0;
    document.querySelectorAll('.form.summary .list').forEach(function (listEl) {
        actualPrice += parseFloat(listEl.dataset.price);
    });
    document.querySelector('.form.summary .total').innerText = '$' + parseFloat(actualPrice).toFixed(2).toString();
}