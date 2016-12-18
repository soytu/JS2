
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Voter = function () {
  function Voter(options) {
    _classCallCheck(this, Voter);

    this.elem = options.elem;
    var that = this;
    that.elem.onclick = function () {
      if (event.target == that.elem.children[0]) voteDown();
      if (event.target == that.elem.children[2]) voteUp();
    };

    function voteDown() {
      that.elem.children[1].innerText = +that.elem.children[1].innerText - 1;
    }

    function voteUp() {
      that.elem.children[1].innerText = +that.elem.children[1].innerText + 1;
    }
  }

  _createClass(Voter, [{
    key: 'setVote',
    value: function setVote(vote) {
      this.elem.children[1].innerText = vote;
    }
  }]);

  return Voter;
}();

;

document.addEventListener("DOMContentLoaded", addVoter);

function addVoter() {
  var voter = new Voter({ elem: document.getElementById('voter') });
  voter.setVote(20);
}