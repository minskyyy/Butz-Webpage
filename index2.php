<?php
  include_once 'database/logDB.php';
 ?>

 <!DOCTYPE html>
 <html>
 	<head>
 		<meta charset="utf-8">
 		<title>Home Page</title>
 		<!-- Styles -->
 		<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
 		<link href="css/bootstrap.min.css" rel="stylesheet">
 		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 		<link href="css/fontawesome-all.min.css" rel="stylesheet">
 		<link href="css/swiper.css" rel="stylesheet">
 		<link href="css/styles.css" rel="stylesheet">

 	</head>
 	<body class="loggedin">
        <?php
          $sql = "SELECT * FROM news;";
          $i = 0;
          $output = array();
          $result = mysqli_query($con, $sql);
          $resultCheck = mysqli_num_rows($result);
          if ($resultCheck > 0 ){
            while($row = mysqli_fetch_assoc($result)){
                $output[$i] = $row['user'] + $row['date'] + $row['topic'] + $row['input'];
                $i++;
            }
          }

          for($j=0; $j = $i; $j++){
            echo $output[$j] . "<br/>";
          }
         ?>


 		<!-- Scripts -->
 		<script src="js/bootstrap.min.js"></script> <!-- Bootstrap framework -->
 		<script src="js/scripts.js"></script> <!-- Custom scripts -->

 	</body>

 </html>
