<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"music");
$result = mysqli_query($connection,"SELECT * FROM artist");

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"artist\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>