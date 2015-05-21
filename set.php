<?php

$con = mysql_connect("localhost","root","sw960602");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// some code
mysql_select_db("studentinfo", $con);
mysql_query("set names utf8");

mysql_query("CREATE TABLE IF NOT EXISTS studentunion(IDnum VARCHAR(22) NOT NULL,
													 sex TINYTEXT,name TEXT,QQ VARCHAR(15),
													 phone VARCHAR(24) NOT NULL,info LONGTEXT)");

$sql="INSERT INTO studentunion (IDnum,name,QQ,phone,info,sex)
VALUES
('$_POST[ID]','$_POST[name]','$_POST[QQ]','$_POST[Phone]','$_POST[UserInfo]','$_POST[sex]')";

if (!mysql_query($sql,$con))
  {
  die('ERROR: ' . mysql_error());
  }

mysql_close($con);


?>
<script>url="leavePage.html";window.location.href=url;</script>


