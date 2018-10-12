


  let acessAuth = true;

  let interval=setInterval(() => {
    acessAuth = true;
  }, 300);
const f4 = cb => {


  if (acessAuth) {
    acessAuth = false;
    cb();
  
    
  }}

module.exports = f4;
