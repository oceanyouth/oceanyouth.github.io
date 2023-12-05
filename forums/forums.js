// 采用一个多对象JSON文件存储所有数据的方式
forums = {  // 标题头部需要修改
  init: function(url) {
    var that = this;
    $.getJSON(url,
      function(data){
        for(var className in data){
          var classData = data[className]
          that.render(classData,className)
        }
      }
    )
  },
  render: function(data, name) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(name).append(li);
  }
}

forums.init("./allForum.json") // 传入json文件的路径，需要修改2个名称




