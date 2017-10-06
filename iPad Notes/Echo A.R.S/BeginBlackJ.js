.auto BeginBlackJ={init}{arslock}
#js >>
use Bank;
use BlackJ;
var p = JSON.parse(Params);
var bank = JSON.parse(Bank[UserID]);
var cards = ["10", "10", "10", "21", "11", "10", "9", "8", "7", "6", "11", "5", "4", "3", "2", "1"];
var rand1 = Math.floor(Math.random() * cards.length);
var rand2 = Math.floor(Math.random() * cards.length);
BlackJ[UserID + "-dealer"] = 0;
var dealer = JSON.parse(BlackJ[UserID + "-dealer"]);
BlackJ[UserID] = 0;
var mycards = JSON.parse(BlackJ[UserID]);
dealer = dealer + cards[rand1];
var times4 = p * 4;
mycards = mycards + cards[rand2]
if(dealer == 21) {
  resp = "Dealer drew a **" + cards[rand1] + "**! The dealer has automatically won and **" + p + " credits** have been withdrawn from your account.";
  delete BlackJ[UserID + "-dealer"];
  delete BlackJ[UserID];
} else {
  if(mycards == 21) {
    delete BlackJ[UserID + "-dealer"];
    delete BlackJ[UserID];
    bank = bank + (p * 4);
    resp = "You drew a **" + cards[rand2] + "**! You have automatically won and **" + times4 + " credits** have been added to your account.";
  } else {
    resp = "**Dealer's Pull:** " + cards[rand1] + "\n**Your Deal:** " + cards[rand2] + "\n\n*You can either* ***!hit*** *or* ***!pass*** *, <@" + UserID + ">.";
  }
}
>>
