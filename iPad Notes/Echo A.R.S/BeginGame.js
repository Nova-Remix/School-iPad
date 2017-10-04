.auto BeginGame={init}{arslock}
{sleep:10s}
#js >>
use Bank;
use Heist;
var listplayers = Heist["PlayerIDs"];
var players = Heist["Players"];
if(players == 1) {
  Heist["Players"] = null;
  Heist["PlayerIDs"] = null;
  resp = "**Not enough players have joined the game!**";
} else {
  if(players == 2) {
    Heist["Game"] = "goblin";
    resp = "**Beginning Goblin Hut...**";
  } else {
    if(players <= 6 && players > 2) {
      Heist["Game"] = "troop";
      resp = "**Beginning Troop Depot...**";
    } else {
      if(players <= 16 && players > 6) {
        resp = "**Beginning Gold Vault...**";
      } else {
        if(players <= 72 && players > 16) {
          Heist["Game"] = "gem";
          resp = "**Beginning Gem Mines...**";
        }
      }
    }
  }
}
>>
