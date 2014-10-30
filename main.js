var blackJack = {};

blackJack.Ref = new Firebase('https://scorching-inferno-9253.firebaseio.com/');

blackJack.Player = function(options) {
  this.name = options.name;
  this.hand = [];
  this.wager = 0;
  this.availCash = 1000;

};


blackJack.addPlayer = function() {
  // Will need to include the code below
    // var playerName = $('#playerNameInput').val();
    // blackJack.Ref.push({name: name});
    // $('#playerNameInput').val('');
};

$('#playerNameInput').keypress(function(e) {
  if (e.keyCode == 13) {
    // Call blackJack.addPlayer function here
  }
});

blackJack.Player.prototype.hit = function() {};

blackJack.Player.prototype.stay = function() {};


// Come back to this - is Dealer a 'special' player?
// Or is Dealer its own object that maybe 'inherits'
// Player's properties and functions?
blackJack.Dealer = new Player("Dealer");
