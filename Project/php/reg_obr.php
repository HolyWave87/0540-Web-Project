<?php
header('Content-Type: text/html; chfrset=utf-8');

$mysqli = mysqli_connect("localhost", "sigmocuj_0540", "Bmwm3csl", "sigmocuj_0540");
if ($mysqli == false) {
  print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
} else {
  print("Соединение установлено успешно");

  $name = $_POST['name'];
  $lastname = $_POST['$lastname'];
  $email = $_POST['email'];
  $pass = $_POST['pass'];

  var_dump($lastname);

  $mysqli->query("INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES ('$name','$lastname','$email','$pass')");
}

// echo "<hr>";
// echo "Имя: $name<br>
// Фамилия: $lastname<br>
// E-mail: $email<br>
// Пароль: $pass";
