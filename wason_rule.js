<script>
function testFunction() {

  var Num1 = parseInt(document.getElementById("Num_1").value, 10);
  var Num2 = parseInt(document.getElementById("Num_2").value, 10);
  var Num3 = parseInt(document.getElementById("Num_3").value, 10);
  var taskid = parseInt(document.getElementById("task").innerHTML, 10);

  var diff1 = Num2-Num1;
  var diff2 = Num3-Num2;

var tf = document.getElementById("feed2");
//alert(Num1);
//alert(Num2);
//alert(Num3);
  alert(taskid == 1);
if(isNaN(Num1) && isNaN(Num2) && isNaN(Num3))
{
}
else
{
 if(taskid == 1)
  {
    if((Num2>Num1) && (Num3>Num2) && (Num1>=2) && (diff1==2) && (diff2==2) &&
    (Num3<=100) && (Num1%2==0))
    {
      tf.innerHTML = "FIT";
    }
    else
    {
      tf.innerHTML = "DNF";
    }
  }
  else if(taskid == 2)
  {
    if((Num2<Num1) && (Num3<Num2) && (Num3>=-50) && (diff1==-2) && (diff2==-2) &&
    (Num1<=50) && (Num1%2==1))
    {
      tf.innerHTML = "FIT";
    }
    else
    {
      tf.innerHTML = "DNF";
    }
  }
  else
  {
  }
}
document.getElementById("Num_1").readOnly = true;
document.getElementById("Num_2").readOnly = true;
document.getElementById("Num_3").readOnly = true;
}
</script>
