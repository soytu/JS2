
  'use strict'
  
   class Voter {
    constructor (options){
      this.elem = options.elem;
      let that=this;
      that.elem.onclick= function() {
       if (event.target==that.elem.children[0]) voteDown();
       if (event.target==that.elem.children[2]) voteUp();
      }

      function voteDown (){
       that.elem.children[1].innerText=+that.elem.children[1].innerText-1;
     }

      function voteUp(){
        that.elem.children[1].innerText=+that.elem.children[1].innerText+1;
      }
    }
    setVote(vote) {
      this.elem.children[1].innerText=vote;
    }
  };
  
document.addEventListener("DOMContentLoaded", addVoter);

function addVoter(){
  let voter = new Voter({elem: document.getElementById('voter')});
  voter.setVote(20);
} 