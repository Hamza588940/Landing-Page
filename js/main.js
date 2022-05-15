 document.addEventListener('DOMContentLoaded',()=>{
    function run(bar,number){
        var mac = document.getElementById(bar);
        var text = document.getElementById(number);
        var width = 1;
         var id = setInterval(ref,20);
         function ref(){
             if(width>=100)
             {
                 clearInterval(id)
             }
             else{
                 width++;
                 mac.style.width=width+'%';
                 text.innerHTML=width+'%';
             }
         }
    }
    run("innerbar1","text1");
    run("innerbar2","text2");
    run("innerbar3","text3");
    run("innerbar4","text4")
 } )
 

