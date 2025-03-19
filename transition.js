console.log("Let's Transite!");
const arr1 = [], arr2 = [], arr3 = [];

const div = (txt, attr)=>{
	const body = document.body;
	const div = document.createElement("div");
	div.className = attr;
	txt = txt.substring(1);
	div.innerText = txt;
	body.appendChild(div);
}

fetch("./manual.txt")
.then(response=>{
	if(!response.ok) throw new Error("there has been a problem: ", response.message);
	return response.text();
})
.then(data=>{
	data = data.split("\n").filter(line => line.trim() !== "");
	data.forEach((val, ind)=> {
		if(val.startsWith("*")) div(val, "caution");
		if(val.startsWith("_")) div(val, "point");
		if(val.startsWith("&")) div(val, "warning");
	});
})
.catch(err=>{
	console.error("the error is: ", err);
});