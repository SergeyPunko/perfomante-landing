<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;

// Load Composer's autoloader
require 'vendor/autoload.php';

header('Content-type:application/json');
// if( $_POST['email'] ):

//     // $email = strip_tags($_POST['email']);
//     // $name = strip_tags($_POST['name']);
//     // $message = strip_tags($_POST['message']);
//     // $videos_count = $_POST['count'] ? strip_tags($_POST['count']) : null;
//     // $tariff = $_POST['option'] ? strip_tags($_POST['option']) : null;

//     // Instantiation and passing `true` enables exceptions
    // $mail = new PHPMailer(true);
    // $mail->IsSMTP();
    // $mail->Host = 'localhost';
    // $mail->Port = 81;

    // try {
    //     //Recipients
    //     $mail->setFrom('sergeypunko1997@gmail.com', 'Perfomante.io');
    //     $mail->addAddress('punkosergey1997@gmail.com'); // Add a recipient


    //     // Content
    //     $mail->isHTML(true); // Set email format to HTML
    //     $mail->CharSet = 'UTF-8';
    //     $mail->Subject = 'Perfomante.io — Video creatives project request';
    //     $mail->Body    = 'Hi! We got your project request. We connect with you within next 24 hours.<br><br>Your email: <br><br>—<br>hi@perfomante.io<br>Perfomante.io - Boost your apps! Launch more video ads.';
    //     $mail->AltBody = 'Hi! We got your project request. We connect with you within next 24 hours.<br><br>Your email: <br><br>—<br>hi@perfomante.io<br>Perfomante.io - Boost your apps! Launch more video ads.';

    //     $mail->send();

    //     $result = 'Thank you, we got your request, check your email!';
    //     $data = ['success' => 'true', 'payload' => $result];
    //     echo json_encode($data);
    // } catch (Exception $e) {
    //     $result = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    //     $data = ['success' => 'false', 'payload' => $result];
    //     echo json_encode($data);
    // }
// endif;
$success = mail("punkosergey1997@gmail.com","hi sergey", "bodyyyy", "from: me");
echo $success;

?>
