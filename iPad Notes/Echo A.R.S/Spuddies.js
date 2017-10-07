&.heist={init}
#js >>
use money;
var randheist = Math.floor(Math.random() * 20) + 1;
var randsuccess = Math.floor(Math.random() * 20) +1;
if(UserID === RawUserID) {
	resp = "You can't run a heist on your own!  Try tagging your partner in crime with this command!";
} else {
  if(randheist <= 6) {
	  if(randsuccess >= 8) {
			var cash = Math.floor(Math.random() * 600) + 200;
			resp = Username + " and " + RawUsername + " were successful in robbing a grocery store! They've each earned " + cash + " cash!";
			money[UserID + "-cash"] = JSON.parse(money[UserID] + "-cash"]) + cash;
			money[RawUserID + "-cash"] = JSON.parse(money[RawUserID + "-cash"]) + cash;
		} else {
			var cash = Math.floor(Math.random() * 190) + 10;
			resp = Username + " and " + RawUsername + " sucked at knocking over that grocery store.  They've lost " + cash + " each.";
			money[UserID + "-cash"] = JSON.parse(money[UserID + "-cash"]) - cash;
			money[RawUserID + "-cash"= JSON.parse(money[RawUserID + "-cash"]) - cash;
		}
	} else {
		if(randheist >= 17) {
			if(randsuccess >= 10) {
				var cash = Math.floor(Math.random() * 8900) + 1100;
				resp = Username + " and " + RawUsername + " were successful in robbing a bank! They've each earned " + cash " cash!";
				money[UserID + "-cash"] = JSON.parse(money[UserID] + "-cash"]) + cash;
				money[RawUserID + "-cash"] = JSON.parse(money[RawUserID + "-cash"]) + cash;
			} else {
				var cash = Math.floor(Math.random() *300) + 100;
				resp = Username + " and " + RawUsername + " were great at pretending to be thieves.  To bad the teller didn't buy the act.  They've each lost " + cash + " cash.";
				money[UserID + "-cash"] = JSON.parse(money[UserID + "-cash"]) - cash;
				money[RawUserID + "-cash"= JSON.parse(money[RawUserID + "-cash"]) - cash;
			}
		}
	} else {
		if(randsuccess >= 6) {
			var cash = Math.floor(Math.random() * 190) + 10;
			resp = Username + " and " + RawUsername + " succeeded in " + "{randlist:" + "stealing an old lady's purse,stealing candy from a baby,beating up some poor homeless guy,dealing drugs, robbing a house,extorting money from an old guy,stealing a car,snuggling guns,robbing a jewelry store,robing a pharmacy" + "}" + "!" + "\n" + "They have each earned " + cash + " cash!";
			money[UserID + "-cash"] = JSON.parse(money[UserID] + "-cash"]) + cash;
			money[RawUserID + "-cash"] = JSON.parse(money[RawUserID + "-cash"]) + cash;
		} else {
			var cash = Math.floor(Math.random() * 190) + 10;
			resp = Username + " and " + RawUsername + " sucked at any basic thievery.  Such terrible crooks.";
			money[UserID + "-cash"] = JSON.parse(money[UserID + "-cash"]) - cash;
			money[RawUserID + "-cash"= JSON.parse(money[RawUserID + "-cash"]) - cash;
            }
         
>>
