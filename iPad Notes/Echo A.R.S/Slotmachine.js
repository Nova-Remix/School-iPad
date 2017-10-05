.auto &!slot={init}
#js >>
use Bank;
if(Bank[UserID + "-slimit"]) {
  resp = "You must wait **1 minute** before using this command again!";
} else {
  if(Bank[UserID]) {
    if(Bank[UserID] >= 1000) {
      Bank[UserID + "-slimit"] = "active";
      Bank[UserID] = JSON.parse(Bank[UserID]) - 1000;
      var slot = [":cherries:", ":snowflake:", ":four_leaf_clover:", ":star2:"];
      var rand1 = Math.floor(Math.random() * slot.length);
      var rand2 = Math.floor(Math.random() * slot.length);
      var rand3 = Math.floor(Math.random() * slot.length);
      var rand4 = Math.floor(Math.random() * slot.length);
      var rand5 = Math.floor(Math.random() * slot.length);
      var rand6 = Math.floor(Math.random() * slot.length);
      var rand7 = Math.floor(Math.random() * slot.length);
      var rand8 = Math.floor(Math.random() * slot.length);
      var rand9 = Math.floor(Math.random() * slot.length);
      var a1 = slot[rand1];
      var a2 = slot[rand2];
      var a3 = slot[rand3];
      var a4 = slot[rand4];
      var a5 = slot[rand5];
      var a6 = slot[rand6];
      var a7 = slot[rand7];
      var a8 = slot[rand8];
      var a9 = slot[rand9];
      if(a1 == a2) {
        if(a2 == a3) {
          Bank[UserID] = JSON.parse(Bank[UserID]) + 10000;
          resp = "-.|" + a4 + "|" + a5 + "|" + a6 + "|\n>|" + a1 + "|" + a2 + "|" + a3 + "|<\n-.|" + a7 + "|" + a8 + "|" + a9 + "|\n\nYou won! You have gained **+10,000** credits!";
        } else {
          resp = "-.|" + a4 + "|" + a5 + "|" + a6 + "|\n>|" + a1 + "|" + a2 + "|" + a3 + "|<\n-.|" + a7 + "|" + a8 + "|" + a9 + "|\n\nBetter luck next time!";
        }
      } else {
        resp = "-.|" + a4 + "|" + a5 + "|" + a6 + "|\n>|" + a1 + "|" + a2 + "|" + a3 + "|<\n-.|" + a7 + "|" + a8 + "|" + a9 + "|\n\nBetter luck next time!";
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
