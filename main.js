var blackJack = {};

blackJack.Ref = new Firebase('https://scorching-inferno-9253.firebaseio.com/');

$('#playerNameInput').keypress(function(e) {
  if (e.keyCode == 13) {
    var playerName = $('#playerNameInput').val();
    blackJack.Ref.push({name: name});
    $('#playerNameInput').val('');
  }
});
