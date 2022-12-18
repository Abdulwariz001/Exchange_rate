let to= document.querySelector("#to")
let from =document.querySelector("#from")
let amount =document.querySelector("#amount")


let value = ""

fetch('https://v6.exchangerate-api.com/v6/cc02bc7972a0c8b71e9ac68b/latest/USD')
.then(function(result){
    return result.json()
}).then(data =>{
    console.log(data.conversion_rates)
    for(let demo in data.conversion_rates){
     value += `<option ${demo}>${demo}</option>`
    }

    to.innerHTML = value;
    from.innerHTML = value;
})
.catch(error => console.log("error",error));


async function convert(){

    let results =await fetch(`https://v6.exchangerate-api.com/v6/cc02bc7972a0c8b71e9ac68b/pair/${from.value}/${to.value}`);
    let data =await results.json()
    console.log(data.conversion_rates)
    amount.value = amount.value * data.conversion_rate
}


setInterval(()=>{
    let todate= new Date();
    let hours = todate.getHours();
    let minutes = todate.getMinutes(); 
    let seconds= todate.getSeconds()
    document.getElementById('clk').innerHTML=`${hours}: ${minutes} : ${seconds}`;


}, 1000)
