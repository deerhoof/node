require(["../scripts/config.js"], function() {
	require(["jquery"], function($) {
		$(function() {
			class Register{
				constructor(){
					this.url = "http://www.liyangyf.com/ctrl/register.php";	
					this.init();
				}
				init(){
					var that = this;
					$(".sub").click(function(){
						 that.load()
					})
				}
				load(){
					$.ajax({
						url:this.url,
						data:{
							tel:$(".txt1").val(),
							pass:$(".txt4").val()
					},	
					success:function(res){
						switch(res){
							case "0":$(".msg").html("重名");break;
							case "1":$(".msg").html("注册成功，3秒后跳转");
							setTimeout(()=>{
								console.log(res)
//								location.href = "login.html";
							},3000);
							break;
						    case "2":$(".msg").html("不允许为空");break;
						}
					}
					
					})
				}
				
			}
			
			new Register();
			
			
		})
	})
	})