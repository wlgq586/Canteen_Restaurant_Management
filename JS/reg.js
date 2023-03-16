var flag=false;
var na;
var money;
function login(){
        var input=document.getElementsByTagName('input');
        // flag=false;
        var objdbConn_Consumer = new ActiveXObject("ADODB.Connection");    
        var strdsn_Consumer = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Consumer.Open(strdsn_Consumer);    
		var objrs_Consumer = objdbConn_Consumer.Execute("SELECT Cname FROM Consumer");                  // 输入本地的表  

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
            if(objrs_Consumer.Fields(0).Value==input[0].value && objrs_Card.Fields(0).Value==input[1].value){
                flag=true;
                alert('登录成功！'); 
                
                window.location.href="order.html?xm=true="+input[0].value+"="+objrs_m.Fields(0).Value;
                break;
            }
            objrs_Consumer.moveNext();                   
            objrs_Card.moveNext();                   
            objrs_m.moveNext();                   
        }    
        }  
        else{
            alert("数据库内没有记录!");  
            console.log('失败！');

        }
       if(flag==false){
        alert("登录失败！");
       }
        // objrs_Consumer.Close();                           
        // objdbConn_Consumer.Close();   
        // objrs_Card.Close();                           
        // objdbConn_Card.Close();   
        // objrs_m.Close();                           
        // objdbConn_m.Close();                      
}

function back(){
    window.history.back();//返回上一页 表单的内容会保留
}
