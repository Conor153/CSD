<?php

$team=$_GET['team'];

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"gaanfl2024");
mysqli_query($connection,"SET NAMES utf8");

$result = mysqli_query($connection,"SELECT DISTINCT * FROM results WHERE team1ID=$team OR team2ID=$team"); 

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"results\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>