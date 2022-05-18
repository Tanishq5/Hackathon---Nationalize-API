var form = document.createElement("form");
form.setAttribute("id" , "myform");

var input = document.createElement("input");
input.setAttribute("type" , "text");
input.setAttribute("id" , "name");
input.setAttribute("required" , true);
input.setAttribute("class" , "search-bar");

var btinput = document.createElement("input");
btinput.setAttribute("type" , "submit");
btinput.setAttribute("value" , "search");
btinput.setAttribute("class" , "btn btn-lg btn-dark");

form.append(input , btinput);
document.body.append(form);


var divC = document.createElement("div");
divC.setAttribute("class" , "card-container")

let div1 = document.createElement("div")
div1.setAttribute("id" ,"first-country")
div1.setAttribute("class" , "card-text first-text");
document.body.append(div1);

let div2 = document.createElement("div")
div2.setAttribute("id" ,"second-country")
div2.setAttribute("class" , "card-text");
document.body.append(div2);

let div3 = document.createElement("div")
div3.setAttribute("id" ,"first-country-probability")
div3.setAttribute("class" , "card-text");
document.body.append(div3);

let div4 = document.createElement("div")
div4.setAttribute("id" ,"second-country-probability")
div4.setAttribute("class" , "card-text");
document.body.append(div4);

divC.append(div1 , div2 , div3 , div4);
document.body.append(divC);

var fres = document.getElementById("myform");
fres.addEventListener("submit" , (event) => {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var url = `https://api.nationalize.io/?name=${name}`;

    nationalize(url)
})

async function nationalize(url) {

try {

    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    console.log(data)

    let firstCountry = document.getElementById("first-country");
    let secondCountry = document.getElementById("second-country");
    let fcProbability = document.getElementById("first-country-probability");
    let scProbability = document.getElementById("second-country-probability");
    let Cname = document.getElementById("card-name")

    firstCountry.innerHTML = " ";
    firstCountry.append(`First country :${data.country[0].country_id}`);

    fcProbability.innerHTML = " ";
    fcProbability.append(`First country probabilty :${data.country[0].probability}`);

    secondCountry.innerHTML = " ";
    secondCountry.append(`Second country :${data.country[1].country_id}`);

    scProbability.innerHTML = " ";
    scProbability.append(`Second country probabilty :${data.country[1].probability}`);

} catch (err) {
    console.log(err);
}
}