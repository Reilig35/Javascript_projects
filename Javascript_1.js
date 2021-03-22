//Class change
function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "Told you it would change"
}

//Drawing 2 squares
function draw() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(70, 10, 50, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(90, 30, 50, 50);
    }
  }

  //Gradent
function new_Gradent() {
    var canvas = document.getElementById('myCanvas2');
    var ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(20,0, 220,0);

    gradient.addColorStop(0, 'purple');
    gradient.addColorStop(.5, 'brown');
    gradient.addColorStop(1, 'purple');


    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 200, 100);
}
