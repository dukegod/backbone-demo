// 渲染页面，加载指定文件夹中的模块
// Zepto[get] = function (url, data, callback, type) {
//   // Shift arguments if data argument was omitted
//   if (Zepto.isFunction(data)) {
//     type = type || callback;
//     callback = data;
//     data = undefined;
//   }
//
//   return Zepto.ajax({
//     url: url,
//     type: 'GET',
//     dataType: type,
//     data: data,
//     success: callback
//   });
// };


function loadTemplate(view, callback) {
  // $.get('templates/' + view + '.html', function (data) {
  //
  //   callback(data)
  // })
  var url = 'templates/' + view + '.html';
  $.ajax({
    url: url,
    type: 'GET',
    // dataType: type,
    // data: data,
    success: callback
  });
}
