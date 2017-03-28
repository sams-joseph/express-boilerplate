import app from './app';

const listener = app.listen(app.get('port'), () => {
  console.log(`Running on port ${listener.address().port}...`);
});
