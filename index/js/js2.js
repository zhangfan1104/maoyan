	$.getJSON("movie.json",function(now-content){
				$.each(now-content.movie,function(i,item){
					//DOM操作  $("选择器")
					var pro = "<div><img src='img/product/"+item.picture+"'/><p>"+item.name+"</p></div>";
			
			
 var pro=
 "<div class='movie'>"
+ "<div class='movie-img'>"
+      "<div class='now-img'>"
+           "<img src='img/"+item.picture+" width='180px' height='230px'/>"
+      "</div>"
+      "<div class='movie-title'>"
+			item.name
+      "</div>"
+      "<div class="want">"
+		    item.want+"人想看"
+      "</div>"
+      "</div>"
+"<div class='buy-button'>
+"<input type='submit' value='预售' class='movie-willbuy-button/>"
						+"<input type='submit' value='预告片' class='movie-willbuy-button'/>"	
						+"</div>"
+"						<div class='time'>"
							+item.time
						+"</div>"
					+"</div>"

		$("#now-content").append(pro);
				});
			});