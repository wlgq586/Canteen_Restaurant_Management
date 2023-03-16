    // var btn;
    var meal;
    var price;
    var tbody;
    var s;
    var sum; 
    var str='';
    var Tstr='';
    var arr=[];
    var Ta=[];
    window.onload=function(){
        var table=document.getElementById("table");
        // table.innerHTML="我嘞个去";
        //加载菜品数据
        var objdbConn_Dining = new ActiveXObject("ADODB.Connection");    
        // <OBJECT   ID="CardActive"  TYPE="application/x-itst-activex" clsid="{CBA5D514-3544-4E87-80D2-F1582FA87841}"></OBJECT>
        // var objdbConn_Dining=document.all("CardActive");
        var strdsn_Dining = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Dining.Open(strdsn_Dining);    
		var objrs_Dining = objdbConn_Dining.Execute("SELECT Dname FROM Dishes");                  
        
        //加载价格数据
        var objdbConn_Price = new ActiveXObject("ADODB.Connection");    
        var strdsn_Price = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Price.Open(strdsn_Price);    
		var objrs_Price = objdbConn_Price.Execute("SELECT Dprice FROM Dishes");                 

        //加载菜品维生素数据
        var objdbConn_Dvitamin = new ActiveXObject("ADODB.Connection");    
        var strdsn_Dvitamin = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Dvitamin.Open(strdsn_Dvitamin);    
        var objrs_Dvitamin = objdbConn_Dvitamin.Execute("SELECT Dvitamin FROM Dishes");                 

        //加载搭配菜品数据
        var objdbConn_D = new ActiveXObject("ADODB.Connection");    
        var strdsn_D = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_D.Open(strdsn_D);   

        //加载菜品适用人群数据
        var objdbConn_Dpeople = new ActiveXObject("ADODB.Connection");    
        var strdsn_Dpeople = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Dpeople.Open(strdsn_Dpeople);    
        var objrs_Dpeople = objdbConn_Dpeople.Execute("SELECT Dpeople FROM Dishes");                

        //加载套餐数据
        var objdbConn_Thali = new ActiveXObject("ADODB.Connection");    
        var strdsn_Thali = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Thali.Open(strdsn_Thali);

		

        //加载菜品名1数据
        var objdbConn_Tdname = new ActiveXObject("ADODB.Connection");    
        var strdsn_Tdname = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Tdname.Open(strdsn_Tdname);    
		

        //加载菜品名2数据
        var objdbConn_TdnameS = new ActiveXObject("ADODB.Connection");    
        var strdsn_TdnameS = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_TdnameS.Open(strdsn_TdnameS);    


        //加载维生素数据
        var objdbConn_Vitamin = new ActiveXObject("ADODB.Connection");    
        var strdsn_Vitamin = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Vitamin.Open(strdsn_Vitamin);    


        //加载套餐价格数据
        var objdbConn_Tprice = new ActiveXObject("ADODB.Connection");    
        var strdsn_Tprice = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_Tprice.Open(strdsn_Tprice);    
		

        //加载适用人群数据
        var objdbConn_People = new ActiveXObject("ADODB.Connection");    
        var strdsn_People = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
        objdbConn_People.Open(strdsn_People);    

        var objrs_Thali = objdbConn_Thali.Execute("SELECT Tname,Tdname,TdnameS,Tvitamin,Tprice,Tpeople FROM Thali");                  // 输入本地的表
        // var objrs_Tdname = objdbConn_Tdname.Execute("SELECT Tdname FROM Thali");                  // 输入本地的表
        // var objrs_TdnameS = objdbConn_TdnameS.Execute("SELECT TdnameS FROM Thali");                  // 输入本地的表
        // var objrs_Vitamin = objdbConn_Vitamin.Execute("SELECT Tvitamin FROM Thali");                  // 输入本地的表
        // var objrs_Tprice = objdbConn_Tprice.Execute("SELECT Tprice FROM Thali");                  // 输入本地的表
        // var objrs_People = objdbConn_People.Execute("SELECT Tpeople FROM Thali");   
		

        if (!objrs_Dining.EOF){
            var i=0;  
            var j=0;
            // var k=0;
            str+="<tr>";
            Tstr+="<tr><td></td><td><h2 style='color:orange'>套餐</h2></td></tr><tr>";
           
            while (!objrs_Dining.EOF){//将菜品信息存入str中
                // var r1=Math.ceil(Math.random()*13)-1;//获取随机数
                // console.log(objrs_Price.Fields(0).Value);
                var v2=objrs_Dining.Fields(0).Value;
                arr.push(objrs_Dining.Fields(0).Value);
                arr.push(v2.substr(0,2));
                arr.push(v2.substr(v2.length-2,v2.length-1));

                var r=objrs_Price.Fields(0).Value;
                r=11.5-r;
                // var v1="'";
                // v1+=objrs_Dining.Fields(0).Value+"'";
                var objrs_D= objdbConn_D.Execute("SELECT Dname,Dprice FROM Dishes  where Dprice<="+r+" and Dname!='"+objrs_Dining.Fields(0).Value+"' ORDER BY NewID()");  //获取配套菜品数据，先根据价格筛选再利用随机抽取                
                // var objrs_Tdname = objdbConn_Tdname.Execute("SELECT Tdname FROM Thali where Tdname="+v1+" or TdnameS="+v1);                  // 输入本地的表
                var Dish_name=objrs_D.Fields(0).Value;
                var Dish_price=objrs_D.Fields(1).Value;
                objrs_D.moveNext();
                var Dish_name1=objrs_D.Fields(0).Value;
                var Dish_price1=objrs_D.Fields(1).Value;
                //取套餐名，截取每个菜品最后两个字进行拼接
                var origin_dish=objrs_Dining.Fields(0).Value;
                var Th=origin_dish.substr(origin_dish.length-2,origin_dish.length);
                var Th1=Dish_name.substr(Dish_name.length-2,Dish_name.length);
                var Th2=Dish_name1.substr(Dish_name1.length-2,Dish_name1.length);
                Th1+=Th;
                Th2+=Th;

                if(i%9==0&&i!=0){
                    str+="</tr>"+
                    "<tr>"
                }  
                // console.log(i);
                str+="<td class='td'>"+
                "<span style='position: relative; top: 0; left: 0px;'><span class='mea'>"+objrs_Dining.Fields(0).Value+"</span>:<span class='pric'>"+objrs_Price.Fields(0).Value+"</span>元<button onclick='btn("+i+")' type='button' style='width: 2em;'>+</button></span>"+
                "<div class='box1'>"+
                    "<div class='imgbx'>"+
                        "<img src='image/order_img/"+(i/3+1)+".jpeg'>"+                                 
                    "</div>"+
                    "<div class='content'>"+
                    "推荐一:"+Th1+"</br><span style='position: relative; top: 0; left: 0px;'><span class='mea'>"+Dish_name+"</span>:<span class='pric'>"+Dish_price+"</span>元<button onclick='btn("+(++i)+")' type='button' style='width: 2em;'>+</button></span></br></br>"+
                    "推荐二:"+Th2+"</br><span style='position: relative; top: 0; left: 0px;'><span class='mea'>"+Dish_name1+"</span>:<span class='pric'>"+Dish_price1+"</span>元<button onclick='btn("+(++i)+")' type='button' style='width: 2em;'>+</button></span>"+
                    "</div>"+
                "</div>"+
            "</td>";

                i++; 
                objrs_Dining.moveNext();
                objrs_Price.moveNext();
                objrs_Dpeople.moveNext();
                objrs_Dvitamin.moveNext();
                
                }
            }
            // console.log(i);
            while(!objrs_Thali.EOF){//将套餐里的信息存入Tstr中
                arr.push(objrs_Thali.Fields(0).Value);
                if(j%3==0&&j!=0){
                    Tstr+="</tr>"+
                    "<tr>";
                }  
                // Ta.push(objrs_Thali.Fields(0).Value);  
                Tstr+="<td class='td'>"+
                "<span style='position: relative; top: 0; left: 0px;'><span class='mea'>"+objrs_Thali.Fields(0).Value+"</span>:<span class='pric'>"+objrs_Thali.Fields(4).Value+"</span>元<button onclick='btn("+i+")' type='button' style='width: 2em;'>+</button></span>"+
                "<div class='box1'>"+
                    "<div class='imgbx'>"+
                        "<img src='image/order_img/Thali.jpg'"+                                 
                    "</div>"+
                    "<div class='content'>"+
                    "<p style='color:red'>菜1:  "+objrs_Thali.Fields(1).Value+"</p>"+
                    "<p style='color:red'>菜2:  "+objrs_Thali.Fields(2).Value+"</p>"+
                        "<p style='color:lightgreen'>维生素：<br>"+objrs_Thali.Fields(3).Value+"</p>"+
                        "<p style='color:lightgreen'>适用人群：<br>"+objrs_Thali.Fields(5).Value+"</p>"+
                    "</div>"+
                "</div>"+
            "</td>";
            j++;i++;
            objrs_Thali.moveNext();
            }
            
            str+="</tr>";
            Tstr+="</tr>";
            str+=Tstr;
            table.innerHTML=str;
        var url=decodeURI(location.search);
        var dd;
        var dd1;
        var dd2;
        var str;
        var strs;
        if(url.indexOf("?"!=-1)){//undefined
            str=url.substr(1);
            strs=str.split("=");
            dd=strs[1];
            dd1=strs[2];
            dd2=strs[3];
        }
        
            let d1=document.getElementById('user');
            let d2=document.getElementById('money');
            d1.innerHTML=dd1;
            d2.innerHTML=dd2;
        meal=document.getElementsByClassName('mea');
        price=document.getElementsByClassName('pric');
        // price=document.getElementsByClassName('price');
        tbody=document.getElementsByTagName('tbody')[0];
        s=[];
        sum=document.getElementById('sum');
        getsum();//调用计算总价函数
    //以下代码适用edge浏览器，IE浏览器会先循环i导致错误，所以直接封装一个按钮函数
    //     console.log("i1:"+i);
    //     while(i<btn.length){
    //         console.log("i2:"+i);
    //         var k=i;
    //     btn[i].onclick=function(){  
    //         console.log("k:"+k);
    //         console.log(meal[i].innerHTML);
    //     let str='';
    //     // let m=parseFloat(sum.innerText);
    //     // console.log(m);
    //     let obj={meal:meal[i].innerHTML,price:price[i].innerHTML};
    //     s.push(obj);
    //      console.log(obj);
    // // m+=parseFloat(price[i].innerText);
    // for(let j=0;j<s.length;j++){
    //     str+="<tr class='newTr'>"+
    //     "<td>"+s[j].meal+"</td>"+
    //     "<td class='p'>"+s[j].price+"</td>"+
    //     "<td onclick='del("+j+")'>取消</td>"+
    //     "</tr>";
    // }
    //IE11不能使用箭头函数，用以上函数替代
    // s.forEach((item,index)=>{
    //     str+="<tr class='newTr'>"+
    //     "<td>"+item.meal+"</td>"+
    //     "<td class='p'>"+item.price+"</td>"+
    //     "<td onclick='del("+index+")'>取消</td>"+
    //     "</tr>";
    // })
    
    }
