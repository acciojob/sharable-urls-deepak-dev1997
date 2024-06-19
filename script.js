// your code here
let name = document.getElementById("name")
let year = document.getElementById("year")
let head= document.getElementById("url")
let urlString="https://localhost:8080/"
head.innerText= urlString

function headChange() {
	head.innerText="";
	let tempUrl = urlString
	if(name.value && year.value){
		tempUrl= `${urlString}?name=${name.value}&year=${year.value}`
	}
	else if(name.value){
		tempUrl+="?name="+name.value
	}
	else if (year.value){
		tempUrl+="?year="+year.value
	}
	head.innerText= tempUrl
}