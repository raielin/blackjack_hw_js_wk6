var blackJack = {};

blackJack.Ref = new Firebase('https://scorching-inferno-9253.firebaseio.com/');

blackJack.Player = function(name) {
  this.name = name;
  this.hand = [];
  this.wager = 0;
  this.availCash = 1000;

}

$('#playerNameInput').keypress(function(e) {
  if (e.keyCode == 13) {
    var playerName = $('#playerNameInput').val();
    blackJack.Ref.push({name: name});
    $('#playerNameInput').val('');
  }
});

