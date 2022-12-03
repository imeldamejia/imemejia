let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Aprender a desarrollar programas te hace ver el mundo diferente.')
  .pauseFor(200)
  .deleteChars(10)
  .start();