<input type="button" onclick="add_input();" value="Добавить элемент">
<form>
<div id="inputi"><input name="my_input"></div>
</form>
<script>
var p = document.getElementById("inputi") ;
var length = 1 ;
function add_input() {
 var new_input = document.createElement("input") ;
 new_input.name = "my_input" ;
 var div = document.createElement('div') ;
 div.innerHTML = '<br>div элемент №' + length + '<br>' ;
 div.appendChild(new_input) ;
 p.appendChild(div) ;
 length++ ;
} ;
</script>
