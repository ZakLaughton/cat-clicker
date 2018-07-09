(function(){
    let model = {
        /*
         * Cat data
         */
        currentCat: null,
        cats: [
            {
                name: 'Ross',
                image: 'cat1.jpg',
                clickCount: 0
            },
            {
                name: 'Rachel',
                image: 'cat2.jpg',
                clickCount: 0
            },
            {
                name: 'Joey',
                image: 'cat3.jpg',
                clickCount: 0
            },
            {
                name: 'Pheobe',
                image: 'cat4.jpg',
                clickCount: 0
            },
            {
                name: 'Monica',
                image: 'cat5.jpg',
                clickCount: 0
            },
            {
                name: 'Chandler',
                image: 'cat6.jpg',
                clickCount: 0
            }
        ],

        /*
         * Admin form data
         */
        adminFormVisible: false
    };

    let octopus = {
        init: function() {
            // Set current cat to the first cat
            model.currentCat = model.cats[0];

            // Initialize views
            catListView.init();
            catView.init();
            adminView.init();
        },

        /*
         * Cat data
         */
        getCurrentCat: function() {
            return model.currentCat;
        },

        getCats: function() {
            return model.cats;
        },

        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },

        incrementCounter: function() {
            model.currentCat.clickCount++;
            catView.render();
        },

        /*
         * Admin form data
         */
        getAdminFormVisibility: function() {
            return model.adminFormVisible;
        }
    }

    let catView = {
        init: function() {
            this.catElem = $('#cat');
            this.nameElem = $('#cat-name');
            this.countElem = $('#click-count');
            this.catImageElem = $('#clicker-image');

            this.catImageElem.click(function() {
                octopus.incrementCounter();
            })

            this.render();
        },

        render: function() {
            // Update DOM with elements for current cat
            let currentCat = octopus.getCurrentCat();
            this.countElem.text(currentCat.clickCount);
            this.nameElem.text(currentCat.name);
            this.catImageElem.attr('src', `img/${currentCat.image}`);
        }
    }

    let catListView = {
        init: function() {
            this.catListElem = $('#cat-list');
            this.render();
        },

        render: function() {
            let cats = octopus.getCats();
            this.catListElem.innerHTML = '';

            for (const [index, cat] of cats.entries()) {
                let elem = document.createElement('li');
                elem.textContent = cat.name;

                elem.addEventListener('click', (function(cat) {
                    return function () {
                        octopus.setCurrentCat(cat);
                        catView.render();
                    }
                })(cat));

                this.catListElem.append(elem);
            }
        }
    }

    let adminView = {
        init: function () {
            this.adminFormElem = $('#admin-form form')
            this.render()
        },

        render: function() {
            let visible = octopus.getAdminFormVisibility();
            console.log(visible)
            if (visible) {
                this.adminFormElem.show();
            } else {
                this.adminFormElem.hide();
            }
        }
    }

    octopus.init();
})();

