//   m=0;
// document.querySelector("car").addEventListener("click",function(){
//   msetInterval(run,50);
//
//   function run(){
//     m+=5;
//     document.getElementById("car").style.marginLeft=m+'px';
//   }
//
//   },1000);
//
// });


m = 1;
n = 1521;
var y;
var p;

// Lamborghini 1
function start1() {
  y = setInterval(run, 50);

  function run() {
    if (m == 1521) {
      //clearInterval(x);
      // clearInterval(q);
      m = 1;
    } else {
      m += 10;
      var x = document.getElementById("car1");
      x.style.marginLeft = m + 'px';

      // var q=document.getElementById("car2");
      // q.style.marginLeft = m + 'px';
    }
  }
}

function start2() {

  // Lamborghini 2
  p = setInterval(runn, 50);

  function runn() {
    if (n == 1) {
      clearInterval(p);
      n = 1521;
    } else {
      n -= 10;
      var q = document.getElementById("car2");
      q.style.marginRight = n + 'px';
    }
  }
}

function stop() {
  clearInterval(y);
  clearInterval(p);
}
