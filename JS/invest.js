var url=decodeURI(location.search);
var dd;
var dd1;
var dd2;
var str;
var strs;
var u='';    
var m=0;
var login=document.getElementsByClassName("login");
var spent=document.getElementsByClassName("spent");
var sus=document.getElementsByClassName("sus");
var fail=document.getElementsByClassName("fail");
var sus1=document.getElementsByClassName("sus1");
var wel=document.getElementsByClassName("welcome");
window.onload=function(){
    
    if(url.indexOf("?"!=-1)){
        str=url.substr(1);
        strs=str.split("=");
        dd=strs[1];
        dd1=strs[2];
        dd2=strs[3];
        console.log(dd1+dd2);
    }
    // alert(dd1);
    if(dd1==='undefined'||dd1===undefined){
        login[0].style.display='block';
        spent[0].style.display='none';
        sus1[0].style.display='none';
        fail[0].style.display='none';
        sus[0].style.display='none';
    }
    else{
        u=dd1;
        m=dd2;
        // console.log(m);
        login[0].style.display='none';
        spent[0].style.display='block';
        sus1[0].style.display='none';
        fail[0].style.display='none';
        sus[0].style.display='none';
        wel[0].innerHTML="尊敬的"+dd1+"先生/女士,您好,您的余额剩余: "+dd2;
    }
        // d1.innerHTML=dd1;
        // d2.innerHTML=dd2;
    
}
var flag=false;
// var bt=document.getElementById("btn");
var objdbConn_Consumer = new ActiveXObject("ADODB.Connection");    
var strdsn_Consumer = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
objdbConn_Consumer.Open(strdsn_Consumer);    
var objrs_Consumer = objdbConn_Consumer.Execute("SELECT Cname FROM Consumer"); 
function bt(){
    flag=false;
    var username=document.getElementsByClassName("in1");
    var pwd=document.getElementsByClassName("in2");

    var objdbConn_Card = new ActiveXObject("ADODB.Connection");    
    var strdsn_Card = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
    objdbConn_Card.Open(strdsn_Card);    
    var objrs_Card = objdbConn_Card.Execute("SELECT Capwd FROM Card,Consumer where Caid=Cid");                  // 输入本地的表       
    
    var objdbConn_m = new ActiveXObject("ADODB.Connection");    
    var strdsn_m = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
    objdbConn_m.Open(strdsn_m);    
    var objrs_m = objdbConn_m.Execute("SELECT Caremain FROM Card,Consumer where Caid=Cid");                  // 输入本地的表   
// console.log(objrs_m.Fields(0).value);
    if (!objrs_Consumer.EOF){  
    while (!objrs_Consumer.EOF){                     
        // console.log(objrs_Consumer.Fields(0).Value);
        // console.log(objrs_Card.Fields(0).Value);
        if(objrs_Consumer.Fields(0).Value==username[0].value && objrs_Card.Fields(0).Value==pwd[0].value){
            flag=true;
            // alert('登录成功！'); 
            login[0].style.display='none';
            spent[0].style.display='block';
            sus1[0].style.display='block';
            fail[0].style.display='none';
            sus[0].style.display='none';
            console.log(wel[0].innerHTML);
            console.log(dd1);
            u=username[0].value;
            m=objrs_m.Fields(0).value;
            console.log(m);
            wel[0].innerHTML="尊敬的"+username[0].value+"先生/女士,您好,您的余额剩余: "+objrs_m.Fields(0).value;
            console.log(wel[0].innerHTML);

            break;
        }
        objrs_Consumer.moveNext();                   
        objrs_Card.moveNext();                   
        objrs_m.moveNext();                   
    }    
    }  
    else{
        alert("数据库内没有记录!");  
        fail.style.display='block';
    }
   if(flag==false){
    // alert("登录失败！");
        login[0].style.display='block';
        spent[0].style.display='none';
        sus1[0].style.display='none';
        fail[0].style.display='block';
        sus[0].style.display='none';
   }
}
var num = 5; 
function cz(){
    var spend=document.getElementsByClassName("spend");
    var username=document.getElementsByClassName("in1");
    // console.log(spend[0].value);
    var objdbConn_Card = new ActiveXObject("ADODB.Connection");    
    var strdsn_Card = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
    objdbConn_Card.Open(strdsn_Card);    
    //修改数据库里的表的数据
    objdbConn_Card.Execute("update Card set Caremain=Caremain+"+spend[0].value+"where Caid=(select Cid from Consumer where Cname='"+u+"')");
    login[0].style.display='none';
    spent[0].style.display='none';
    sus1[0].style.display='none';
    fail[0].style.display='none';
    sus[0].style.display='block';
    // console.log(typeof(Number(m)));
    m=Number(m)+Number(spend[0].value);
    // console.log(typeof(Number(spend[0].value)));
    window.setTimeout("doUpdate()", 1000);
     
}
function doUpdate(){
         if(num!=0){
             document.getElementById('page_div').innerHTML='将在'+num+'秒后自动跳转到首页...' ;
             num--;
             window.setTimeout("doUpdate()", 1000);
         }else{
             num=5;
             window.location.href="index.html?xm=true="+u+"="+m; //5秒后跳转到登录页面
         }
}

function fh(){
    window.history.back();//返回上一页 表单的内容会保留
}