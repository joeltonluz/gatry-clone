const data = require('../../../data.json');
const fs = require('fs');

module.exports = {
  index(req, res) {
    return res.render('index', { promocoes: data.promotions });
  },
  create(req, res) {
    return res.render('create');
  },
  post(req, res) {
    const { 
      product_title, 
      product_price ,
      product_image,
      product_url, 
      product_store,
    } = req.body;

    const id = (data.promotions.length)+1;
    if (id==0) {
      id = 1;
    };
    
    data.promotions.unshift({
      id,
      product_title,
      product_price,
      product_image,
      product_url,
      product_store,
    });
    
    fs.writeFile('./data.json',JSON.stringify(data,'',2),(err) => {
      if (err) {
        throw res.send(`${err}`);
      }
      return res.redirect('/');
    });

  },
  termos(req, res) {
    return res.render('termos');
  }

};