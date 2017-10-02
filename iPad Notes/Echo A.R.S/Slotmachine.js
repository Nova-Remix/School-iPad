use Bank;
use Slots;
if(Bank[UserID]) {
  if(Bank[UserID] >= 1000) {
    var slot = [":cherries:", ":snowflake:", ":four_leaf_clover:", ":star2:", ":one:", ":sunflower:"];
    var rand = Math.floor(Math.random() * slot.length);
    var a1 = rand;
    var a2 = rand;
    var a3 = rand;
    resp = ">" + a1 + "|" + a2 + "|" + a3 + "<";
    if(a1 == a2) {
      if(a2 == a3) {
        Bank[UserID] = JSON.parse(Bank[UserID]) + 3000;
        resp = "You won! You have gained **+3000** credits!";
      } else {
        resp = "Better luck next time!";
      }
    } else {
      resp = "Better luck next time!";
    }
  } else {
    resp = "You must have at least **1000** credits!";
  }
} else {
  resp = "You need to have a Bank Account first! You can create one by typing **!bank register**";
}
