.auto &{:}!(?i)(heist play|hplay)={init}
#js >>
use Bank;
use Heist;
var players = Heist["Players"];
var listplayers = Heist["PlayerIDs"];
if(Bank[UserID]) {
if(Bank[UserID] < 100) {
  resp = "You must have at least **100 credits**, <@" + UserID + ">";
} else {
  if(Heist["in|progress"]) {
    resp = "A game is already in session, <@" + UserID + ">";
  } else {
    if(players) {
      if(Heist["PlayerIDs"].indexOf(UserID) > -1) {
        resp = "You’re already in the game, <@" + UserID + ">!";
      } else {
        Heist["Players"]++;
        Heist["PlayerIDs"] = Heist["PlayerIDs"].slice(0, -1) + ', "' + UserID + '"]';
        Heist["PlayerNames"] = Heist["PlayerNames"].slice(0, -1) + ', "' + Username + '"]';
        resp = "You have joined the Heist, <@" + UserID + ">.";
      }
    } else {
      Heist["Players"] = 1;
      Heist["PlayerIDs"] = '["' + UserID + '"]';
      Heist["PlayerNames"] = '["' + Username + '"]';
      resp = "<@" + UserID + "> is planning a Heist. Type `!heist play` to join!";
    }
  }
}
} else {
  resp = "You don't have a bank account yet, {user}! You can get one by typing **!bank register**";
}
>>
{ars:NoSpam}
