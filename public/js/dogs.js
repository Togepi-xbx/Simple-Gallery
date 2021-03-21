

fetch('./api/v0/dogs')
  .then(function(response){
    if(!response.ok){
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(dogs){
    dogs.forEach(function(dog){
      const gallery = document.querySelector(`#gallery`);
    
      // creat figure element
      let figure = document.createElement(`figure`);
      // creat figcaption element
      let figcaption = document.createElement(`figcaption`);
      // creat img element
      let img = document.createElement('img');
      // place the figure into gallery
      gallery.appendChild(figure);
      // place img and figcaption into figure
      figure.appendChild(img);
      figure.appendChild(figcaption);
    
      // give information to img
      img.src = `./img/${dog.id}.jpg`;
      img.alt= dog.title;
      img.height = `300`;
      // give information to figcaption
      figcaption.innerText = dog.credit;
    });
  })
  .catch(function(err){
    console.log(err);
  });
