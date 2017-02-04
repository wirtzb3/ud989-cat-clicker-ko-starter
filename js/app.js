var Cat = function() {
  var self = this;
  self.clickCount = ko.observable(0);
  self.name = ko.observable('Cutie');
  self.imgSrc = ko.observable('img/dog1.jpeg');
  self.nickName = ko.observableArray([
      { name: 'Doggy'},
      { name: 'Pumpkin'},
      { name: 'Poops'}
    ]);
  self.title = ko.computed(function() {
    var title;
    var clicks = self.clickCount();
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
  })
}

var ViewModel = function() {
  self.currentCat = ko.observable(new Cat());
  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());



  // function determineStage(stageObj, counter) {
  //   if (counter > stageObj.threshold) {
  //     return stageObj.stage
  //   }
  // }
  //
  // stages.forEach(stage, function(stage) {
  //   return determineStage(stage, counter)
  // })
