<?php
$ID = $_POST['ID'];
$name = $_POST['name'];
$QQ = $_POST['QQ'];
$Phone = $_POST['Phone'];
$userinfo = $_POST['UserInfo'];
$sex = $_POST['sex'];
$pageID = $_POST['pageID'];
$con = mysql_connect("localhost","root","sw960602");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// some code
mysql_select_db("studentinfo", $con);
mysql_query("set names utf8");

mysql_query("CREATE TABLE IF NOT EXISTS $pageID(IDnum VARCHAR(22) NOT NULL,
													 sex TINYTEXT,name TEXT,QQ VARCHAR(15),
													 phone VARCHAR(24) NOT NULL,info LONGTEXT)");

$sql="INSERT INTO $pageID (IDnum,name,QQ,phone,info,sex)
VALUES
('$ID','$name','$QQ','$Phone','$userinfo','$sex')";

if (!mysql_query($sql,$con))
  {
  die('ERROR: ' . mysql_error());
  }

mysql_close($con);


?>
<script>url="/department_page/leavePage.html";window.location.href=url;</script>


