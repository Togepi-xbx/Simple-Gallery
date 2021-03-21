global.fetch = require('node-fetch');

const express = require('express');
// const dogs = require('../../data/dogs')

const router = express.Router();

// router.use((req, res, next) => {
//   res.locals = config
//   next()
// })

// router.get('/api/v0/dogs', (req, res) => {
//   res.json (dogs);
// })


router.get('/', (req, res) => {
  res.render('../view/pages/gallery', {pageTitle: "Gallery"});
  // fetch('./api/v0/dogs')
  //   .then(function(response){
  //     if(!response.ok){
  //       throw new Error('Not 200 OK');
  //     }
  //     return response.json();
  //   })
  //   .then(function(dogs){

  //     let output = '';
  //     dogs.forEach((dog) => {
  //       output += `<dt>${dog.title}</dt>
  //                  <dc>${dog.credit}</dc>`;
  //     })
  //     document.querySelector('#gallery').innerHTML = output;
  //     // dogs.forEach(function(dog){
  //     //   const gallery = document.querySelector(`#gallery`);
      
  //     //   // creat figure element
  //     //   let figure = document.createElement(`figure`);
  //     //   // creat figcaption element
  //     //   let figcaption = document.createElement(`figcaption`);
  //     //   // creat img element
  //     //   let img = document.createElement('img');
  //     //   // place the figure into gallery
  //     //   gallery.appendChild(figure);
  //     //   // place img and figcaption into figure
  //     //   figure.appendChild(img);
  //     //   figure.appendChild(figcaption);
      
  //     //   // give information to img
  //     //   img.src = `./img/${dog.id}.jpg`;
  //     //   img.alt= dog.title;
  //     //   img.height = `300`;
  //     //   // give information to figcaption
  //     //   figcaption.innerText = dog.credit;
  //     // });
  //   })
  //   .catch(function(err){
  //     console.log(err);
  //   });

  // res.render('../view/pages/gallery', {pageTitle: "Lovely Puppies!"})
})

module.exports = router;


