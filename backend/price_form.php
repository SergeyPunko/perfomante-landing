<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';
include('global_vars.php');

// session_start();
header('Content-type:application/json;charset=utf-8');

function sendData($email, $name, $option) {
    $mail = new PHPMailer(true);
    $mail_owners = new PHPMailer(true);

    try {
        //Recipients
        $mail->setFrom('hi@perfomante.io', 'Perfomante.io');
        $mail->addAddress($email);

        $mail_owners->setFrom('hi@perfomante.io', 'Perfomante Info');
        $mail_owners->addAddress('hi@perfomante.io');
        $mail_owners->addBCC('a@perfomante.io');
        $mail_owners->addBCC('n@perfomante.io');
        $mail_owners->addBCC('v@perfomante.io');

        // Content
        $mail->isHTML(true); // Set email format to HTML
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Perfomante.io - your request on UA videos';
        $mail->Body    = 'Hello, It\'s Nurs from <a href="https://perfomante.io">Perfomante.io</a><br>You left a request on our website. It would be great to know about your project and create videos for you.<br><br>Let\'s schedule a call? You can book the time here: <a href="https://calendly.com/andykozik/30?month=2021-08">https://calendly.com/andykozik/30?month=2021-08</a>';
        $mail->AltBody = 'Hello, It\'s Nurs from <a href="https://perfomante.io">Perfomante.io</a><br>You left a request on our website. It would be great to know about your project and create videos for you.<br><br>Let\'s schedule a call? You can book the time here: <a href="https://calendly.com/andykozik/30?month=2021-08">https://calendly.com/andykozik/30?month=2021-08</a>';


        $mail_owners->isHTML(true); // Set email format to HTML
        $mail_owners->CharSet = 'UTF-8';
        $mail_owners->Subject = '"' . $option . '" request from ' . $email;
        $mail_owners->Body    = 'Option form requested<br>Email: ' . $email . '<br>Name: ' . $name . '<br>Option: ' . $option;
        $mail_owners->AltBody = 'Option form requested<br>Email: ' . $email . '<br>Name: ' . $name . '<br>Option: ' . $option;

        $mail_owners->send();
        $mail->send();

        $result = 'Thank you, we got your request, check your email!';
        $data = ['success' => 'true', 'payload' => $result, 'captcha' => $_SESSION['recaptchaOk']];
        echo json_encode($data);

    } catch (Exception $e) {
        $result = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        $data = ['success' => 'false', 'payload' => $result];
        echo json_encode($data);
    }
}

if( $_POST['email'] ):
    $email = strip_tags($_POST['email']);
    $name = strip_tags($_POST['name']);
    $option = strip_tags($_POST['option']);
//     $cookieCaptcha = $_SESSION['recaptchaOk'];
//     $gcaptcha = $_POST['g-recaptcha-response'];
// if (!$cookieCaptcha) {
//     $recaptcha = new \ReCaptcha\ReCaptcha($GLOBALS['RECAPTCHA-SECRET']);
//     $resp = $recaptcha->setScoreThreshold(0.5)->setExpectedAction('mainform')->verify($gcaptcha);
//     if ($resp->isSuccess()) {
//         $_SESSION['recaptchaOk'] = 'true';
//         sendData($email, $name, $option);
//     } else {
//         $errors = $resp->getErrorCodes();
//         $result = "Captcha error: {$errors}";
//         $data = ['success' => 'false', 'payload' => $result];
//         echo json_encode($data);
//     } 
// } else {
    sendData($email, $name, $option);
// }
endif;
?>
