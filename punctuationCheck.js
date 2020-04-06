new ClipboardJS('#copy');
$('#before').val('这是一段没有意义的test param, 标点uncomfortable(乱七八糟的)， 简直没法看诶！!!\n1. 这里是毫无意义的一段话....\n2.这里是另外一段毫无意义的话。\n(3)我甚至用错了标点符号???\n666hhhh快试试吧2333\n测试1111TEST233测试');
$('#copy').click (function() {
  var srcBtnCopy = $('#copy').html();
  $('#copy').html('<i class="fa fa-check"></i> 已复制');
  setTimeout(function() {
    $('#copy').html(srcBtnCopy);
  }, 2000);
});
$('#start').click(function() {
  var srcBtnHtml = $('#start').html();
  $('#start').html('<i class="fa fa-cog fa-spin"></i> 正在修正');
  setTimeout(function() {
    var input = $('#before').val();
    var output = '';
    var start = Date.now();
    // *** Start ***
    // 英文小括号转中文
    output = input.replace(/(\()/g, "（");
    output = output.replace(/(\))/g, "）");
    // 英文中括号转中文
    output = output.replace(/(\[)/g, "【");
    output = output.replace(/(\])/g, "】");
    // 英文符号转中文
    output = output.replace(/(\;)/g, "；");
    output = output.replace(/(\.\n)/g, `。\n`);
    output = output.replace(/(\?)/g, "？");
    output = output.replace(/(\:)/g, "：");
    output = output.replace(/(\!)/g, "！");
    output = output.replace(/(\,)/g, "，");
    // 数字左右空格
    // 左边没有空格，右边换行
    output = output.replace(/([^\s\d])([0-9]+)(\n)/g, "$1 $2$3");
    // 右边没有空格，左边换行
    output = output.replace(/(\n)([0-9]+)([^\s\d\.])/g, "$1$2 $3");
    // 右边末尾
    output = output.replace(/([^\s\d])([0-9]+)$/g, "$1 $2");
    // 左边开头
    output = output.replace(/^([0-9]+)([^\s\d\.])/g, "$1 $2");
    // 左右都没有空格
    output = output.replace(/([^\s\d])(\d+)([^\s\d])/g, "$1 $2 $3");
    // 英文单词左右空格
    // 左边有空格，右边没有
    output = output.replace(/( )(\b[a-zA-Z]+\b)([^\s])/g, "$1$2 $3");
    // 右边有空格，左边没有
    output = output.replace(/([^\s])(\b[a-zA-Z]+\b)( )/g, "$1 $2$3");
    // 右边是换行，左边没空格
    output = output.replace(/([^\s])(\b[a-zA-Z]+\b)(\n)/g, "$1 $2$3");
    // 右边是末尾，左边没空格
    output = output.replace(/([^\s])(\b[a-zA-Z]+\b)$/g, "$1 $2");
    // 左边是开头，右边没空格
    output = output.replace(/^(\b[a-zA-Z]+\b)([^\s])/g, "$1 $2");
    // 左边是开头，右边没空格
    output = output.replace(/(\n)(\b[a-zA-Z]+\b)([^\s])/g, "$1$2 $3");
    // 两边都没空格的
    output = output.replace(/([^\s])(\b[a-zA-Z]+\b)([^\s])/g, "$1 $2 $3");
    // 由于正则特性，类似 你好hello#allo你好 这样的会漏掉 allo 的空格处理，再执行一次
    output = output.replace(/([^\s])(\b[a-zA-Z]+\b)([^\s])/g, "$1 $2 $3");
    // 中文符号右侧空格删除
    output = output.replace(/([\；|\。|\？|\：|\！|\，])( )/g, "$1");
    // 英文标点右侧加空格
    output = output.replace(/([\.])([^\s\.])/g, "$1 $2");
    // 全角空格和双空格
    output = output.replace(/　/g, " ");
    output = output.replace(/  /g, " ");
    // 执行两次
    output = output.replace(/　/g, " ");
    output = output.replace(/  /g, " ");
    // 单双引号
    // 单引号
    output = output.replace(/([^\s\'])(\')( )/g, "$1 $2$3");
    output = output.replace(/( )(\')([^\s\'])/g, "$1$2 $3");
    output = output.replace(/^(\')([^\s\'])/g, "$1 $2");
    output = output.replace(/([^\s\'])(\')$/g, "$1 $2");
    output = output.replace(/([^\s\'])(\')([^\s\'])/g, "$1 $2 $3");
    // 双引号
    output = output.replace(/([^\s\"])(\")( )/g, "$1 $2$3");
    output = output.replace(/( )(\")([^\s\"])/g, "$1$2 $3");
    output = output.replace(/^(\")([^\s\"])/g, "$1 $2");
    output = output.replace(/([^\s\"])(\")$/g, "$1 $2");
    output = output.replace(/([^\s\"])(\")([^\s\"])/g, "$1 $2 $3");
    // *** End ***
    var end = Date.now() - start;
    $('#time').html('用时 ' + end + ' ms | 字符数 ' + output.length);
    $('#after').val(output);
    $('#start').html(srcBtnHtml);
  }, 500);
});
