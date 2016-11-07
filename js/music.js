$(function() {
	//	喜欢收藏
	var col = ["&#xe610;", "&#xe615;"];
	var c = 0;
	$(".collect").on("click", function() {
			$(".mylike .collect").css("color", "#fff")
			if(c == 1) {
				c = 0
			} else if(c == 0) {
				c = 1
				$(".mylike .collect").css("color", "orange")
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
		id: "1",
		song: "背影",
		name: "林宥嘉",
		src: "music/背影.mp3",
		alltime: "5:54",
		lyrics: [{
			time: "0:02",
			lyric: "背影"
		}, {
			time: "0:13",
			lyric: "林宥嘉"
		}, {
			time: "0:30",
			lyric: ""
		}, {
			time: "0:31",
			lyric: "三公分阳光 三公分空气"
		}, {
			time: "0:39",
			lyric: "堵在眼前像一面 玻璃"
		}, {
			time: "0:46",
			lyric: "挡住了你表情 剩下 只有脚印"
		}, {
			time: "1:02",
			lyric: "一直向前走 走不完距离"
		}, {
			time: "1:10",
			lyric: "一直想后退不出回忆"
		}, {
			time: "1:17",
			lyric: "很高兴有心事 帮我困住自己"
		}, {
			time: "1:28",
			lyric: ""
		}, {
			time: "1:33",
			lyric: "你头发上淡淡青草香气"
		}, {
			time: "1:40",
			lyric: "变成了风才能和我相遇"
		}, {
			time: "1:48",
			lyric: "你的目光 蒸发成云"
		}, {
			time: "1:56",
			lyric: "再下成雨我才能够靠近"
		}, {
			time: "2:02",
			lyric: ""
		}, {
			time: "2:02",
			lyric: "感谢我不可以 住进你的眼睛"
		}, {
			time: "2:10",
			lyric: "所以才能 拥抱你的背影"
		}, {
			time: "2:18",
			lyric: "有再多的遗憾 用来牢牢记住"
		}, {
			time: "2:26",
			lyric: "不完美 的所有美丽"
		}, {
			time: "2:33",
			lyric: "感谢我不可以 拥抱你的背影"
		}, {
			time: "2:41",
			lyric: "所以才能 变成你的背影"
		}, {
			time: "2:49",
			lyric: "躲在安静角落 不用你回头看"
		}, {
			time: "2:59",
			lyric: "不用珍惜"
		}, {
			time: "3:05",
			lyric: ""
		}, {
			time: "3:33",
			lyric: "我怀里所有温暖的空气"
		}, {
			time: "3:41",
			lyric: "变成风也不敢和你相遇"
		}, {
			time: "3:48",
			lyric: "我的心事 蒸发成云"
		}, {
			time: "3:56",
			lyric: "再下成雨却舍不得淋湿你"
		}, {
			time: "4:02",
			lyric: ""
		}, {
			time: "4:03",
			lyric: "感谢我不可以 住进你的眼睛"
		}, {
			time: "4:10",
			lyric: "所以才能 拥抱你背影"
		}, {
			time: "4:18",
			lyric: "有再多的遗憾 用来牢牢记住"
		}, {
			time: "4:27",
			lyric: "不完美 的所有美丽"
		}, {
			time: "4:34",
			lyric: "感谢我不可以 拥抱你的背影"
		}, {
			time: "4:41",
			lyric: "所以才能 变成你的背影"
		}, {
			time: "4:49",
			lyric: "躲在安静角落 不用你回头看"
		}, {
			time: "4:59",
			lyric: "不用珍惜"
		}, {
			time: "5:04",
			lyric: ""
		}, {
			time: "5:05",
			lyric: "感谢我不可以 拥抱你的背影"
		}, {
			time: "5:12",
			lyric: "所以才能 变成你的背影"
		}, {
			time: "5:20",
			lyric: "躲在安静角落 如果你回头看"
		}, {
			time: "5:30",
			lyric: "不用在意"
		}, {
			time: "5:35",
			lyric: ""
		}, {
			time: "5:41",
			lyric: "背影"
		}]
	}, {
		song: "天空之城",
		src: "music/天空之城.mp3",
		name: "石久让"
	}, {
		id: "1",
		song: "幸福的错觉",
		name: "任重",
		src: "music/幸福的错觉.mp3",
		alltime: "4:36",
		lyrics: [{
			time: "0:00",
			lyric: " "
		}, {
			time: "0:01",
			lyric: "幸福的错觉"
		}, {
			time: "0:02",
			lyric: " "
		}, {
			time: "0:03",
			lyric: "演唱：任重"
		}, {
			time: "0:04",
			lyric: "作曲：祁勃力"
		}, {
			time: "0:06",
			lyric: "作词：樊凡 孙艺 祁勃力"
		}, {
			time: "0:08",
			lyric: ""
		}, {
			time: "0:18",
			lyric: "祝福明天"
		}, {
			time: "0:21",
			lyric: "我不该就这样走远"
		}, {
			time: "0:25",
			lyric: "假设了千万遍"
		}, {
			time: "0:27",
			lyric: "又如何能改变"
		}, {
			time: "0:32",
			lyric: "我们的这些天"
		}, {
			time: "0:35",
			lyric: "我回想你的脸"
		}, {
			time: "0:37",
			lyric: "怎么说再见"
		}, {
			time: "0:40",
			lyric: "画面 冻结在一瞬间"
		}, {
			time: "0:46",
			lyric: ""
		}, {
			time: "0:47",
			lyric: "时间 留下了无解的思念"
		}, {
			time: "0:55",
			lyric: "回忆敌不过"
		}, {
			time: "0:58",
			lyric: "距离的遥远"
		}, {
			time: "1:01",
			lyric: "那些往昔"
		}, {
			time: "1:04",
			lyric: "如童话般美丽的记忆"
		}, {
			time: "1:10",
			lyric: "如今 却已散落一地"
		}, {
			time: "1:16",
			lyric: ""
		}, {
			time: "1:16",
			lyric: "怎样才可以"
		}, {
			time: "1:19",
			lyric: "说服了我自己"
		}, {
			time: "1:24",
			lyric: "我们拥有的曾经"
		}, {
			time: "1:28",
			lyric: "并不算爱情"
		}, {
			time: "1:31",
			lyric: "为什么忽然间"
		}, {
			time: "1:35",
			lyric: "我差一点相信"
		}, {
			time: "1:39",
			lyric: "完美的结局"
		}, {
			time: "1:41",
			lyric: "属于我和你"
		}, {
			time: "1:45",
			lyric: ""
		}, {
			time: "1:45",
			lyric: "怎样才可以"
		}, {
			time: "1:48",
			lyric: ""
		}, {
			time: "1:54",
			lyric: "彻底把过去"
		}, {
			time: "1:56",
			lyric: "在心底抹去"
		}, {
			time: "2:00",
			lyric: "如果说那幸福"
		}, {
			time: "2:04",
			lyric: "不过都是错觉"
		}, {
			time: "2:09",
			lyric: "为何有微笑"
		}, {
			time: "2:11",
			lyric: "留在照片里"
		}, {
			time: "2:15",
			lyric: " "
		}, {
			time: "2:16",
			lyric: " "
		}, {
			time: "2:41",
			lyric: "时间 留下了无解的思念"
		}, {
			time: "2:49",
			lyric: "回忆敌不过"
		}, {
			time: "2:51",
			lyric: "距离的遥远"
		}, {
			time: "2:56",
			lyric: "那些往昔"
		}, {
			time: "2:58",
			lyric: "如童话般美丽的记忆"
		}, {
			time: "3:04",
			lyric: "如今 却已散落一地"
		}, {
			time: "3:10",
			lyric: " "
		}, {
			time: "3:10",
			lyric: "怎样才可以"
		}, {
			time: "3:13",
			lyric: "说服了我自己"
		}, {
			time: "3:19",
			lyric: "我们拥有的曾经"
		}, {
			time: "3:22",
			lyric: "并不算爱情"
		}, {
			time: "3:25",
			lyric: "为什么忽然间"
		}, {
			time: "3:29",
			lyric: "我差一点相信"
		}, {
			time: "3:34",
			lyric: "完美的结局"
		}, {
			time: "3:35",
			lyric: "属于我和你"
		}, {
			time: "3:40",
			lyric: " "
		}, {
			time: "3:40",
			lyric: "怎样才可以"
		}, {
			time: "3:43",
			lyric: "说服了我自己"
		}, {
			time: "3:48",
			lyric: "彻底把过去"
		}, {
			time: "3:51",
			lyric: "在心底抹去"
		}, {
			time: "3:55",
			lyric: "如果说那幸福"
		}, {
			time: "3:59",
			lyric: "不过都是错觉"
		}, {
			time: "4:03",
			lyric: "为何有微笑"
		}, {
			time: "4:06",
			lyric: "留在照片里"
		}]
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
				$('<li class="list"><h1>' + v.song + '</h1><p>' + v.name + '<b>&#xe60e;</b></p></li>').appendTo($(".mid1"))
				index = $(this).index();
				//			................
			})
		})
	}
	render()
		//、、、、、、、、、、、、、、、、、、、、、
		//列表双击事件  双击开始播放当前歌曲以及一系列的页面效果
	$(".mid1").on("dblclick", "li", function() {
			//      clearInterval(t)
			index = $(this).index()
			console.log(0)
			audio.src = data[index].src;
			$(".mid4 .lyric").empty()
			$(data[index].lyrics).each(function(i, v) {
					$("<p class=" + i + ">" + v.lyric + "</p>").appendTo($(".mid4 .lyric"))
				})
				//      t=setInterval(move,5000)
			audio.play()

		})
		//删除单首歌曲
	$(".mid1").on("click", "b", function() {
			var lin = $(this).closest("li").index()
				//  	var dele=[]
				//  	  $(data).each(function(i,v){
				//  	  	if(!i==lin){
				//  	  		dele.push(data[i])
				//  	  	}
				//  		 data=dele
				//  	  })

			$(this).closest("li").remove()
		})
		//	................
		//下一首

	$(".cir-right").on("click", function() {
		index += 1;
		if(index >= data.length) {
			index = 0;
		}
		console.log(index)
		audio.src = data[index].src;
		$(".mid4 .lyric").empty()
		$(data[index].lyrics).each(function(i, v) {
			$("<p class=" + i + ">" + v.lyric + "</p>").appendTo($(".mid4 .lyric"))
		})
		audio.play();

		index = index;
	})

	//上一首

	$(".cir-left").on("click", function() {
			index -= 1;

			if(index < 0) {
				index = data.length - 1;
			}
			console.log(index)
			audio.src = data[index].src;
			$(".mid4 .lyric").empty()
			$(data[index].lyrics).each(function(i, v) {
				$("<p class=" + i + ">" + v.lyric + "</p>").appendTo($(".mid4 .lyric"))
			})
			audio.play();
			index = index;
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
			var left = pro.width() * (audio.currentTime / audio.duration) - 10
			pro.find(".pi").css("left", left)
			$(".jin").css("width", left)
				//////////////////////////
			$(data[index].lyrics).each(function(i, v) {
				if(format(audio.currentTime) == v.time) {
					$(".lyric p").css("color", "#fff")
					$(".lyric p").eq(i).css("color", "orange")
					$(".lyric p").eq(i - 3).css("display", "none")

				}
			})
		})
		///////////////////////////进度条点击和动//////////////////////////////////
	pro.on("click", false)
	pro.on("click", function(e) {
		audio.currentTime = audio.duration * (e.offsetX / $(this).width())
		audio.play()
	})
	pi.on("mousedown", function(e) {
		var px = $(this).offsetParent().offset().left
		var w = e.offsetX
			// console.log(w)
			// console.log(px)
		$(document).on("mousemove", function(e) {
			var ow = e.clientX;

			audio.currentTime = audio.duration * ((ow - px - w) / progress.width())
			$(document).on("mouseup", function() {
				$(document).off("mousemove")
				$(document).off("mouseup")
			})
		})

	})

	//	.................
	//	开始下载
	$(audio).on("loadstart", function() {

	})

	$(audio).on("progress", function() {
		$(data[index].lyrics).each(function(i, v) {
				if(format(audio.currentTime) == v.time) {
					$(".lyric p").css("color", "#fff")
					$(".lyric p").eq(i).css("color", "orange")
					$(".lyric p").eq(i - 3).css("display", "none")

				}
			})
	})
		//	缓存结束，可以播放
	$(audio).on("canplay", function() {

			$(".mid4 .lyric").empty()
			$(data[index].lyrics).each(function(i, v) {
				$("<p >" + v.lyric + "</p>").appendTo($(".mid4 .lyric"))
			})
			$(".header").find("span").text(data[index].song)
			$(".header").find("h2").text(data[index].name)
		})
		//	播放函数
	$(audio).on("play", function() {
			var t = setInterval(move, 5000);
			$(".mid").find("h1").css("color", "#fff").eq(index).css("color", "orange")
			$(".mid").find("p").css("color", "#E7E6EA").eq(index).css("color", "orange")
		})
		//	事件改变函数
	$(audio).on("timeupdate", function() {
$(data[index].lyrics).each(function(i, v) {
				if(format(audio.currentTime) == v.time) {
					$(".lyric p").css("color", "#fff")
					$(".lyric p").eq(i).css("color", "orange")
					$(".lyric p").eq(i - 3).css("display", "none")

				}
			})
	})
	$(audio).on("seek", function() {
$(data[index].lyrics).each(function(i, v) {
				if(format(audio.currentTime) == v.time) {
					$(".lyric p").css("color", "#fff")
					$(".lyric p").eq(i).css("color", "orange")
					$(".lyric p").eq(i - 3).css("display", "none")

				}
			})
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
	//	var first_ob;
	////	$(document).on('touchstart', false);
	//	$(document).on("touchstart", function(e) {
	//		first_ob = e.originalEvent.changedTouches[0].clientX;
	//		console.log(first_ob)
	//	})
	////	$(document).on('touchend', false);
	//	$(document).on("touchend", function(e) {
	//		var last_ob = e.originalEvent.changedTouches[0].clientX;
	//		if(last_ob - first_ob > 50) {
	//			$(".mid1").romoveClass("mid6").addClass("mid2")
	//			$(".mid4").romoveClass("mid5").addClass("mid3")
	//		}
	//		if(last_ob - first_ob < -50) {
	//			$(".mid1").addClass("mid6").romoveClass("mid2")
	//			$(".mid4").addClass("mid5").romoveClass("mid3")
	//		}
	//
	//	})
})