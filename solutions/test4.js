let acessAuth = true;

setInterval(() => {
  acessAuth = true;
}, 300);

module.exports= cb => {
  if (acessAuth) {
    acessAuth = false;
    cb();
  }
};


