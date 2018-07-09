$(function(){
    let data = {
        cats: [
            {name: 'Ross', image: 'cat1.jpg'},
            {name: 'Rachel', image: 'cat2.jpg'},
            {name: 'Joey', image: 'cat3.jpg'},
            {name: 'Pheobe', image: 'cat4.jpg'},
            {name: 'Monica', image: 'cat5.jpg'},
            {name: 'Chandler', image: 'cat6.jpg'}
        ]
    };

    let octopus = {
        init: function() {
            view.init();
        }
    }

    let view = {
        init: function() {
            this.name = $('#cat-name') 
            this.clickCount = $('#click-count') 
            this.clickerImage = $('#clicker-image') 
            view.render();
            octopus.getCatInfo()

        }

        render: function() {
        }
    }

    octopus.init();
})();

cats.forEach(function(cat, index) {
    // Add cat to list
    catListItem = $('<li/>', {
        class: `cat-name cat${index}`,
        html: cat.name
    })
    $('#cat-list').append(catListItem)
    $(`.cat-name.cat${index}`).click((function(index) {
        return function () {
            $(`main div.active`).removeClass('active').addClass('hidden')
            $(`main div.cat.cat${index}`).removeClass('hidden').addClass('active')
        }
    })(index))
    
    // Add cat to main
    $('<div/>', {
        class: `hidden cat cat${index}`,
        html: catHtml
    }).appendTo('main')

    $(`.cat${index}`).children('.clicker-cat').click((function(indexCopy) {
        return function() {
            let cat = $(`.cat${index}`)
            let clickCount = Number(cat.find('.click-count').text())
            clickCount += 1;
            cat.find('.click-count').text(clickCount);
        }
    })(index))
    
})

