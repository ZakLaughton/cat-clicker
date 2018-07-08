let catNames = ['Ross', 'Rachel']
let cats = [
    {name: 'Ross', image: 'cat1.jpg'},
    {name: 'Rachel', image: 'cat2.jpg'}
]

console.log(`cats: ${cats.length}`)
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
    catHtml = `<div class="cat cat${index}">
                   <h2 class="cat-name">${cat.name}</h2>
                   <p>Clicks: <span class="click-count">0</span></p>
                   <img src="img/${cat.image}" alt="Cat ${cat.name}" class="clicker-cat">
               </div>
           `
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

