<?php

/* Your quiz answers are defined in js/answers.js */



//Type of Quiz
//------------------------------------------------------------------------------------
// for STANDARD PICTURE QUIZ use 'pics'
// for PICTURE QUIZ WITH 2 ANSWERS FOR EACH PICTURE use 'pics2'
// for TEXT/TRIVIA QUIZ use 'text'
$quizType = "pics";



//Number of Questions
//------------------------------------------------------------------------------------
//If each question requires two answers, then this should be taken into account
//E.g. if there are 8 questions & 2 answers for each, you should use a value of 16
$totalQs = 16;



//Variables for <head> tag
//------------------------------------------------------------------------------------
$quizTitle  = "Expedia Landmarks Quiz"; //Used for first part of Page Title
$clientName = "";   //Used for second part of Page Title
$pageTitle  = "";              //Use if you want a different Page Title

$metaDesc   = "Now you have the chance to prove your traveling credentials with this quiz from Expedia India. See if you can impress your friends (and us!) by getting every one of the questions right.";  //Description <meta> tag content



//Page Intro/Instructions
//------------------------------------------------------------------------------------
$intro = "<h1>Expedia Landmarks Quiz</h1><p>Now you have the chance to prove your traveling credentials with this quiz from Expedia India. See if you can impress your friends (and us!) by getting every one of the questions right. Depending on your results, you may want to experience more of India. If you feel the need to travel more, then it’s lucky that you’re already in the right place to find the best <a target='_blank' href='https://www.expedia.co.in/Hotels'>Indian hotel deals</a>!</p><p><strong>Post your score on Twitter tagging @ExpediaIN and using the Hashtag #LandmarkQuiz to have the chance to be the winner of a free stay in a hotel.</strong></p><p><strong>The winner will have the choice to stay in a hotel located either in <a class='goa' href='https://www.expedia.co.in/Goa-Hotels-Planet-Hollywood-Goa-Beach-Resort.h10547516.Hotel-Information'>Goa</a> or <a class='jaipur' href='https://www.expedia.co.in/Jaipur-Hotels-Country-Inn-Suites-By-Carlson-Jaipur.h1190736.Hotel-Information'>Jaipur</a></strong>.</p> <p>For more information please click <a target='_blank' href='https://travelblog.expedia.co.in/expedia-landmarks-contest-terms-and-conditions'>here</a> to see the terms and conditions for this competition.</p>";



//Placeholder Text
//------------------------------------------------------------------------------------
//If left blank, placeholder text will default to 'Answer'
//If you don't want any placeholder text, use a single space
$placeholder  = "Landmark";
$placeholder2 = ""; //Placeholder for 2nd input field if 2 answers are required






//Questions for text based quiz
//------------------------------------------------------------------------------------
$qs[0] = "What is the capital of Egypt?";
$qs[1] = "What is the capital of Egypt2?";
$qs[2] = "What is the capital of Egypt3?";
$qs[3] = "What is the capital of Egypt4?";
$qs[4] = "What is the capital of Egypt5?";
$qs[5] = "What is the capital of Egypt6?";
$qs[6] = "What is the capital of Egypt7?";
$qs[7] = "What is the capital of Egypt8?";



/* Your quiz answers are defined in js/answers.js */



?>