.auto !pass={init}
#js >>
use Bank;
use BlackJ;
if(!BlackJ[UserID]) {
  resp = "You cannot use this command until you start a Blackjack game, <@" + UserID + ">! You can start one by typing **!blackjack**";
} else {
  var bank = JSON.parse(Bank[UserID]);
  var mycards = JSON.parse(BlackJ[UserID]);
  var dealer = JSON.parse(BlackJ[UserID + "-dealer"]);
  var bet = JSON.parse(BlackJ[UserID + "-bet"]);
  if(dealer > mycards) {
    delete BlackJ[UserID];
    delete BlackJ[UserID + "-bet"];
    delete BlackJ[UserID + "-dealer"];
    resp = "The dealer has won! Sorry, <@" + UserID + ">, try again next time.";
  } else {
    if(dealer < mycards) {
      Bank[UserID] = bank + bet*3;
      delete BlackJ[UserID];
      delete BlackJ[UserID + "-bet"];
      delete BlackJ[UserID + "-dealer"];
      resp = "You won, <@" + UserID + ">! Your bet has been multiplied by 2 and added to your account!";
    } else {
      if(dealer == mycards) {
        Bank["UserID"] = bank + bet;
        delete BlackJ[UserID];
        delete BlackJ[UserID + "-bet"];
        delete BlackJ[UserID + "-dealer"];
        resp = "You and the dealer have the same amount, <@" + UserID + ">! Your bet has been given back to you!";
      }
    }
  }
}
>>
