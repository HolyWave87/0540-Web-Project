<?php
class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;
  private $grandFather;
  private $grandMother;
  private $secondGrandMother;
  private $secondGrandFather;

  function __construct($name, $lastname, $age, $mother = null, $father = null, $grandFather = null, $grandMother = null, $secondGrandMother = null, $secondGrandFather = null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->grandFather = $grandFather;
    $this->grandMother = $grandMother;
    $this->secondGrandMother = $secondGrandMother;
    $this->secondGrandFather = $secondGrandFather;
    $this->hp = 100;
  }
  // function sayHi($name)
  // {
  //   return "Hi $name, I`m " . $this->name;
  // }
  function setHp($hp)
  {
    if ($this->hp + $hp > 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp()
  {
    return $this->hp;
  }
  function getName()
  {
    return $this->name;
  }
  function getLastName()
  {
    return $this->lastname;
  }
  function getMother()
  {
    return $this->mother;
  }
  function getFather()
  {
    return $this->father;
  }
  function getGrandFather()
  {
    return $this->grandFather;
  }
  function getGrandMother()
  {
    return $this->grandMother;
  }
  function getSecondGrandMother()
  {
    return $this->secondGrandMother;
  }
  function getSecondGrandFather()
  {
    return $this->secondGrandFather;
  }
  function getInfo()
  {
    return "
<h1>About my family</h1><br>" . "My name is: "
      . $this->getName() . "<br> my lastname is: " . $this->getLastname() . "<br>my father is: " . $this->getFather()->getName() . "<br>my mother is: " . $this->getMother()->getName() . "<br>my grandFather is: " . $this->getGrandFather()->getName() . "<br>my grandMother is: " . $this->getGrandMother()->getName() . "<br>my secondGrandMother is: " . $this->getSecondGrandMother()->getName() . "<br>my secondGrandFather is: " . $this->getSecondGrandFather()->getName();
  }
}
$igor = new Person("Igor", "Petrov", 62);
$anna = new Person("Anna", "Petrova", 60);
$bella = new Person("Bella", "Grigoreva", 64);
$dmitriy = new Person("Dmitriy", "Grigorev", 66);

$alex = new Person("Alex", "Ivanov", 42, $bella, $dmitriy);
$olga = new Person("Olga", "Ivanova", 42, $anna, $igor);
$valera = new Person("Valera", "Ivanov", 15, $olga, $alex, $igor, $anna, $bella, $dmitriy);
// echo $valera->getMother()->getFather()->getName();
echo $valera->getInfo();






//$alex->name = "Alex";
//echo $alex->name;
// echo $alex->sayHi($igor->name);
// Здоровье человека не может быть более 100 ед.
// $medKit = 50;
// //$alex->hp = $alex->hp - 30; //Шел и упал
// $alex->setHp(-30);
// //echo $alex->hp . "<br>";
// echo $alex->getHp() . "<br>";
// //$alex->hp = $alex->hp + $medKit; // Нашел аптечку
// $alex->setHp($medKit);
// //echo $alex->hp;
// echo $alex->getHp();
