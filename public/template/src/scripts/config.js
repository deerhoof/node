requirejs.config({
	//加载jq插件先设置依赖jq
	shim: {
		cookie: {
		    deps: ['jquery']
		},
		validate:{
			deps: ['jquery']
		},
		validatezh:{
			deps: ['jquery']
		}
   	},
	paths : {
		"jquery" : "../scripts/libs/jquery",
             		
		"swiper" : "../scripts/libs/swiper.min"	,
		
		"cookie" :"../scripts/libs/jquery.cookie",
		 
		
	}
});