var a = {"code":200,"msg":"success","data":[{"word":"\u7231\u4e50\u7ef4","goodsCount":21,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E7%88%B1%E4%B9%90%E7%BB%B4"},{"word":"\u963f\u8fea\u8fbe\u65af\u5973\u978b","goodsCount":1749,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%E5%A5%B3%E9%9E%8B"},{"word":"\u5b89\u8e0f","goodsCount":2844,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E5%AE%89%E8%B8%8F"},{"word":"\u5b89\u8e0f\u5973\u978b","goodsCount":444,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E5%AE%89%E8%B8%8F%E5%A5%B3%E9%9E%8B"},{"word":"a\u5b57\u88d9\u534a\u8eab","goodsCount":18037,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=a%E5%AD%97%E8%A3%99%E5%8D%8A%E8%BA%AB"},{"word":"a\u5b57\u534a\u8eab\u88d9","goodsCount":17974,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=a%E5%AD%97%E5%8D%8A%E8%BA%AB%E8%A3%99"},{"word":"\u5b89\u8e0f\u7537\u978b","goodsCount":662,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E5%AE%89%E8%B8%8F%E7%94%B7%E9%9E%8B"},{"word":"\u7231\u6155","goodsCount":2669,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E7%88%B1%E6%85%95"},{"word":"\u963f\u8fea\u8fbe\u65af\u5973\u77ed\u8896t\u6064","goodsCount":583,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%E5%A5%B3%E7%9F%AD%E8%A2%96t%E6%81%A4"},{"word":"adidas","goodsCount":7320,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=adidas"}],"info":{"use_time":"52.436828613281ms"}}
let b = {"code":200,"msg":"success","data":[{"word":"\u5c0f\u7c739","goodsCount":163,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E5%B0%8F%E7%B1%B39"},{"word":"\u590f\u8fde\u8863\u88d9","goodsCount":99331,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E5%A4%8F%E8%BF%9E%E8%A1%A3%E8%A3%99"},{"word":"\u590f\u5957\u88c5\u5973","goodsCount":28122,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E5%A4%8F%E5%A5%97%E8%A3%85%E5%A5%B3"},{"word":"\u590f\u5973\u7761\u8863","goodsCount":9954,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E5%A4%8F%E5%A5%B3%E7%9D%A1%E8%A1%A3"},{"word":"\u590f\u5973\u725b\u4ed4\u88e4","goodsCount":18768,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E5%A4%8F%E5%A5%B3%E7%89%9B%E4%BB%94%E8%A3%A4"},{"word":"\u65b0\u6b3e2020\u8fde\u8863\u88d9","goodsCount":47204,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E6%96%B0%E6%AC%BE2020%E8%BF%9E%E8%A1%A3%E8%A3%99"},{"word":"\u96ea\u7eba\u8fde\u8863\u88d9","goodsCount":13416,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E9%9B%AA%E7%BA%BA%E8%BF%9E%E8%A1%A3%E8%A3%99"},{"word":"\u978b\u5973\u5916\u7a7f","goodsCount":8404,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E9%9E%8B%E5%A5%B3%E5%A4%96%E7%A9%BF"},{"word":"\u978b\u62d6\u5973\u5916\u7a7f","goodsCount":780,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E9%9E%8B%E6%8B%96%E5%A5%B3%E5%A4%96%E7%A9%BF"},{"word":"\u978b\u5916\u7a7f\u5973\u62d6","goodsCount":29,"props":[],"url":"\/\/category.vip.com\/suggest.php?keyword=%E9%9E%8B%E5%A4%96%E7%A9%BF%E5%A5%B3%E6%8B%96"}],"info":{"use_time":"51.867008209229ms"}}

let text = document.querySelector('form>input')
let ul = document.querySelector('form>ul')
var _clone = ul.cloneNode(true)
text.addEventListener('focus',()=>{ul.style.display='block'})
text.addEventListener('blur',()=>{ul.style.display='none'})
text.addEventListener('input',()=>{
    let script = document.createElement('script')
    let str = text.value
    script.src = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=31909,1434,31326,21089,31253,32046,30824,31847&wd=' + str + '&req=2&csor=6&pwd=' + str + '&cb=fn&_=1592642523557'
    // 把这个标签插入页面
    document.body.appendChild(script)
    // 当数据请求回来了, script 标签已经没有意义了
    script.remove()
 
})
var module = ` <div class="l exhibition-l">
<span aria-disabled="false" >搜索历史</span>
<span style="margin-top: 15px;">连衣裙</span>
</div>
<div class="r exhibition-r">
<span aria-disabled="false" >精选推荐</span><br>
<a href="">连衣裙</a>
<a href="">护肤套装</a><br>
<a href="">女士休闲裤</a>
<a href="">手机</a><br>
<a href="">女休闲鞋</a>
<a href="">女士套装</a><br>
<a href="">女单鞋</a>
<a href="">女士衬衫</a><br>
<a href="">阿迪达斯adidas</a>
</div>`
function fn(res){
    if(!res.g){return ul.innerHTML=module} 
    ul.innerHTML=''
  console.log(res)
  if(!res.g){return}
  let frg = document.createDocumentFragment()
    res.g.forEach((item,index)=>{
     let li = document.createElement('li')
     li.innerHTML = item.q
     frg.appendChild(li)
    })
 
 ul.appendChild(frg)
}
 
