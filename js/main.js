let cats = $('div.cat')
let catNames = ['Ross', 'Rachel']

console.log(`cats: ${cats.length}`)
cats.each(function(index, cat) {
    $('.click-count').text('0');
    $(cat).children('.cat-name').text(catNames[index])

    $(cat).children('.clicker-cat').click((function(catCopy) {
        return function() {
            let clickCount = Number($(catCopy).find('.click-count').text())
            clickCount += 1;
            $(catCopy).find('.click-count').text(clickCount);
        }
    })(cat))
    
})

