dLu.Router.map(function() {
  this.resource('home', {path:'/'});
  this.resource('about', function() {
     this.resource('colombia');
     this.resource('costaRica');   
     this.resource('dluArtcraft');   
  });
  this.resource('contact', function() {
     this.resource('adressMap');
     this.resource('messageContact');
  });
  this.resource('materials', function() {
     this.resource('fibers_and_steel', function() {
        this.resource('fibsComments', function() {
            this.resource('fibslAnswers');
       });
     });
     this.resource('woods', function() {
       this.resource('woodsComments', function() {
            this.resource('woodslAnswers');
       });
     });
  });
  this.resource('products', function() {
     this.resource('aretes');
     this.resource('collares');
     this.resource('pulseras');
  });
  this.resource('gallery');
  this.resource('blog');
  this.resource('post', function() {
     this.resource('comments');
  });
});