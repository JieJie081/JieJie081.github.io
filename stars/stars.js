stars={init:function(n){var i=this;$.getJSON(n,(function(n){for(var t in n){var d=n[t];i.render(d,t)}}))},render:function(n,i){for(var t,d,a="",r=0;r<n.length;r++)t=n[r].nickname,d=n[r].site,content=n[r].content,a+='<div class="card" onclick="window.open(\''+d+'\')" ><div class="card-header"><div>'+t+'</div></div><div class="card-content"><div>'+content+"</div></div></div>";$(i).append(a)}},stars.init("./allStars.json");