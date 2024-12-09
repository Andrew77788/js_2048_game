var e,t,r;(r=new((e=function(){var e;function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,t),this.size=e,this.board=this.createBoard(),this.score=0}return e=[{key:"createBoard",value:function(){var e=this;return Array(this.size).fill().map(function(){return Array(e.size).fill(0)})}},{key:"addTile",value:function(){for(var e=[],t=0;t<this.size;t++)for(var r=0;r<this.size;r++)0===this.board[t][r]&&e.push({row:t,col:r});if(e.length>0){var i=e[Math.floor(Math.random()*e.length)],s=i.row,o=i.col;this.board[s][o]=.9>Math.random()?2:4}}},{key:"moveLeft",value:function(){for(var e=this,t=!1,r=0;r<this.size;r++)!function(r){for(var i=e.board[r].filter(function(e){return e}),s=0;s<i.length-1;s++)i[s]===i[s+1]&&(i[s]*=2,e.score+=i[s],i[s+1]=0,t=!0);for(i=i.filter(function(e){return e});i.length<e.size;)i.push(0);t||(t=e.board[r].toString()!==i.toString()),e.board[r]=i}(r);return t}},{key:"moveRight",value:function(){this.board=this.board.map(function(e){return e.reverse()});var e=this.moveLeft();return this.board=this.board.map(function(e){return e.reverse()}),e}},{key:"moveUp",value:function(){this.transpose();var e=this.moveLeft();return this.transpose(),e}},{key:"moveDown",value:function(){this.transpose();var e=this.moveRight();return this.transpose(),e}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.board}},{key:"getStatus",value:function(){return this.checkWin()?"win":this.isGameOver()?"lose":"playing"}},{key:"start",value:function(){this.board=this.createBoard(),this.score=0,this.status="playing",this.addTile(),this.addTile(),this.updateBoard(),document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-start").classList.add("hidden"),document.querySelector(".start").textContent="Restart"}},{key:"restart",value:function(){this.board=this.createBoard(),this.score=0,this.addTile(),this.addTile(),this.updateBoard(),document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden")}},{key:"updateBoard",value:function(){for(var e=document.querySelectorAll(".field-cell"),t=0,r=0;r<this.size;r++)for(var i=0;i<this.size;i++)e[t].textContent=0!==this.board[r][i]?this.board[r][i]:"",e[t].className="field-cell",0!==this.board[r][i]&&e[t].classList.add("field-cell--".concat(this.board[r][i])),t++;document.querySelector(".game-score").textContent=this.score}},{key:"transpose",value:function(){var e=this;this.board=this.board[0].map(function(t,r){return e.board.map(function(e){return e[r]})})}},{key:"checkWin",value:function(){return this.board.some(function(e){return e.includes(2048)})}},{key:"isGameOver",value:function(){for(var e=0;e<this.size;e++)for(var t=0;t<this.size;t++)if(0===this.board[e][t]||t<this.size-1&&this.board[e][t]===this.board[e][t+1]||e<this.size-1&&this.board[e][t]===this.board[e+1][t])return!1;return!0}},{key:"move",value:function(e){var t=!1;switch(e){case"ArrowLeft":t=this.moveLeft();break;case"ArrowRight":t=this.moveRight();break;case"ArrowUp":t=this.moveUp();break;case"ArrowDown":t=this.moveDown()}if(t){this.addTile(),this.updateBoard();var r=this.getStatus();"win"===r?document.querySelector(".message-win").classList.remove("hidden"):"lose"===r&&document.querySelector(".message-lose").classList.remove("hidden")}}}],function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(t.prototype,e),t}())&&e.__esModule?e.default:e)).updateBoard(),document.addEventListener("keydown",function(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(event.key)&&r.move(e.key)}),document.querySelector(".start").addEventListener("click",function(){r.start()});
//# sourceMappingURL=index.b5879b30.js.map