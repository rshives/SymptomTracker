<?php
// Connect to the DB
$dbServer = "p41mysql123.secureserver.net";
$dbuser = "symptomtracker";
$dbpass = "G@pher6576";
$db = "symptomtracker";

$conn = mysql_connect($dbServer, $dbuser, $dbpass);

if(!$conn)
	die("Error connecting to the DB: ".mysql_error());

if(!mysql_select_db($db, $conn))
	die("Error selecting DB: ".mysql_error());
	
$insert = 'INSERT INTO q2interfere (date, locdLevel, whaLevel, whlLevel, lossBalLevel, numbTingLevel, 
									bladBowelLevel, fatigueLevel, diffThinkForgetLevel, 
									chokeCoughLevel, stiffLevel, visionLevel, painLevel, sadLevel, 
									frustLevel, stopWantedLevel, usuallyAbleTodayLevel, descTodayLevel, 
									descHealthTodayLevel, compYestHealthLevel, ldtPhysDemandTaskLevel, 
									ltdGripLevel, ltdCarryLevel, bothMovingIndoorsLevel,
									bothTremorsLevel, bothBodLevel, bothDependOthersLevel, bothBalLevel, 
									bothClumsyLevel, bothStiffLevel, bothHALLevel, bothSpasmsLevel,
									wkLimitSocActLevel, wkStuckHomeLevel, wkDiffHandsLevel, wkTimeWorkLevel,
									wkProbsTransLevel, wkThingsTakeLongerLevel, wkDiffSpontLevel, wkToiletLevel,
									wkUnwellLevel, wkSleepLevel, wkFatigueLevel, wkWorriesLevel, wkAnxiousLevel,
									wkIrritableLevel, wkConcentrationLevel, wkConfidenceLevel, wkDepressionLevel,
									txtAnyElse, txtOther)';
$values = ' VALUES (';

$values = $values . $_POST["pfDate"];
$values = $values . ",";
	
$values = $values . $_POST["pfA1"];
$values = $values . ",";

$values = $values . $_POST["pfA2"];
$values = $values . ",";

$values = $values . $_POST["pfA3"];
$values = $values . ",";
	
$values = $values . $_POST["pfA4"];
$values = $values . ",";
	
$values = $values . $_POST["pfA5"];
$values = $values . ",";

$values = $values . $_POST["pfA6"];
$values = $values . ",";

$values = $values . $_POST["pfA7"];
$values = $values . ",";

$values = $values . $_POST["pfA8"];
$values = $values . ",";

$values = $values . $_POST["pfA9"];
$values = $values . ",";

$values = $values . $_POST["pfA10"];
$values = $values . ",";

$values = $values . $_POST["pfA11"];
$values = $values . ",";

$values = $values . $_POST["pfA12"];
$values = $values . ",";

$values = $values . $_POST["pfA13"];
$values = $values . ",";

$values = $values . $_POST["pfA14"];
$values = $values . ",";

$values = $values . $_POST["pfA15"];
$values = $values . ",";
	
$values = $values . $_POST["pfA16"];
$values = $values . ",";

$values = $values . $_POST["pfA17"];
$values = $values . ",";

$values = $values . $_POST["pfA18"];
$values = $values . ",";

$values = $values . $_POST["pfA19"];
$values = $values . ",";

$values = $values . $_POST["pfA20"];
$values = $values . ",";

$values = $values . $_POST["pfA21"];
$values = $values . ",";

$values = $values . $_POST["pfA22"];
$values = $values . ",";

$values = $values . $_POST["pfA23"];
$values = $values . ",";

$values = $values . $_POST["pfA24"];
$values = $values . ",";

$values = $values . $_POST["pfA25"];
$values = $values . ",";

$values = $values . $_POST["pfA26"];
$values = $values . ",";

$values = $values . $_POST["pfA27"];
$values = $values . ",";

$values = $values . $_POST["pfA28"];
$values = $values . ",";

$values = $values . $_POST["pfA29"];
$values = $values . ",";

$values = $values . $_POST["pfA30"];
$values = $values . ",";

$values = $values . $_POST["pfA31"];
$values = $values . ",";

$values = $values . $_POST["pfA32"];
$values = $values . ",";

$values = $values . $_POST["pfA33"];
$values = $values . ",";

$values = $values . $_POST["pfA34"];
$values = $values . ",";

$values = $values . $_POST["pfA35"];
$values = $values . ",";

$values = $values . $_POST["pfA36"];
$values = $values . ",";

$values = $values . $_POST["pfA37"];
$values = $values . ",";

$values = $values . $_POST["pfA38"];
$values = $values . ",";

$values = $values . $_POST["pfA39"];
$values = $values . ",";

$values = $values . $_POST["pfA40"];
$values = $values . ",";

$values = $values . $_POST["pfA41"];
$values = $values . ",";

