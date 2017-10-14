.auto &!poll {params}={init}
#js >>
if(Params.length > 0) {
  var p = Params.split(";");
  if(p[2] != null) {
    if(Params.slice(p[0].length).indexOf("; ") > -1 || Params.slice(p[0].length).indexOf(" ;") > -1) {
      resp = "Please do __**NOT**__ add spaces **before** OR **after** `;`! **Example:**\n\n**!poll TITLE;OPTION1;OPTION2;ETC**";
    } else {
      var psliced = Params.slice(p[0].length).split(";");
      var names = [":zero:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":keycap_ten:", ":pause_button:"];
      var react = "{reactbot:";
      resp = "__**" + p[0] + "**__\n";
      for(var i = 1; i < psliced.length; i++) {
        resp += "***" + i + ".*** *" + p[i] + "*\n";
        react += names[i] + " ";
      }
      react = react.replace(/\s$/g, "");
      react += "}";
      resp += react;
    }
  } else {
    resp = "You must have at least 2 options to choose from, {user}!";
  }
} else {
  resp = "You must supply the title and 2 or more options! **Example**\n\n**!poll TITLE;OPTION1;OPTION2;ETC**\n\nCurrently supports **11** options.";
}
>>
