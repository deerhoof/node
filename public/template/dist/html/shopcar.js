require(["../scripts/config.js"], function() {
	require(["jquery","cookie"], function($,Cookie) {
		$(function() {
			//读取cookie
			var  shoppingCart = JSON.parse($.cookie("shoppingCart"))
            var zj=0;
            
            $.ajax({
            	url:"http://localhost:3000/api/product?dataName=home",
            	success:function(data){
            		
            		var str1 = "";
            		var str2 = "";
            		
            		$.each(data.page_data,function(index,value){
						console.log(value)
            			$.each(shoppingCart,function(key,item){
							console.log(item)
            				let old = parseInt(value.original_price)
            				let now = parseInt(value.original_price)
            				
            				if((old-now)<0){
            					var discounts = old;
            				}else{
            					var discounts =old - now;
            				}
            				
            				if(item.id == value._id){
							
            					zj+=value.discount_price * item.num
            					str1 +=`	<div class="bbox">
												<p></p>
												<img src="${value.detail.auth_icon}" />
												<span>${value.title}</span>
												<span>尺码：34</span>
												<span>${value.des}</span>
												<span>-</span><span>${parseInt(item.num)}</span><span>+</span>
												
												<span>$5</span>
												<span>小计</span>
												
											</div>`
										$(".box").append(str1);
										console.log(typeof(parseInt(item.num)))
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