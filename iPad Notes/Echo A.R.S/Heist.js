.auto &{:}!(?i)(heist play|hplay)={init}
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
      Heist["Players"]++;
      Heist["PlayerIDs"] = Heist["PlayerIDs"].slice(0, -1) + ', ' + UserID + '"]';
      resp = "You have joined the Heist, <@" + UserID + ">.";
    } else {
      Heist["Players"] = 1;
      Heist["PlayerIDs"] = '["' + UserID + '"]';
      resp = "<@" + UserID + "> is planning a Heist. Type `!heist play` to join!";
    }
  }
}
>>
{ars:BeginGame}
