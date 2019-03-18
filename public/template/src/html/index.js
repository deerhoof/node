require(["../scripts/config.js"], function() {
	require(["jquery","swiper","cookie"], function($,Swiper,Cookie) {
		$(function() {
			//这里面写代码！！！！！！！！！！！！！！！！！！！！
			console.log(Swiper)
			$("nav").find("li").children("a").click(function(){
				console.log(1);
			   $(this).css({"color":"red"}).siblings(".homemore").css({"display":"block"})  
			})
			
			$("nav").find("li").mouseleave(function(){
				console.log(1);
			   $(this).children(".homemore").css({"display":"none"}).siblings("a").css({"color":"#000"})
			})
			var mySwiper = new Swiper('.swiper-container', {
			  autoplay:true,//等同于以下设置
			  /*autoplay: {
			    delay: 3000,
			    stopOnLastSlide: false,
			    
			    disableOnInteraction: true,
			    },*/
			})
   
           $(".UL").find("li").mouseover(function(){
          
           	$(this).children("div").css({"display":"block"}).parent("li").siblings().children("div").css({"display":"none"})
           	 	
           })
           
          
           
           
          	$.ajax({
          		url:"/goods/?category=31&offset=2&_=1551323570138",
//        		请求到数据 如果成功返回data
          		success:function(data){
          			//data打印看一下就好了
          			console.log(data)
          			//data出来的数据需要转为JSON对象
          			var jsondata = JSON.parse(data).data
          			console.log(JSON.parse(data))
          	console.log(jsondata)
          			//首先let一个空字符串
          			let str1 = '';
          			 //你需要4条数据,但是请求的数据是40条，只取4条
          			for(let i = 0;i <4; i++){
	          			str1+=`<dl index="${jsondata[i].id}">
	          			 
							<dt><img src="${jsondata[i].big_pic}"/></dt>
							<dd><p>${jsondata[i].title}</p><span>${jsondata[i].discount_price}</span></dd>
						</dl>`
	          			console.log(jsondata[i].id)
          			}
          			 $(".Bnew").append(str1);
          			 
          		}
          	})
          	
          	
          	$.ajax({
          		url:"/goods/?category=31&offset=2&_=1551323570138",
          		
                    success:function(data){
          			console.log(data)
          			var jsondata = JSON.parse(data).data
          	console.log(jsondata)
          			let str2 = '';
          			for(let i = 5;i <9; i++){
	          			str2+=`<dl>
									<dt>
										<img src="${jsondata[i].big_pic}"/>
									</dt>
									<dd>
										<p>${jsondata[i].title}</p><span>${jsondata[i].discount_price}</span>
									</dd>
							</dl>`
          			}
          			 $(".Bhome").append(str2);
          		}
          	});
          	
          	
          	$(".Bnew").on("click","dl",function(){
          		location.href = "../html/xiangqing.html";
          		
          		
          		var id=$(this).attr("index");
          	     console.log(1);

          		goods=JSON.parse($.cookie("goods")) || [];
          		goods.shift();
          		goods.push({
          			id:id
          		})
          		//存cookie
          		$.cookie("goods",JSON.stringify(goods),{expires:7})
          		console.log($.cookie("goods"))
          	})
          	
          	
          	
         
 		})
 	})
})


    