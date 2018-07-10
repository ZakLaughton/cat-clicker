(function() {
  let model = {
    /**
     * Cat data
     */
    currentCat: null,
    cats: [
      {
        name: 'Ross',
        image: 'img/cat1.jpg',
        clickCount: 0,
      },
      {
        name: 'Rachel',
        image: 'img/cat2.jpg',
        clickCount: 0,
      },
      {
        name: 'Joey',
        image: 'img/cat3.jpg',
        clickCount: 0,
      },
      {
        name: 'Pheobe',
        image: 'img/cat4.jpg',
        clickCount: 0,
      },
      {
        name: 'Monica',
        image: 'img/cat5.jpg',
        clickCount: 0,
      },
      {
        name: 'Chandler',
        image: 'img/cat6.jpg',
        clickCount: 0,
      },
    ],

    /**
     * Admin form data
     */
    adminFormVisible: false,
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

    /**
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

    /**
     * Admin form data
     */
    getAdminFormVisibility: function() {
      return model.adminFormVisible;
    },

    setAdminFormVisibility: function(visible) {
      model.adminFormVisible = visible;
    },

    setCurrentCatData: function(name, imgSrc, clickCount) {
      model.currentCat.name = name;
      model.currentCat.image = imgSrc;
      model.currentCat.clickCount = clickCount;
    }
  };

  let catView = {
    init: function() {
      this.catElem = $('#cat');
      this.nameElem = $('#cat-name');
      this.countElem = $('#click-count');
      this.catImageElem = $('#clicker-image');

      this.catImageElem.click(function() {
        octopus.incrementCounter();
      });

      this.render();
    },

    render: function() {
      // Update DOM with elements for current cat
      let currentCat = octopus.getCurrentCat();
      this.countElem.text(currentCat.clickCount);
      this.nameElem.text(currentCat.name);
      this.catImageElem.attr('src', currentCat.image);
    },
  };

  let catListView = {
    init: function() {
      this.catListElem = $('#cat-list');
      this.render();
    },

    render: function() {
      let cats = octopus.getCats();
      this.catListElem.empty();

      for (const cat of cats) {
        let elem = document.createElement('li');
        elem.textContent = cat.name;

        elem.addEventListener(
          'click',
          (function(cat) {
            return function() {
              octopus.setCurrentCat(cat);
              catView.render();
            };
          })(cat),
        );

        this.catListElem.append(elem);
      }
    },
  };

  let adminView = {
    init: function() {
      this.adminFormElem = $('#admin-form form');
      let adminButton = $('button[name="adminform"]');
      let cancelButton = $('button[name="cancel"]');
      let nameFormElem = $('input[name="catname"]');
      let imgSrcFormElem = $('input[name="catimage"]');
      let clickCountFormElem = $('input[name="clickcount"]');

      // Open admin form on button click
      adminButton.click(function() {
        octopus.setAdminFormVisibility(true);
        adminView.render();
      });

      // Close admin form on "cancel"
      cancelButton.click(function() {
        octopus.setAdminFormVisibility(false);
        adminView.render();
      });

      // Updated data on submit
      this.adminFormElem.submit(function(evt) {
        evt.preventDefault();
        console.log(nameFormElem.val(), imgSrcFormElem.val(), clickCountFormElem.val())
        octopus.setCurrentCatData(nameFormElem.val(),
                                  imgSrcFormElem.val(),
                                  clickCountFormElem.val());
        catView.render();
        catListView.render();
      })
      this.render();
    },

    render: function() {
      let visible = octopus.getAdminFormVisibility();
      if (visible) {
        this.adminFormElem.show();
      } else {
        this.adminFormElem.hide();
      }
    },
  };

  octopus.init();
})();
