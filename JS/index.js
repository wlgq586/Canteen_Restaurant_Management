
window.onload=function(){
   
    var url=decodeURI(location.search);
    var dd;
    var dd1;
    var dd2;
    var str;
    var strs;
    if(url.indexOf("?"!=-1)){undefined
        str=url.substr(1);
        strs=str.split("=");
        dd=strs[1];
        dd1=strs[2];
        dd2=strs[3];
    }

        var d1=document.getElementById('user');
        var d2=document.getElementById('money');
        d1.innerHTML=dd1;
        d2.innerHTML=dd2;
    
}
function urlhtml(){
    var username=document.getElementById('user');
    var money=document.getElementById('money');
    window.location.href="order.html?xm=true="+username.innerHTML+"="+money.innerHTML;
}

function MS(){
    var meishi=document.getElementById("meishi");
     meishi.style.display='block';
}

function qx(){
    var meishi=document.getElementById("meishi");
    meishi.style.display='none';
}

function ST(){
    var demo=document.getElementById('demo');
    if(demo.style.display=='none'){
        demo.style.display='block';
    }else{
        demo.style.display='none';
    }
    
}

let ej=document.getElementsByClassName("ej");
let eja=document.getElementsByClassName("eja");
function menu(){
    if(eja[0].style.display=='none'){
        open(eja);
    }else{
        close(eja);
    }
}

function open(eja){
    eja[0].style.display='block';
    eja[1].style.display='block';
    eja[2].style.display='block';
    ej[0].style.background='grey';
}

function close(eja) {
    eja[0].style.display='none';
    eja[1].style.display='none';
    eja[2].style.display='none';
    ej[0].style.background='rgba(104, 250, 201, 0.849)';
}

function CZ(){
    var username=document.getElementById("user");
    var money=document.getElementById("money");
    window.location.href="invest.html?xm=true="+username.innerHTML+"="+money.innerHTML;
}

function BB(){
    window.location.href="form.html";
}