<?php 
if(isset($_POST['submit']))
{
$name = $_POST['name'];
$email = $_POST['email'];
// $subject = $_POST['subject'];
$textarea=$_POST['message'];

$mail_to="meet0619@gmail.com";
$headers= "From :".$email;
$txt = "You have recievced email from ".$name."\n\n"."$textarea";
mail($mail_to,"xxx",$txt,$headers);
// header("Location:contact.php?mailsend");
// echo "success";
}
?>