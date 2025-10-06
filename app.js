const url = "https://catfact.ninja/fact";
async function getFacts(){
   try{
     let res = await axios.get(url);
    return res.data.fact;
   }
   catch(e){
    return e;
   }
}
let btn = document.querySelector('button');
btn.addEventListener('click',async ()=>{
    let p = document.querySelector('p');
    let res2 = await getFacts();
    p.innerText = res2;
})