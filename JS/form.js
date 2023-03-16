var str='';
var s='';
var sp=document.getElementsByTagName("span");
window.onload=function(){
    var table=document.getElementById("table");
    var tab=document.getElementById("tab");
        // table.innerHTML="我嘞个去";
        //加载套餐数据
        var objdbConn_Thali = new ActiveXObject("ADODB.Connection");    
        var strdsn_Thali = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Thali.Open(strdsn_Thali);    
		var objrs_Thali = objdbConn_Thali.Execute("SELECT Tname,Tprice FROM Thali");
        //加载报表数据
        var objdbConn_form = new ActiveXObject("ADODB.Connection");    
        var strdsn_form = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_form.Open(strdsn_form);    
		var objrs_form = objdbConn_form.Execute("SELECT Ftimes,Fnum,Fsum,timesum FROM Forms");
    if(!objrs_Thali.EOF){
        while(!objrs_Thali.EOF){
            str+="<tr><td>"+objrs_Thali.Fields(0).value+"</td>"+
            "<td>"+objrs_Thali.Fields(1).value+"</td>"+
            "<td>"+objrs_form.Fields(0).value+"</td>"+
            "<td>"+objrs_form.Fields(1).value+"</td></tr>";
            // str+="</tr>";
            sp[0].innerHTML="总购买量："+objrs_form.Fields(3).value;
            sp[1].innerHTML="总购买金额："+objrs_form.Fields(2).value;
            objrs_Thali.moveNext();
            objrs_form.moveNext();
        }
        table.innerHTML=str;
        var objrs_form = objdbConn_form.Execute("select Ftid,Ftimes,Fnum from Forms order by(Ftimes) desc");
        var objrs_Thali = objdbConn_Thali.Execute("SELECT Tname,Tprice FROM Thali where Tid='"+objrs_form.Fields(0).value+"'");
        s+="<tr><td>"+objrs_Thali.Fields(0).value+"</td>"+
        "<td>"+objrs_Thali.Fields(1).value+"</td>"+
        "<td>"+objrs_form.Fields(1).value+"</td>"+
        "<td>"+objrs_form.Fields(2).value+"</td></tr>";
        tab.innerHTML=s;
        
    }else{
        sp[0].innerHTML="暂无数据...";
    }
}

function Back(){
    window.history.back();//返回上一页 表单的内容会保留
}