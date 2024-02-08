<?php
 require 'config.php';

if(isset($_POST['submit1'])){
    $fullname=$_POST['fname'];
    $email=$_POST['email'];
    $number=$_POST['telephone'];
    $card=$_POST['card_name'];
    $reason=$_POST['reason'];
   
    $sql= "INSERT INTO paymentdetails(id,name,email,phone,card,reason)VALUES('',' $fullname','$email','$number','$card','$reason')";
   
       if($conn->query($sql)){
           echo"Inserted Successfully!";
       }else{
           echo"Insert data is failed!";
       }
}


?>