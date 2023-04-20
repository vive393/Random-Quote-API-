let h2=document.querySelector('h2');
let h3=document.querySelector('h3');

fetch('http://localhost:3000')
.then(res=>res.json())
.then((data)=>{
    h2.innerHTML=data.quote;
    h3.innerHTML=data.author;
})