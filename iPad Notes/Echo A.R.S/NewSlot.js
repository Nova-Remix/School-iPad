.auto &!slot={init}
#js >>
use Bank;
if(Bank[UserID + "-slimit"]) {
  resp = "You must wait **10 seconds** before using this command again!";
} else {
  if(Bank[UserID]) {
    if(Bank[UserID] >= 1000) {
      Bank[UserID + "-slimit"] = "active";
      Bank[UserID] = JSON.parse(Bank[UserID]) - 1000;
      var slot = [":cherries:", ":snowflake:", ":four_leaf_clover:", ":sunny:", ":sunflower:", ":cyclone:", ":hearts:", ":mushroom:", ":six:", ":two:", ":cookie:", ":sweat_drops:"];
      var rand1 = Math.floor(Math.random() * slot.length);
      var rand2 = Math.floor(Math.random() * slot.length);
      var rand3 = Math.floor(Math.random() * slot.length);
      var jackpot = 1000 * 2500;
      var a1 = slot[rand1];
      var a2 = slot[rand2];
      var a3 = slot[rand3];
      if(a1 == a2 && a2 == a3 || a1 == a2 || a2 == a3) {
        Bank[UserID] = JSON.parse(Bank[UserID]) + 10000;
        resp = ">|" + a1 + "|" + a2 + "|" + a3 + "|<\n\nYou won! You have gained **+10,000** credits!";
      } else {
        if(a1 == ":two:" && a2 == ":six:" || a2 == ":two:" && a3 == ":six:") {
          Bank[UserID] = JSON.parse(Bank[UserID]) + 5000;
          resp = ">|" + a1 + "|" + a2 + "|" + a3 + "|<\n\n**2 and 6**! You have earned **4,000 credits**, <@" + UserID + ">!";
        } else {
          if(a1 == ":two:" && a2 == ":two:" && a3 == ":six:") {
            Bank[UserID] = JSON.parse(Bank[UserID]) + jackpot;
            resp = ">|" + a1 + "|" + a2 + "|" + a3 + "|<\n\n**2-2-6**! You have won the lottery, <@" + UserID + ">! **+" + jackpot + " credits**";
          } else {
            resp = ">|" + a1 + "|" + a2 + "|" + a3 + "|<\n\nBetter luck next time!";
          }
        }
      }
    } else {
      resp = "You must have at least **1000** credits!";
    }
  } else {
    resp = "You need to have a Bank Account first! You can create one by typing **!bank register**";
  }
}
>>
{ars:DeleteSTimer}
