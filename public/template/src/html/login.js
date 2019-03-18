require(["../scripts/config.js"], function() {
	require(["jquery"], function($) {
		$(function() {
			console.log($)
//			点击事件
//			获取输入框的信息
//			发送请求
//			接受结果
//			根据结果做出提示
			class Login{
				constructor(){
					this.url = "http://www.liyangyf.com/ctrl/login.php";
					this.init();
				}
				init(){
					var that = this;
				  $(".sub").click(function(){
				  	that.load();
				  })
				}
				//获取输入框信息
				 load(){
				 	var that = this;
				 	$.ajax({
				 		url:this.url,
				 		data:{
				 			user:$(".txt1").val(),
				 			pass:$(".txt2").val()
				 		},
				 		success:function(res){
				 			//res是字符
				 			switch(res){
				 				case "0": $(".msg").html("用户名密码不符");break;
				                case "1": $(".msg").html("请重新登录");break;
				                default:that.res = JSON.parse(res);
				                $(".msg").html("登录成功");
				                let success = JSON.parse(res)   
				                console.log(success)
				                if(success){
				                	location.href = "index.html";
//								console.log(111)
				                }
				                that.display()				               
				 			}
				 		}
				 	})
				 	
				 }
				 display(){
				 	console.log("this.res")
				 }
			}
			new Login();
			
			
			
			
        })
	})
})

//require(["../scripts/config.js"], function() {
//	require(["jquery","swiper"], function($,Swiper,) {
//		$(function() {