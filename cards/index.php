<!DOCTYPE html>
<html>
	<head>
		<title>Cards</title>

	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="../css/cards.css" />


	</head>

  <meta name="viewport" content="width=device-width" />



<?php




$servername = "localhost";
$username = "robertm_robertm";
$password = "mage4life";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully<br />";

mysqli_select_db($conn,robertm_cards);

$resetter = $_POST['reset'];
if ($resetter){
  if($resetter == "tiff"){
    $sql = "UPDATE  Score SET score=0 WHERE id=1";
    if ($conn->query($sql) === TRUE) {
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }
  if($resetter == "bob"){
    $sql = "UPDATE  Score SET score=0 WHERE id=3";
    if ($conn->query($sql) === TRUE) {
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }
}

$tifScore = $_POST['addTif'];

if($tifScore){
  $sql = "UPDATE  Score SET score=score + $tifScore WHERE id=1";

  if ($conn->query($sql) === TRUE) {
      // echo "New record created successfully";
  } else {
      // echo "Error: " . $sql . "<br>" . $conn->error;
  }

}

$bobScore = $_POST['addBob'];
// echo '<br />add bob is ' . $bobScore;

if($bobScore){
  $sql = "UPDATE  Score SET score=score + $bobScore WHERE id=3";

  if ($conn->query($sql) === TRUE) {
      // echo "New record for bobcreated successfully<br />";
  } else {
      // echo "Error: " . $sql . "<br>" . $conn->error;
  }

}


// $sql = "INSERT INTO  Score (name,score) VALUES ('Bobby',0)";
//
// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }





$sql = "SELECT id, name, score FROM Score";
$result = $conn->query($sql);
// if ($result->num_rows > 0) {
//      // output data of each row
//      while($row = $result->fetch_assoc()) {
//          echo "<br> id: ". $row["id"]. " - Name: ". $row["name"]. " " . $row["score"] . "<br>";
//      }
// } else {
//      echo "0 results";
// }

//
// echo 'hello';
// $tif = null;
$numrows = $result->num_rows;
if ($numrows > 0){

  for ($x = 0; $x <= $numrows; $x++) {
    // echo $row['name'];
    // if ($row['name'] == 'Tiffany'){
    //   echo 'wehaveaname';
    //   echo $row['name'];
    //   echo 'end';
    // }
    $row = $result->fetch_assoc();

    if ($row['name'] == 'Tiffany'){
      global $tif;
      $tif = $row['name'];
      global $tiffanyscore;
      $tiffanyscore = $row['score'];

    }
    if ($row['name'] == 'Bobby') {
      global $bobby;
      $bobby = $row['name'];
      global $bobbyscore;
      $bobbyscore = $row['score'];
    }
  }
}






?>
<div class="container">
<div class="row">
  <div class="col-sm-6 text-center">
    <div class="well">

<h2>Tiffany</h2>
<span>Score:</span>
<span>
<?php
  echo $tiffanyscore;



 ?>
 </span>
 <br />
 <div class="form-group text-left">
<form action="" method="POST">
  <label>Add Score:</label><br /><input class="form-control" name="addTif" type="text"/>
  <button class="btn btn-primary" type="submit">Submit</button><br /><br />
</form>
<form onsubmit="return confirmReset()" action="" method="POST">
  <button value="tiff" type="submit" name="reset" class="btn btn-danger center-block">Reset</button>
</form>

</div>
<br />
</div>
</div>
<div class="col-sm-6 text-center">
  <div class="well">
<h2>Bobby</h2>

<span>Score:
<?php
echo $bobbyscore;


 ?>
 </span>
 <br />
 <div class="form-group text-left">
 <form action="" method="POST">
  <label>Add Score:</label><br /><input class="form-control" name="addBob" type="text"/>
  <button class="btn btn-primary" type="submit">Submit</button><br /><br />
  </form>
  <form onsubmit="return confirmReset()" action="" method="POST">
    <button value="bob" type="submit" name="reset" class="btn btn-danger center-block">Reset</button>
  </form>
 </div>
<br />
</div>
</div>
</div>
</div>


<?php


  $_POST = array();
  $conn->close();

?>

<script src="../js/cards.js"></script>
</body>

</html>
