var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nickName = ko.observableArray(data.nickName);
  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 5) {
      title = "Newborn";
    } else if (clicks < 13) {
      title = "Child";
    } else if (clicks < 21) {
      title = "Teenager";
    } else if (clicks < 50) {
      title = "Adult";
    } else {
      title = "Senior"
    }
    return title;
  }, this);
};
var initialCats = [{
    clickCount: 0,
    name: 'Cutie',
    imgSrc: 'img/dog1.jpeg',
    nickName: ['Pumpkin', 'Poops', 'Shittyface']
  },{
    clickCount: 0,
    name: 'Doggie',
    imgSrc: 'img/dog2.jpg',
    nickName: ['Poopoo', 'Squishy', 'Cod']
  },{
    clickCount: 0,
    name: 'Shamooo',
    imgSrc: 'img/dog3.jpeg',
    nickName: ['Shampoo', 'Alligator', 'Mian']
  },{
    clickCount: 0,
    name: 'Schoolie',
    imgSrc: 'img/dog4.jpeg',
    nickName: ['Herman', 'George', 'Bobby']
  },{
    clickCount: 0,
    name: 'Lala',
    imgSrc: 'img/dog5.jpeg',
    nickName: ['Icky', 'Stinky', 'Pie']
  } ];

var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };
};

ko.applyBindings(new ViewModel());
