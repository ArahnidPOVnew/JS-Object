var createDom = {

createTitle:function(tagname, tagtext, tagclass) {
	var x = document.createElement(tagmam);

	x.innerHTML = tagtext;
	x.className = tagclass;
	document.body.appendChild(x);
},
createList: function(tagtext, tagclass) {
	var list = document.createElement("ul");
	list.className = tagclass;
	for(var i=0; i<tagtext.lenght; i++) {
		var listElement = document.createElement("li");
		var listInput = document.createElement("input");
		listInput.setAttribute("type", "checkbox");
		listElement.innerHTML = "<span>" + tagtext[i] + "</span>";
		listElement.insertBefore(listInput, listElement.children[0]);
		list.appendChild(listElement);
	}
document.body.appendChild(list);

}
}
var titleText = "Заголовок";
var listText = ["Елемент списка1", "Елемент списка1", "Елемент списка1", "Елемент списка1",];

createDom.createTitle("h2", titleText, "main__title");

createDom.createList(titleText, "list");