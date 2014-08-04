<?php
// Connect to the DB
$dbServer = "p41mysql123.secureserver.net";
$dbuser = "symptomtracker";
$dbpass = "G@pher6576";
$db = "symptomtracker";

$symp1 = $_POST["symp1"];
$symp2 = $_POST["symp2"];
$symp3 = $_POST["symp3"];
$symp4 = $_POST["symp4"];
$symp5 = $_POST["symp5"];
$symp6 = $_POST["symp6"];
$symp7 = $_POST["symp7"];
$symp8 = $_POST["symp8"];
$symp9 = $_POST["symp9"];
$symp10 = $_POST["symp10"];
$symp11 = $_POST["symp11"];
$symp12 = $_POST["symp12"];
$symp13 = $_POST["symp13"];
$symp14 = $_POST["symp14"];
$date = $_POST["Q1Date"];

$conn = mysql_connect($dbServer, $dbuser, $dbpass);

if(!$conn)
	die("Error connecting to the DB: ".mysql_error());

if(!mysql_select_db($db, $conn))
	die("Error selecting DB: ".mysql_error());
	
$insert = 'INSERT INTO q1symptoms (locd, whArms, whLegs, ulBal, numbTing, bladBowel, Fatigue, cogForget, chokeCough, stiffSpasm, vision, pain, sad, frustrated, Date)';
$values = ' VALUES (';

if($symp1 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";

if($symp2 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";

if($symp3 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp4 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp5 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp6 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp7 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp8 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp9 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp10 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp11 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp12 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp13 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
	
if($symp14 != "0")
	$values = $values . "1,";
else
	$values = $values . "0,";
		
if($date != "")
	$values = $values . $date;
else
	$values = $values . "0";

$values = $values . ")";

$queryResult = mysql_query($insert.$values);

if(!$queryResult)
	die("Error adding record: ".$insert.$values." ".mysql_error());
	
mysql_close($conn);
?>