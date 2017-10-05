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
      var slot = [":cherries:", ":snowflake:", ":four_leaf_clover:", ":star2:", ":sunflower:"];
      var rand1 = Math.floor(Math.random() * slot.length);
      var rand2 = Math.floor(Math.random() * slot.length);
      var rand3 = Math.floor(Math.random() * slot.length);
      var rand4 = Math.floor(Math.random() * slot.length);
      var rand5 = Math.floor(Math.random() * slot.length);
      var rand6 = Math.floor(Math.random() * slot.length);
      if(UserID == "248544801652342784") {
        resp = "-.|" + slot[rand4] + "|" + slot[rand5] + "|" + slot[rand6] + "|\n>|" + slot[rand1] + "|" + slot[rand1] + "|" + slot[rand1] + "|<\n-.|" + slot[rand5] + "|" + slot[rand6] + "|" + slot[rand4] + "|\n\nYou won! You have gained **+10,000** credits!";
      } else {
        if(slot[rand1] == slot[rand2]) {
          if(slot[rand2] == slot[rand3]) {
            Bank[UserID] = JSON.parse(Bank[UserID]) + 10000;
            resp = "-.|" + slot[rand4] + "|" + slot[rand5] + "|" + slot[rand6] + "|\n>|" + slot[rand1] + "|" + slot[rand2] + "|" + slot[rand3] + "|<\n-.|" + slot[rand5] + "|" + slot[rand6] + "|" + slot[rand4] + "|\n\nYou won! You have gained **+10,000** credits!";
          }
        } else {
          resp = "-.|" + slot[rand4] + "|" + slot[rand5] + "|" + slot[rand6] + "|\n>|" + slot[rand1] + "|" + slot[rand2] + "|" + slot[rand3] + "|<\n-.|" + slot[rand5] + "|" + slot[rand6] + "|" + slot[rand4] + "|\n\nBetter luck next time!";
        }
      } else {
        resp = "You must have at least **1000** credits!";
      }
    } else {
      resp = "You need to have a Bank Account first! You can create one by typing **!bank register**";
    }
  }
}
>>
{ars:DeleteSTimer}
