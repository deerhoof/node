require(["../scripts/config.js"], function() {
	require(["jquery","swiper","cookie"], function($,Swiper,Cookie) {
		$(function() {
			//这里面写代码！！！！！！！！！！！！！！！！！！！！
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
          		url:"http://localhost:3000/api/product?dataName=home&start=1&count=4",
//        		请求到数据 如果成功返回data
          		success:function(data){
          			let str1 = '';
          			 //你需要4条数据,但是请求的数据是40条，只取4条
          			for(var i = 0;i <4; i++){
						  str1+=`<dl index="${data.page_data[i]._id}">
						  
						  <dt><img src="${data.page_data[i].detail.auth_icon}"/></dt>
						  <dd><p>${data.page_data[i].title}</p><span>${data.page_data[i].des}</span></dd>
						  </dl>`

          			}
          			 $(".Bnew").append(str1);
          			 
          		}
          	})
          	
          	
          	$.ajax({
          		url:"http://localhost:3000/api/product?dataName=home&start=2&count=4",
          		
                    success:function(data){
          			console.log(data)
          			let str2 = '';
          			for(let i = 0;i <4; i++){
	          			str2+=`<dl index="${data.page_data[i]._id}">
									<dt><img src="${data.page_data[i].detail.auth_icon}"/></dt>
									<dd><p>${data.page_data[i].title}</p><span>${data.page_data[i].des}</span></dd>
							</dl>`
          			}
          			 $(".Bhome").append(str2);
          		}
          	});
          	
          	
          	$(".Bnew").on("click","dl",function(){
          		location.href = "../xiangqing.html";
          		
          		
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


    