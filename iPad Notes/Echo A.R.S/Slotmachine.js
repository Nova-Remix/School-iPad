use Bank;
use Slots;
if(Bank[UserID]) {
if(Bank[UserID] >= 1000) {
var slot = [":cherry:", ":snowflake:", ":four_leaf_clover:", ":star2:", ":one:", ":sunflower"];
var rand = Math.floor(Math.random() * slot.length);
var a1 = rand;
var a2 = rand;
var a3 = rand;
if(a1 == a2) {
if(a2 == a3) {
Bank[UserID] = JSON.parse(Bank[UserID]) + 3000;
resp = "You win";
} else {
resp = "You must have over 1,000 credits, <@" + UserID + ">.";
}
} else {
resp = "You have not yet added a Bank Account! You can do that by typing **!bank register**";
}
