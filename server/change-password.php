<?php
include './connection.php';
$inputs = json_decode(file_get_contents('php://input'));
$studentID = $inputs->studentID;
$password = $inputs->password;
$query = "UPDATE `students` SET `password` = '".sha1($password)."' WHERE `studentID` = '$studentID'";
if(execute($db, $query)){
  echo json_encode(true);
}else{
  echo json_encode(false);
}