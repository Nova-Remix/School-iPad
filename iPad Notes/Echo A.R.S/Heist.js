.auto !heist play={init}
#js >>
use Bank;
use Heist;
var players = Heist["Players"];
var listplayers = Heist["PlayerIDs"];
if(Bank[UserID] < 100) {
  resp = "You must have at least **100 credits**, <@" + UserID + ">";
} else {
  if(Heist["in|progress"]) {
    resp = "A game is already in session, <@" + UserID + ">";
  } else {
    if(players) {
      players++
      listplayers = listplayers.slice(0, -1) + ', ' + UserID + '"]';
      resp = "You have joined the Heist, <@" + UserID + ">.";
    } else {
      players = 1;
      listplayers = '["' + UserID + '"]';
      resp = "<@" + UserID + "> is planning a heist. Type `!heist play` to join!";
    }
  }
}
