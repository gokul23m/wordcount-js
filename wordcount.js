let input=document.getElementById("input");
let wordcount=document.getElementById("wordcount");
let charectorcount=document.getElementById("charectercount");

input.addEventListener("input",()=>{
        charectorcount.textContent=input.value.length;
        let text=input.value.trim();
        wordcount.textContent=text.split(/\s+/).filter(
            (item)=> item).length;    
});
