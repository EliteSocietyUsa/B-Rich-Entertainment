<?php  // rnfunctions.php

$dbHost 	= 'mysql.brichentboston.com';  // Database Host
$dbName 	= 'brichtestcms';  			   // Database Name
$dbUser 	= 'shak1';		   			   // Database Username
$dbPassword = 'El!zabeth6!7';			   // Database Password
$appname	= 'Test CMS';				   // Website Title

mysql_connect($dbHost, $dbUser, $dbPassword) or die(mysql_error());
mysql_select_db($dbName) or die(mysql_error());

function createTable($name, $query)
{

	if (tableExists($name))  //  Checks to see whether table exists
	{
		echo "Table '$name' already exists<br />";
	}
	else  //  Creates table if it does not already exist
	{
		queryMysql("CREATE TABLE $name($query)");
		echo "Table '$name' created<br />";
	}
}

function tableExists($name)
{
	$result = queryMysql("SHOW TABLES LIKE '$name'");
	return mysql_num_rows($result);
}

function queryMysql($query)
{
	$result = mysql_query() or die(mysql_error());
	return $result;
}

function destroySession()
{
	$_SESSION=array();

	if (session_id() != "" || isset($_COOKIE[session_name()]))
		setcookie(session_name(), '', time()-2592000, '/');

	session_destroy();
}

function showProfile($user)
{
	if (file_exists("$user.jpg"))
			echo "<img src='$user.jpg' border='1' align='left' />";

	$result = queryMysql("SELECT * FROM rnprofiles WHERE user='$user'");

	if (mysql_num_rows($result))
	{
		$row = mysql_fetch_row($result);
		echo stripcslashes($row[1]) . "<br clear=left /><br />";
	}
}

?>