$values = $values . $_POST["pfA42"];
$values = $values . ",";

$values = $values . $_POST["pfA43"];
$values = $values . ",";

$values = $values . $_POST["pfA44"];
$values = $values . ",";

$values = $values . $_POST["pfA45"];
$values = $values . ",";

$values = $values . $_POST["pfA46"];
$values = $values . ",";

$values = $values . $_POST["pfA47"];
$values = $values . ",";

$values = $values . $_POST["pfA48"];
$values = $values . ",";

$values = $values . "'";
$values = $values . $_POST["pfA49"];
$values = $values . "'";
$values = $values . ",";

$values = $values . "'";
$values = $values . $_POST["pfA50"];
$values = $values . "'";

$values = $values . ")";

$queryResult = mysql_query($insert.$values);

if(!$queryResult)
	die("Error adding record: ".$insert.$values." ".mysql_error());
	
mysql_close($conn);

echo $_POST["pfA1"];
echo $_POST["pfA2"];
echo $_POST["pfA3"];
echo $_POST["pfA4"];
echo $_POST["pfA5"];
echo $_POST["pfA6"];
echo $_POST["pfA7"];
echo $_POST["pfA8"];
echo $_POST["pfA9"];
echo $_POST["pfA10"];
echo $_POST["pfA11"];
echo $_POST["pfA12"];
echo $_POST["pfA13"];
echo $_POST["pfA14"];
echo $_POST["pfA15"];
echo $_POST["pfA16"];
echo $_POST["pfA17"];
echo $_POST["pfA18"];
echo $_POST["pfA19"];
echo $_POST["pfA20"];
echo $_POST["pfA21"];
echo $_POST["pfA22"];
echo $_POST["pfA23"];
echo $_POST["pfA24"];
echo $_POST["pfA25"];
echo $_POST["pfA26"];
echo $_POST["pfA27"];
echo $_POST["pfA28"];
echo $_POST["pfA29"];
echo $_POST["pfA30"];
echo $_POST["pfA31"];
echo $_POST["pfA32"];
echo $_POST["pfA33"];
echo $_POST["pfA34"];
echo $_POST["pfA35"];
echo $_POST["pfA36"];
echo $_POST["pfA37"];
echo $_POST["pfA38"];
echo $_POST["pfA39"];
echo $_POST["pfA40"];
echo $_POST["pfA41"];
echo $_POST["pfA42"];
echo $_POST["pfA43"];
echo $_POST["pfA44"];
echo $_POST["pfA45"];
echo $_POST["pfA46"];
echo $_POST["pfA47"];
echo $_POST["pfA48"];
echo $_POST["pfA49"];
echo $_POST["pfA50"];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/2000/REC-xhtml1-20000126/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>C and R Solutions Symptom Tracker</title>
		<link href="outlooksummary.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript" src="main-page.js"></script>		
	</head>
	<body onload="loadPage();">
		<div id=wrapper>
			<div id="header">
				<a href="http://www.candrsolutions.net/"><img src="http://www.candrsolutions.net/images/candrsolutionsblue.gif" alt="Banner" border=0/></a>
				<br/>
				<br/>
				<ul id="headNav">
					<li><a href="mailto://shivesster@gmail.com">Email Me</a></li>
					<li>|</li>
					<li>Last updated May 22th, 2008</li>
				</ul>
			</div>
	
			<div id="main-body">
 				<div id="info">
					<h2>Info</h2>
					<p>This is the my MS Symptom Diary.  I can check off symptoms on a daily basis and store them on the server.  Whenever I want to I can create reports based on the data.</p>
		
					<h2>Links</h2>
					<ul id="links">
						<li><a href="http://www.candrsolutions.net/resume.html">My Resume</a></li>
						<li><a href="http://www.google.com/" target="_blank">Google</a></li>
						<li><a href="http://richards-ramblings.blogspot.com/">My Blog</a></li>
						<li><a href="http://rshives.backpackit.com/">Backpack</a></li>
						<li><a href="http://www.techmeme.com/" target="_blank">Techmeme</a></li>
						<li><a href="http://friendfeed.com/" target="_blank">Friend Feed</a></li>
						<li><a href="http://www.books24x7.com/login.asp?ic=0">Books 24x7</a></li>
						<li><a href="https://mycampus.phoenix.edu/">University of Phoenix</a></li>
					</ul>
		
					<h2>Family</h2>
					<img src="http://www.candrsolutions.net/images/032508-austin.jpg" alt="Austin" width="200px"/>
				</div>
				<div id="content">
				<div id="contentSections">
						<div id="Q1">
							<h1>The Database has been updated.</h1>
							<a href="http://www.candrsolutions.net/test/SymptomTracker/index.html">Return to the main page</a>
						</div>
				</div>
			</div>
		</div>
	</body>
</html>