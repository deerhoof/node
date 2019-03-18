require(["../scripts/config.js"], function() {
	require(["jquery","cookie"], function($,Cookie) {
		$(function() {
			//读取cookie
			var  shoppingCart = JSON.parse($.cookie("shoppingCart"))
            var zj=0;
            
            $.ajax({
            	url:"/goods/?category=31&offset=2&_=1551323570138",
            	success:function(data){
            		var jsondata = JSON.parse(data).data
            		var str1 = "";
            		var str2 = "";
            		$.each(jsondata,function(index,value){
            		
            			$.each(shoppingCart,function(key,item){
            				console.log(value)
            				let old = parseInt(value.original_price)
            				let now = parseInt(value.original_price)
            				
            				if((old-now)<0){
            					var discounts = old;
            				}else{
            					var discounts =old - now;
            				}
            				
            				if(item.id == value.id){
            					zj+=value.discount_price * item.num
            					str1 +=`	<div class="bbox">
												<p></p>
												<img src="${value.big_pic}" />
												<span>${value.title}</span>
												<span>尺码：34</span>
												<span>${value.discount_price}</span>
												<span>-</span><span>${parseInt(item.num)}</span><span>+</span>
												<span>$5</span>
												<span>小计</span>
												<span class="remov">删除</span>
												
											</div>`
            					        $(".box").append(str1);
            					    var str2 = "";   
            					     str2+=`<span>总计：</span>
											<span>${value.discount_price*item.num}</span>
											<p>去结算</p>`
            					    $(".js").append(str2);
            				}
            			})
            		})
            	}
            });



         $(".box").on("click",".remov",function(){
         	$(this).parent(".bbox").remove();
         })

       })
	})
})	