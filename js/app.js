var ViewModel = function() {
  var self = this;
  self.clickCount = ko.observable(0);
  self.name = ko.observable('Cutie');
  self.imgSrc = ko.observable('img/dog1.jpeg');
  // self.stages = ko.observableArray([
  //   {threshold: 0, stage: 'Newborn'},
  //   {threshold: 5, stage: 'Child'},
  //   {threshold: 13, stage: 'Teenager'},
  //   {threshold: 21, stage: 'Adult'},
  //   {threshold: 50, stage: 'Senior'}
  // ]);

  self.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
    self.nickName = ko.observableArray([
      { name: 'Doggy'},
      { name: 'Pumpkin'},
      { name: 'Poops'}
    ])

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
