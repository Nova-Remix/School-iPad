.auto !hit={init}
#js >>
use BlackJ;
use Bank;
if(!BlackJ[UserID]) {
  resp = "You cannot use this command until you start a Blackjack game, <@" + UserID + ">! You can start one by typing **!blackjack**";
} else {
  var bank = JSON.parse(Bank[UserID]);
  var dealer = JSON.parse(BlackJ[UserID + "-dealer"]);
  var mycards = JSON.parse(BlackJ[UserID]);
  var p = JSON.parse(BlackJ[UserID + "-bet"]);
  var cards = ["10", "10", "10", "21", "11", "10", "9", "8", "7", "6", "11", "5", "4", "3", "2", "1"];
  var rand3 = Math.floor(Math.random() * cards.length);
  var rand4 = Math.floor(Math.random() * cards.length);
  BlackJ[UserID] = mycards + JSON.parse(cards[rand4]);
  BlackJ[UserID + "-dealer"] = dealer + JSON.parse(cards[rand3]);
  if(mycards > 21) {
    delete BlackJ[UserID];
    delete BlackJ[UserID + "-dealer"];
    resp = "You got a bust, <@" + UserID + ">! You lost!";
  } else {
    if(mycards == 21) {
      delete BlackJ[UserID];
      delete BlackJ[UserID + "-dealer"];
      Bank[UserID] = bank + p*3;
      resp = "Your total is **21**, <@" + UserID + ">! Your bet has been multiplied by 2 and was sent to your bank!";
    } else {
      if(dealer > 21) {
        delete BlackJ[UserID];
        delete BlackJ[UserID + "-dealer"];
        Bank[UserID] = bank + p*3;
        resp = "The dealer got a bust, <@" + UserID + ">! Your bet has been multiplied by 2 and was sent to your bank!";
      } else {
        if(dealer == 21) {
          delete BlackJ[UserID];
          delete BlackJ[UserID + "-dealer"];
          resp = "The dealer's total is **21**! **" + p + "credit**s were taken from your bank, <@" + UserID + ">.";
        } else {
          resp = "**Dealer's Total:** " + BlackJ[UserID + "-dealer"] + "\n**Your Total:** " + BlackJ[UserID] + "\n\n*You can either* ***!hit*** *or* ***!pass*** *, <@" + UserID + ">.*";
        }
      }
    }
  }
}
>>
