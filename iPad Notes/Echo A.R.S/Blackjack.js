.auto &!blackjack {params}={init}
#js >>
if(Params.length <= 0) {
  resp = "You must supply a bet, <@" + UserID + ">!";
} else {
  use BlackJ;
  use Bank;
  var bank = JSON.parse(Bank[UserID]);
  var p = JSON.parse(Params);
  if(bank) {
    if(p > 1000 || p < 100) {
      resp = "Your bet must be between **100** and **1,000** credits, <@" + UserID + ">!";
    } else {
      if(p <= bank) {
        Bank[UserID] = bank - p;
      } else {
        resp = "You don't have that many credits in your bank, <@" + UserID + ">! Please try again when you have enough. Your Credits: **" + bank + "**\nYour Bet: **" + p + " credits**";
      }
    }
  } else {
    resp = "You need to have a Bank Account first! You can create one by typing **!bank register**";
  }
}
>>
{ars:BeginGame}
