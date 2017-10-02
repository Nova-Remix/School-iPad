.auto &.tst {params}={init}
#js >>
var p = Params.split(",");
if(p[0].indexOf("(") == -1) {
  var num1 = p[0];
  var num2 = p[1].slice(0, -1);
  var num3 = p[2].slice(1);
  var num4 = p[3];
  var x = num1 - num3;
  var y = num2 - num4;
  var pointA = "(" + num1 + ", " + num2 + ")";
  var pointB = "(" + num3 + ", " + num4 + ")";
  var reduced = y/x;
  resp = "**Point A** " + pointA + "\n**Point B** " + pointB + "\n**Y Value** " + y + "\n**X Value** " + x + "\n**Fraction** " + y + "/" + x + "\n**Reduced** " + reduced;
} else {
  var num1 = p[0].slice(1);
  var num2 = p[1].slice(0, -1);
  var num3 = p[2].slice(2);
  var num4 = p[3].slice(0, -1);
  resp = "Number 1 = " + num1 + "\nNumber2 = " + num2 + "\nNumber3 = " + num3 + "\nNumber4 = " + num4;
}
>>
