module.exports=function(app, db){

  app.get('/', (req,res)=>{
    console.log(req);
    res.send("You're logged in");
  });

  app.get('/admin', (req,res)=>{

    // after admin gets logged
    res.send('Here are your users.')

  });

  app.get('/forms', (req,res)=>{

  });

  app.get('/applicants', (req, res)=>{

  });

  app.get('/logout', (req, res)=>{

  });

  app.post('/forms', (req, res)=>{
    // post a new form
  });

  app.post('/admin', (res, req)=>{

  });
}
