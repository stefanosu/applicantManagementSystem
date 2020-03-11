module.exports=function(app, db, form, question, response, user){

  let dd_options = {
    'response_code':true,
    'tags': ['app:my_app']
      }
  
  let connect_datadog = require('connect-datadog')(dd_options);
  
  // Add your other middlewares
  app.use();
  
  // Add the datadog-middleware before your router
  app.use(connect_datadog);
  app.use(router);

  app.get('/', (req,res)=>{
    console.log(req);
    res.send("You're logged in");
  });

  app.get('/admin', (req,res)=>{
    // after admin gets logged in and there is a dashboard
    res.send('Here are your users.')
  });

  app.get('/forms', (req,res)=>{
    res.send('You are at the form route');
  });

  app.get('/applicants', (req, res)=>{
    // where you get to see the list of applicants and status
    res.send('You are at the applicant route');
  });

  app.get('/logout', (req, res)=>{
    // stop session and remove cookie?
    res.send('You are logged out!');
  });

  app.post('/forms', (req, res)=>{
    // save a new filled out form
    res.send('You saved a form!');
  });

  app.post('/admin', (res, req)=>{
    // create a new form
    res.send('You created a new form');
  });
}
