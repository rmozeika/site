
<!DOCTYPE html>
<html>
	<head>
		<title>Test</title>

	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="css/email.css" />


	</head>
		<body style="background-color: #333; color: white;" >

      <div class="center-block text-center">

            <h1>Thank you!</h1>


<?php
    // $to = "robertmozeika20@gmail.com"; // this is your Email address
    // $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    // $last_name = $_POST['last_name'];
    // $subject = "Form submission";
    // $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    // $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];
    //
    // $headers = "From:" . $from;
    // $headers2 = "From:" . $to;
    // mail($to,$subject,$message,$headers);
    // create email headers
//
// $headers = 'From: '.$from."\r\n".
//
// 'Reply-To: '.$from."\r\n" .
//
// 'X-Mailer: PHP/' . phpversion();
//
// @mail($to,$subject,$message,$headers);
//
//
//     mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
//     echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
//
//
//

date_default_timezone_set('Etc/UTC');
require 'phpmailer/PHPMailerAutoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "robertmozeika20@gmail.com";
//Password to use for SMTP authentication
$mail->Password = "mage4life";
//Set who the message is to be sent from
$mail->setFrom('robertmozeika20@gmail.com', 'First Last');
//Set an alternative reply-to address
$mail->addReplyTo('anonanon228228@gmail.com', 'First Last');
//Set who the message is to be sent to
$mail->addAddress('robertmozeika20@gmail.com', 'John Doe');
//Set the subject line
$mail->Subject = 'robertmozeika.com ' . $subject;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($message);
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');
//send the message, check for errors
if (!$mail->send()) {
    echo "Unfortunately there was an error. Please send an email to robertmozeika20@gmail.com";
} else {
    echo "Message sent!";
}
  ?>
<br />
<br />
<a href="http://robertmozeika.com" class="btn btn-primary">Go back home</a>
</div>
</div>


</body>

</html>
