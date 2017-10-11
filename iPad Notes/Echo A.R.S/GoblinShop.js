.auto GoblinShop={init}{arslock}
#js >>
use Heist;
use Bank;
var pNames = JSON.parse(Heist["PlayerNames"]);
var pIDs = JSON.parse(Heist["PlayerIDs"]);
var bad1 = ["'GRENADE OUT!' - <@" + pIDs[0] + "> is now sleeping with the fishes.```" + pNames[0] + " dropped out of the game.```", "The crew missed a CCTV camera that identified <@" + pIDs[0] + "> and got caught.```" + pNames[0] + " has dropped out of the game!```"];
var bad2 = ["<@" + pIDs[1] + "> held off the police while the crew was making their getaway.```" + pNames[1] + " dropped out of the game.```", "The crew missed a CCTV camera that identified <@" + pIDs[1] + "> and got caught.```" + pNames[1] + " has dropped out of the game!```"];
var good1 = ["<@" + pIDs[0] + "> cut through the safe like butter. **+25** credits."];
var good2 = ["<@" + pIDs[1] + "> had the car gassed up and ready to go. **+25** credits."];
var choices1 = [bad1,bad1,bad1,bad1,good1];
var choices2 = [bad2,bad2,bad2,bad2,good2];
var user1resp = choices1[Math.floor(Math.random() * choices1.length)];
var user2resp = choices2[Math.floor(Math.random() * choices2.length)];
randuser1 = Math.floor(Math.random() * user1resp.length);
randuser2 = Math.floor(Math.random() * user2resp.length);
var r1 = user1resp[randuser1];
var r2 = user2resp[randuser2];
resp = r1 + "\n\n" + r2;
resp += "\n\n**The Heist is now over.** Distributing player results... ";
var win = Math.floor(Math.random() * Heist["Goblin-Shop"]);
var gShop = JSON.parse["Goblin-Shop"];
if(r1 == good1) {
  Bank[pIDs[0]] = JSON.parseBank[pIDs[0]] + win;
Heist["Goblin-Shop"] = gShop - win;
resp += pNames[0] + " has received **" + win + "** credits.";
} else {
  if(r2 == good2) {
    Bank[pIDs[1]] = JSON.parseBank[pIDs[1]] + win;
  Heist["Goblin-Shop"] = gShop - win;
  resp += pNames[1] + " has received **" + win + "** credits.";
  } else {
    resp += "\n**Nobody made it out safe!**";
  }
}
delete Heist["PlayerNames"];
delete Heist["PlayerIDs"];
delete Heist["Players"];
delete Heist["Game"];
>>
