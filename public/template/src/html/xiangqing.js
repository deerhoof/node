require(["../scripts/config.js"], function() {
	require(["jquery","cookie"], function($,Cookie) {
		$(function() {
			//读cookie
			 var goods=JSON.parse($.cookie("goods"))
			console.log(goods)
			 $.ajax({
			       url:"/goods/?category=31&offset=2&_=1551323570138",
			       success:function(data){
			       	var jsondata=JSON.parse(data)
			       
			       	var str1="";
				       	$.each(jsondata.data,function(index,value){
				       		
				       		$.each(goods,function(key,item){	
				       			
					       		if(value.id==item.id){
					       			
					       			str1 = `
						                       <img src="${value.big_pic}"/>
					                      `
					       				$(".box .lbox").append(str1)
				       	     var str2 = "";
				          	 str2 = ` <div class="rbox-one">
				                   <div class="sp1" index="${value.id}">
				                 	 <span>${value.title}</span>
				                 	 <p></p>
				                  </div>
				                  
				                  <div class="sp2">
				                 	<span class="wa">悠闲享受影院</span>
				                 	<p class="f">好评率</p>
				                  </div>
				                 </div>
				                 <div class="rbox-two">
				                 	<div class="sp1">
				                 	 <span>价格:</span>
				                 	 <p>${value.discount_price}</p>
				                 	</div>
				                 	
				                 	<div class="sp2">
				                 	 <span>配送地址:    </span>
				                 	 <p>请选择地址</p>
				                 	</div>
				                 </div>
				                 <div class="rbox-there">
				                 	<span>${value.prov_city}</span>
				                 	<p class="p1">-</p>
				                 	<p class="p2">1</p>
				                 	<p class="p3">+</p>
				                 </div>
				                 <div class="rbox-four">
				                 	<span>立即购买</span>
				                 	<span class="add">加入购物车</span>
				                 </div>`
				          	 $(".rbox").append(str2);
					       		}
				       		})
				       })
				       
				       
			       }
			 });
			 $(".rbox").on("click",".p3",function(event){
			 	
			 	console.log(this)
			 	//获取p2的值
//			 	var t=$(".p2").html()
               //p2的值加1是字符，转成数值  再将转后的值设置给p2 
			    $(".p2").html(parseInt($(".p2").html())+1)
//			 	
			 	
//			 	console.log(typeof(t),t)
			 })
			 
			 
			  $(".rbox").on("click",".p1",function(){
			    var s = parseInt($(".p2").html())
//			    console.log(s)
			  	if(s<=0){
			 	}else{
			 		var s = $(".p2").html(parseInt($(".p2").html())-1)
			 	}
			 	
			 })
			  
			$(".rbox").on("click",".add",function(){
				var id=$(this).parent().siblings(".rbox-one").children(".sp1").attr("index");
				var num=$(this).parent().siblings(".rbox-there").children(".p2").html();
				console.log(num)
				shoppingCart=JSON.parse($.cookie("shoppingCart"))||[]
				if(shoppingCart.length<1){
					shoppingCart.push({
						id:id,
						num:num,
						
					})
				}else{
					var onOff=true;
					$.each(shoppingCart,function(index,value){
						if(value.id==id){
							shoppingCart[index].num+=num;
							onOff=false;
						}
					})
					if(onOff){
						shoppingCart.push({
							id:id,
							num:num
						})
					}
					
				}
				$.cookie("shoppingCart",JSON.stringify(shoppingCart),{expires:7})
				console.log(JSON.parse($.cookie("shoppingCart")))
				
				
			})
			  
			 $(".rbox").on("click",".add",function(event){
			 	location.href = "../html/shopcar.html"; 
			 })
		})
	})
})	