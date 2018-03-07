<script>
function testFunction() {

  var Num1 = parseInt(document.getElementById("Num_1").value, 10);
  var Num2 = parseInt(document.getElementById("Num_2").value, 10);
  var Num3 = parseInt(document.getElementById("Num_3").value, 10);


  var diff1 = Num2-Num1;
  var diff2 = Num3-Num2;

var tf = document.getElementById("feed2");
//alert(Num1);
//alert(Num2);
//alert(Num3);
if(isNaN(Num1) && isNaN(Num2) && isNaN(Num3))
{
}
else
{
 if ((Num2>Num1) && (Num3>Num2) && (Num1>=2) && (diff1==2) && (diff2==2) &&
 (Num3<=100) && (Num1%2==0))
 {
  tf.innerHTML = "FIT";
 }
 else
 {
  tf.innerHTML = "DNF";
 }
}
document.getElementById("Num_1").readOnly = true;
document.getElementById("Num_2").readOnly = true;
document.getElementById("Num_3").readOnly = true;
}
</script>
