
var tableCells = $("td");
var player = false;

//przekątna
function diagonal() {

}

//pionowo
function vertical() {

}

//poziomo
function horizontal() {

}
window.onload = function() {
  tableCells.click(function(){
      if(!player) {
        this.append("X");
        player = true;
      }else{
        this.append("O");
        player = false;
      }
    })
}
