"use strict";

$(function() {
  "use strict";

  new Vue({
    el: "#orderList",
    data: {
      items: []
    },
    created: function() {
      this.initItemList();
    },
    methods: {
      //初始化下拉数据
      initItemList: function() {
        var _self = this;
        $.ajax({
          url: "http://localhost/JSON/getOrderList.json",
          type: "POST",
          dataType: "JSON",
          headers: {
            Accept: "application/json; charset=utf-8"
          },
          success: function(res) {
            console.log(res[0]);
            _self.items = res;
          }
        });
      }
    }
  });

  // 百度地图API功能
  var map = new BMap.Map("map");
  var initPoint = new BMap.Point(116.021468, 29.682904);
  var myIcon = new BMap.Icon(
    "http://localhost/images/check-icon04.png",
    new BMap.Size(65, 65)
  );
  map.centerAndZoom(initPoint, 14);

  //创建点坐标
  var initMarker = new BMap.Marker(initPoint, { icon: myIcon });

  // 设置中心点
  map.addOverlay(initMarker);
  map.panTo(initPoint);

  // var label = new BMap.Label("我是文字标注哦", {
  //   offset: new BMap.Size(20, -10)
  // });
  // initMarker.setLabel(label);

  //- $("input[type='date']").on("focus", function() {
  //-   $(this)attr("type","date");
  //-   $(this).removeAttr("placeholder");
  //- }).on("blur", function() {
  //-   if($(this).val()== '')
  //-   { $(this).attr("placeholder","日期的默认值")
  //- })
});
