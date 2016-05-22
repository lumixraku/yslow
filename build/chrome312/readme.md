 Make fewer HTTP requests   L4005 ynumreq
 Use a Content Delivery Network (CDN)  L4052 ycdn
 Avoid empty src or href  L5180 yemptysrc
 Add Expires headers  L4245  yexpires
 Compress components with gzip   L4292 ycompress
 Put CSS at top  L4334 ycsstop
 Put JavaScript at bottom  L4374 yjsbottom
 Avoid CSS expressions  L4411  yexpressions
 Reduce DNS lookups  L4514 ydns
 Minify JavaScript and CSS  L4563  yminify
 Avoid URL redirects  L4622  yredirects
 Remove duplicate JavaScript and CSS   L4656  ydupes
 Configure entity tags (ETags)  L4707  yetags
 Make AJAX cacheable   L4747  yxhr
 Use GET for AJAX requests   L4802  yxhrmethod
 Reduce the number of DOM elements  L4840  ymindom  
 Avoid HTTP 404 (Not Found) error  L4874  yno404
 Reduce cookie size   L4911  ymincookie
 Use cookie-free domains   L4947  ycookiefree
 Avoid AlphaImageLoader filter   L4995  ynofilter
 Do not scale images in HTML L5079  yimgnoscale
 Make favicon small and cacheable   L5119  yfavicon


请求个数  大小等信息


controller.js
peel
|
|
|
content.js
YSLOW.peeler.peel(document)   L9504  (该函数遍历整个DOM 并得到comps)
|
|
|
controller.js
fetchResult(回调函数, result 是原始的comps)  
---> request 每个资源都全部重新请求一次  
     在success函数中填充comp.content  
---> checkRender
等所有的请求都有了响应  就执行下面的
|
|
|
content.js
YSLOW.ComponentSet.prototype.setAfterOnload  该方法注册时间 用于检测DOM是否有改变（可能插入了新的数据）
done
callback(ret)   callback 就是controller中的setInjected
|
|
|
controller.js
setInjected(doc, comps, body) doc待测页面的document  body是一个html字符串
该函数给comp对象增加 defer  async 属性
buildComponentSet   
|
|
|
YSLOW.Component  L731
cset.addComponent
|
|
|
content.js
YSLOW.util.getInlineTags  得到所有的inline元素 (通过消息的回调函数将值传给BG中的controller)
|
|
|
controller.js
inlineTags
|
|
|
content.js
YSLOW.util.countDOMElements
domElementsCount
|
|
|
content.js
YSLOW.util.getDocCookies
|
|
|
controller.js
getDocCookies
peelDone
|
|
|
yslow-chrome.js
notifyPeelDone()
|
|
|
content.js
doc.ysview.show()

yscontext.genPerformance
YSLOW.controller.lint
result = rule.lint(doc, yscontext.component_set, conf);
lint()  某一个rule的lint函数


this.updateStatusBar(this.yscontext.document)
开始计算
|
yslow-chrome
collectStats
this.computeStats(true);

YSLOW.Component.prototype.hasFarFutureExpiresOrMaxAge




controller.js
|
|
|
yslow-chrome.js
show(6030)  --->  genStats(7333)  --->   render（1407） --->  statesView(8022)
