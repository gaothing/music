$(function() {
//	喜欢收藏
var col=["&#xe610;","&#xe615;"];
var c=0;
 $(".collect").on("click",function(){
 	$(".mylike .collect").css("color","#fff")
 	if(c==1){
 		c=0
 	}else if(c==0){
 		c=1
 		$(".mylike .collect").css("color","orange")
 	}
	$(".mylike .collect").html(col[c])
	
})
	//	播放模式
	var mode = ["&#xe626;", "&#xe614;", "&#xe67c;"]
	var s = 0;
	$(".improt").find(".mode").on("click", function() {
			if(s > mode.length) {
				s = 0
			}
			$(mode).each(function(i, v) {
				$(".improt").find(".mode").html(mode[s])

			})
			s = s + 1
		})
		///////////////////////
		//歌曲列表
	var index = 0;
	var data = [{
		song: "旅行的意义",
		src: "music/旅行的意义.mp3",
		name: "刘若英"
	}, {
		song: "天空之城",
		src: "music/天空之城.mp3",
		name: "石久让"
	}, {

		song: "幸福的错觉",
		name: "任重",
		src: "music/幸福的错觉.mp3",

	}, ]
	var list = $(".mune")
		//  ........................
	function render() {
		list.on("click", function() {
			$(".mid1").empty();
			$(".progress").toggleClass("jingdu");
			$(".mid1").toggleClass("mid6").toggleClass("mid2")
			$(".mid4").toggleClass("mid5").toggleClass("mid3")
			$(data).each(function(i, v) {
				$('<li class="list"><h1>' + v.song + '</h1><p>' + v.name + '</p></li>').appendTo($(".mid1"))
				index = $(this).index();
				//			................
			})
		})
	}
	render()
		//	................
		//下一首

	$(".cir-right").on("click", function() {
		var indexs = index + 1;
		if(indexs > data.length) {
			indexs = 0;
		}

		audio.src = data[indexs].src;
		audio.play();

		index = indexs;
	})

	//上一首

	$(".cir-left").on("click", function() {
			var indexs = index - 1;
			if(indexs < 0) {
				indexs = 2;
			}

			audio.src = data[indexs].src;
			audio.play();

			index = indexs;
		})
		//  .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	var audio = $("#audio").get(0);
	var prev = $(".cir-left");
	var next = $(".cir-right");
	var stop = $(".play");

	//	/ >>>>>>>>>>>>>>>点击播放暂停>>>>>>>>>>>>>>>>>>>>>>>
	stop.on("click", function() {
		console.log(1)
		if(audio.paused) {
			audio.play()
		} else {
			audio.pause()
		}
	})
	$(audio).on("play", function() {
		stop.html("&#xe638;")
	})
	$(audio).on("pause", function() {
			stop.html("&#xe640;")
		})
		//	>>>>>>>>>>>>>>>>>>音量点击\拖拽>>>>>>>>>>>>>>>>>>>
	var progress = $(".progress");
	var go = $(".go");
	var pro = $(".pro");
	var pi = $(".pi");
	var durition = $(".durition");

	//------------------时间进度数--------
	//时间转化
	function format(v) {
		var m = parseInt(v / 60)
		var s = (parseInt(v) % 60) >= 10 ? (parseInt(v) % 60) : "0" + (parseInt(v) % 60);
		return m + ":" + s
	}
	$(audio).on("timeupdate", function() {
			$(".durition").text(format(audio.duration))
				//  获取总时长
			go.text(format(audio.currentTime));
			var left = (pro.width() - $(".pi").width() / 2) * (audio.currentTime / audio.duration)
			pro.find(".pi").css("left", left)
			$(".jin").css("width", left)
		})
		///////////////////////////进度条点击和动//////////////////////////////////
	pro.on("click", false)
	pro.on("click", function(e) {
		audio.currentTime = audio.duration * (e.offsetX / $(this).width())
		audio.play()
	})
	$(document).on('mousedown', false);
	pi.on("mousedown", function(e) {
		var px = $(this).offsetParent().offset().left
		var w = e.offsetX
			// console.log(w)
			// console.log(px)
		$(document).on('mousemove', false);
		$(document).on("mousemove", function(e) {
			var ow = e.clientX;
			// console.log(ow)
			if((ow - px - w) > progress.width()) {
				return
			}
			audio.currentTime = audio.duration * ((ow - px - w) / progress.width())
			$(document).on("mouseup", function() {
				$(document).off("mousemove")
				$(document).off("mouseup")
				return false
			})
		})

	})

	//	.................
	//	开始下载
	$(audio).on("loadstart", function() {

	})

	$(audio).on("progress", function() {
		})
		//	缓存结束，可以播放
	$(audio).on("canplay", function() {

			$(".header").find("span").text(data[index].song)
		})
		//	播放函数
	$(audio).on("play", function() {
		$(".mid").find("h1").css("color","#fff").eq(index).css("color","orange")
		$(".mid").find("p").css("color","#E7E6EA").eq(index).css("color","orange")
		})
		//	事件改变函数
	$(audio).on("timeupdate", function() {

	})
	$(audio).on("seek", function() {

		})
		//	暂停函数
	$(audio).on("pause", function() {

		})
		////	结束函数
	$(audio).on("ended", function() {
		
			audio.play()
		})
		//		..........................	

	//背景图
	var n = 0;
	var next = 0;
	var flag = true;
	var width = $(".datu").width();
	var t = setInterval(move, 5000);

	function move() {
		next = n + 1;
		if(!flag) {
			return;
		};
		flag = false;
		if(next >= $(".lis").length) {
			next = 0;
		};
		$(".lis").eq(next).css("opacity", 0).end().eq(n).animate({
			opacity: 0
		}, 1000, function() {
			flag = true;
		}).end().eq(next).animate({
			opacity: 1
		}, 1000, function() {
			flag = true;
		});

		n = next
	}
	//	>..........左右滑动...........
	var first_ob;
//	$(document).on('touchstart', false);
	$(document).on("touchstart", function(e) {
		first_ob = e.originalEvent.changedTouches[0].clientX;
		console.log(first_ob)
	})
//	$(document).on('touchend', false);
	$(document).on("touchend", function(e) {
		var last_ob = e.originalEvent.changedTouches[0].clientX;
		if(last_ob - first_ob > 50) {
			$(".mid1").romoveClass("mid6").addClass("mid2")
			$(".mid4").romoveClass("mid5").addClass("mid3")
		}
		if(last_ob - first_ob < -50) {
			$(".mid1").addClass("mid6").romoveClass("mid2")
			$(".mid4").addClass("mid5").romoveClass("mid3")
		}

	})
})