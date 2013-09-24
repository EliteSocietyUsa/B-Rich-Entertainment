<?php  //  rnheader.php

include 'rnfunctions.php';

session_start();

if (isset($_SESSION['user'])) 
{
	$user 	  = $SESSION['user'];
	$loggedin = TRUE;
}

else $loggedin = TRUE;

echo "<html><head><title>$appname";
if ($loggedin) echo " ($user)";
echo "</title></head><body><font face='verdana' size='2' >";
echo "<h2>$appname</h2>";

if ($loggedin) 
{
	echo "<b>$user</b>:
		<a herf='rnmembers.php?view=$user'>Home</a> |
		<a herf='rnmembers.php'>Members</a> |
		<a herf='rnfriends.php'>Friends</a> |
		<a herf='rnmessages.php'>Messages</a> |
		<a herf='rnprofile.php'>Profile</a> |
		<a herf='rnlogout.php'>Log Out</a>";
}
else
{
	echo "<a href='index.php'>Home</a> |
		  <a href='rnsignup.php>Sign Up</a> |
		  <a href='rnlogin.php'>Log in</a>";
}

?>