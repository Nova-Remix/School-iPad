.auto &!poll {params}={init}

#js >>

use Poll;

if(Params) {

  var p = Params.split(";");

  if(p[2] != null) {

    var psliced = Params.slice(p[0].length).split(";");

    resp = "__**" + p[0] + "**__\n";

    for (var i = 1; i < psliced.length; i++) {

      resp += "***" + i + ".*** *" + p[i] + "*\n";

    }

    if(psliced.length == 3) {

      resp += "{reactbot::one: :two:}";

    } else {

      if(psliced.length == 4) {

        resp += "{reactbot::one: :two: :three:}";

      } else {

        if(psliced.length == 5) {

          resp += "{reactbot::one: :two: :three: :four:}";

        } else {

          if(psliced.length == 6) {

            resp += "{reactbot::one: :two: :three: :four: :five:}";

          } else {

            if(psliced.length == 7) {

              resp += "{reactbot::one: :two: :three: :four: :five: :six:}";

            } else {

              if(psliced.length == 8) {

                resp += "{reactbot::one: :two: :three: :four: :five: :six: :seven:}";

              } else {

                if(psliced.length == 9) {

                  resp += "{reactbot::one: :two: :three: :four: :five: :six: :seven: :eight:}";

                } else {

                  if(psliced.length == 10) {

                    resp += "{reactbot::one: :two: :three: :four: :five: :six: :seven: :eight: :nine:}";

                  } else {
                    
                    if(psliced.length == 11) {

                    resp += "{reactbot::one: :two: :three: :four: :five: :six: :seven: :eight: :nine: :keycap_ten:}";
                      
                    } else {
                      
                      resp += "{reactbot::one: :two: :three: :four: :five: :six: :seven: :eight: :nine: :keycap_ten: :pause_button:}";
                      
                    }

                  }

                }

              }

            }

          }

        }

      }

    }

  } else {

    resp = "You must have at least 2 options to choose from, {user}!";

  }

} else {

  resp = "You must supply the title and 2 or more options! **Example**\n\n!poll TITLE;OPTION1;OPTION2;ETC\n\nCurrently supports **11** options.";

}
>>
