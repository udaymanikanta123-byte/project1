
document.getElementById("rolldice").onclick=function(){
    rolls=document.getElementById("rolls").value
    rolls=Number(rolls);
    let rollarray=[];
    for(let i=0;i<rolls;i++){
     rollarray[i]=(Math.floor(Math.random()*6))+1;
    }
    document.getElementById("output").textContent=rollarray;
}

