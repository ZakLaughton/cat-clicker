let catNames = ['Ross', 'Rachel']
let cats = [
    {name: 'Ross', image: 'cat1.jpg'},
    {name: 'Rachel', image: 'cat2.jpg'}
]

console.log(`cats: ${cats.length}`)
cats.forEach(function(cat, index) {
    catHtml = `<div class="cat cat1">
                   <h2 class="cat-name">${cat.name}</h2>
                   <p>Clicks: <span class="click-count">0</span></p>
                   <img src="img/${cat.image}" alt="Cat ${cat.name}" class="clicker-cat">
               </div>
           `
    $('<div/>', {
        class: `cat cat${index}`,
        html: catHtml
    }).appendTo('main')
    //$('.click-count').text('0');
    //$(cat).children('.cat-name').text(catNames[index])

    //$(cat).children('.clicker-cat').click((function(catCopy) {
        //return function() {
            //let clickCount = Number($(catCopy).find('.click-count').text())
            //clickCount += 1;
            //$(catCopy).find('.click-count').text(clickCount);
        //}
    //})(cat))
    
})

