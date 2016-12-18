
  'use strict'
  
  function Voter(options) {
    var elem = options.elem;

    this.setVote=function(vote) {
      elem.children[1].innerText=vote;
    }

    elem.onclick= function() {
      if (event.target==elem.children[0]) voteDown();
      if (event.target==elem.children[2]) voteUp();
    }

    function voteDown (){
      elem.children[1].innerText=+elem.children[1].innerText-1;
    }

    function voteUp(){
      elem.children[1].innerText=+elem.children[1].innerText+1;
    }
  };
  
document.addEventListener("DOMContentLoaded", addVouter);

function addVouter(){
  var voter = new Voter({elem: document.getElementById('voter')});
  voter.setVote(20);
} 