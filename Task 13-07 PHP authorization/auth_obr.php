<?php
header('Content-Type: text/html; chfrset=utf-8');

$mysqli = mysqli_connect("localhost", "sigmocuj_0540", "Bmwm3csl", "sigmocuj_0540");
if ($mysqli == false) {
  print("error");
} else {
  // print("Соединение установлено успешно");

  $email = $_POST['email'];
  $pass = $_POST['pass'];

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email' AND `pass` = '$pass'");

  if ($result->num_rows != 0) {
    print("exist");
  } else {
    $mysqli->query("INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES ('$name','$lastname','$email','$pass')");
    print("ok");
  }
}