// }} 


    function getsum(){//总计的方法
        let p=document.getElementsByClassName('p');
        // console.log("p:"+p.length);
        let pricesum=0;
        for(let j=0;j<p.length;j++){
                pricesum+=parseFloat(p[j].innerHTML);
        }
        sum.innerHTML=pricesum;
    }
//删除一条信息
    function del(index){
        //先删除数组中的这条信息
        s.splice(index,1);      
        Ta.splice(index,1); 
        //再删除tbody里的这条信息
        let res=document.getElementsByClassName('newTr')[index];
        // console.log(res.price.innerHTML);
        
        tbody.removeChild(res);
        let str='';
        for(let i=0;i<s.length;i++){
            str+="<tr class='newTr'>"+
            "<td>"+s[i].meal+"</td>"+
            "<td class='p'>"+s[i].price+"</td>"+
            "<td onclick='del("+i+")'>取消</td>"+
            "</tr>";
        }
        //IE11不能使用箭头函数，用以上函数替代
        // s.forEach((item,index)=>{
        //     str+="<tr class='newTr'>"+
        //     "<td>"+item.meal+"</td>"+
        //     "<td class='p'>"+item.price+"</td>"+
        //    "<td onclick='del("+index+")'>取消</td>"+
        //     "</tr>";
        // })
        // console.log(str);
        tbody.innerHTML=str; 
        //再算总价
        getsum();//调用计算总价函数
    }
    function btn(t){ //按钮函数 
        var str='';
        let obj={meal:meal[t].innerHTML,price:price[t].innerHTML};
        s.push(obj);
        // console.log(obj);
    // m+=parseFloat(price[i].innerText);
        for(let j=0;j<s.length;j++){
            str+="<tr class='newTr'>"+
            "<td>"+s[j].meal+"</td>"+
            "<td class='p'>"+s[j].price+"</td>"+
            "<td onclick='del("+j+")'>取消</td>"+
            "</tr>";
            Ta.push(s[j].meal);//将点的菜存入Ta中，后用
        }
        // console.log(str);
        tbody.innerHTML=str;   
        // sum.innerHTML=m; 
        getsum();//调用计算总价函数
    }

    function urlhtml(){
        var username=document.getElementById('user');
        var money=document.getElementById('money');
        window.location.href="index.html?xm=true="+username.innerHTML+"="+money.innerHTML;
    }

    var ordersubmit=document.getElementsByClassName("ordersubmit");
    var timer=null;
    var p=0.05;
    var op=1;
    //支付账单函数
    ordersubmit[0].onclick=function(){
        // console.log("111");
        console.log("Ta:"+Ta[0]);
        var con=confirm("确定支付吗？");
        console.log(con);
        if(con==true){
            //先获取登录状态
            var username=document.getElementById('user');
            var money=document.getElementById('money');
            // var fail=document.getElementsByClassName("fail");
            console.log(username.innerHTML);
            console.log(money.innerHTML);
            if(username.innerHTML=='undefined'){
                alert("还未登录，麻烦请先登录^-^ !");
            }
            
            else{
                //判断是否点了菜
                if(tbody.innerHTML=='')
                {
                    alert("您还未选择任何菜品！");
                }
                else{
                    var m=sum.innerHTML;
                    //再获取余额，再将支付后的余额上传数据库
                    //比较订单金额和卡里的余额
                    if(Number(m)>Number(money.innerHTML)){
                        alert("余额不足啦^<^");
                    }
                    else{
                        var success=document.getElementById("success");
                        success.style.display='block';
                        
                        success.style.opacity=1;
                        //IE浏览器不支持回调函数，也就是不能使用箭头函数
                            // timer=setTimeout(function() {
                            //     success.style.opacity=0;
                            // }, 150);
                        
                        // clearTimeout(timer);
                        // tbody=document.getElementsByTagName('tbody')[0];
                        // tbody.innerHTML='';
                        //更改数据库里用户的余额
                        var objdbConn_m = new ActiveXObject("ADODB.Connection");    
                        var strdsn_m = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
                        objdbConn_m.Open(strdsn_m);    
                        objdbConn_m.Execute("update Card set Caremain-="+m+" where Caid=(select Cid from Consumer where Cname='"+username.innerHTML+"')");
                        money.innerHTML-=m;
                        //更新报表数据
                        // var fo=document.getElementById("");
                        // console.log(tbody);
                        var objdbConn_f = new ActiveXObject("ADODB.Connection");    
                        var strdsn_f = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
                        objdbConn_f.Open(strdsn_f);   

                        var objdbConn_p = new ActiveXObject("ADODB.Connection");    
                        var strdsn_p = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;User ID=sa;Initial Catalog=Dining_room;Data Source=DESKTOP-45OAU5I"; 
                        objdbConn_p.Open(strdsn_p);    
                        var y=0;
                        for(y=0;y<tbody.childNodes.length;y++){
                            console.log(tbody.childNodes[y].childNodes[0].innerHTML);
                            for(var z=0;z<Ta.length;z++){
                                
                                if(Ta[z]==tbody.childNodes[y].childNodes[0].innerHTML){//如果买了套餐
                                    // console.log(tbody.childNodes[y].childNodes[0].innerHTML);
                                    
                                    objdbc_p=objdbConn_p.Execute("select Tprice from Thali where Tname='"+Ta[z]+"'");
                                    alert(objdbc_p.Fields(0).value);
                                    objdbConn_f.Execute("update Forms set Ftimes=Ftimes+1 where Ftid=(select Tid from Thali where Tname='"+Ta[z]+"')");//次数加1
                                    objdbConn_f.Execute("update Forms set Fnum=Ftimes*"+parseFloat(objdbc_p.Fields(0).value)+" where Ftid=(select Tid from Thali where Tname='"+Ta[z]+"')");//小计加1份的金额
                                }
                            }
                        }
                        //更新报表总购买次数以及总购买金额
                        objdbConn_f.Execute("update Forms set timesum=(select sum(Ftimes) from Forms)");//总购买次数
                        objdbConn_f.Execute("update Forms set Fsum=(select sum(Fnum) from Forms)");//总金额
                    }
                    // console.log(m);
                }
            }
        }
        
        else{
            var fail=document.getElementById("fail");
            fail.style.display='block';
            fail.style.opacity=1;
            //IE浏览器不支持回调函数，也就是不能使用箭头函数
            timer=setTimeout(function() {
                    fail.style.opacity=0;
                }, 1500);

            clearTimeout(timer);
        }

    }

    function MS(){
        var meishi=document.getElementById("meishi");
        meishi.style.display='block';
    }

    function qx(){
        var meishi=document.getElementById("meishi");
        meishi.style.display='none';
    }

    

    var input=document.getElementById('val');
        var show=document.getElementById('show');
        input.onkeyup=function(){
            show.style.display='block';
            //input.value和arr的每一项匹配indexof() 匹配不到就会返回-1
            var str='';
            arr.forEach(function(item){
                var res=item.indexOf(input.value);
                if(res!=-1){
                    str+="<p style='cursor:pointer' onclick=ress('"+item+"')>"+item+"<p>";
                }
            })
            if(!str||!input.value)
            {
                show.innerHTML='<p>暂无结果<p>';
            }
            else{
                show.innerHTML=str;
            }
        }
        // input.onblur=function(){
        //     show.style.display='none';
        //     input.value='';
        // }
        function ress(item){
            // console.log(item);
            input.value=item;
        }

        // var subt=document.getElementById('subt');
        function subt(){//查询按钮
            var text=document.getElementById("val");
            // console.log(text.value);、
            var td=document.getElementsByClassName("td");
            for(var d=0;d<td.length;d++){
                    // console.log(td[d].innerHTML);
                // console.log(td[d].childNodes[0].childNodes[0].innerHTML);
                if(text.value===''){
                    td[d].style.display='inline';
                }
                var res=td[d].childNodes[0].childNodes[0].innerHTML.indexOf(text.value);
                if(res!=-1){//不包含这个值就会为-1
                    td[d].style.display='block';//显示匹配到的菜品
                }else{
                    td[d].style.display='none';
                }
            }
    }

    //二级菜单响应
    var ej=document.getElementsByClassName("ej");
    var eja=document.getElementsByClassName("eja");
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
    
    
        
  

    
    

