// Practice Problems

function countdown(count) {
  (function(n){
    var i;
    for(i = n; i >= 0; i -= 1){
      console.log(i);
    }
    
    console.log("Done!");
  })(count);
}

countdown(7);