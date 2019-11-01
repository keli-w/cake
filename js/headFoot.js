//将header和footer加入到页面
$('body').prepend(`
        <header>
        <!-- 顶部 -->
        <div id="top">
            <div class="t_right">
                <span>欢迎你！<a href="##" class="phone"></a><a href="../view/login.html">退出</a></span>
                <span><a href="../view/shopCar.html">我的订单</a></span>
                <span><img src="../images/cakeindex_06.png"><a href="##">微信公众号</a></span>            </div>
        </div>
        <div id="bottom" class="cantainer">
            <div class="logo">
                <div class="select_city">
                    <img src="../images/cakeindex_11.png" alt="">
                    <span class="city">深圳</span>
                    <a href="##">查询地址是否可配送</a>
                </div>
                <div class="logo_img">
                    <img src="../images/logo.png">
                </div>
                <div class="search">
                    <input type="text">
                    <a href="##"><img src="../images/cakeindex_14.png"></a>
                    <a href="##">
                        <img src="../images/cakeindex_03.png">
                        <strong><b class="total"></b></strong>
                    </a>
                </div>
            </div>
            <div class="nav">
                <ul class="dropdown">
                    <li><a href="../view/home.html" class="on">首页</a></li>
                    <li><a href="../view/cake_list.html">生日蛋糕</a></li>
                    <li><a href="../view/dessert.html">甜点心礼</a></li>
                    <li class="drop"><a href="#qiye">企业专区</a>
                        <ul class="sub_menu ul1">
                        <li><a href="#">合作专区</a></li>
                        <li><a href="#">企业采购</a></li>
                        <li><a href="#">大客户区</a></li>
                        <li><a href="#">立即兑换</a></li>
                        </ul>
                    </li>
                    <li class="drop"><a href="#nuoxin">我的诺心</a>
                        <ul class="sub_menu ul2">
                        <li><a href="#">我的aha</a></li>
                        <li><a href="../view/shopCar.html">我的订单</a></li>
                        <li><a href="#">找回密码</a></li>
                        <li><a href="#">礼券专区</a></li>
                        <li><a href="#">卡券绑定 </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 顶部固定 -->
        <div id="head_fix">
            <div class="logo_img">
                <img src="../images/logo.png">
            </div>
            <div class="nav">
                <ul class="dropdown">
                    <li ><a href="../view/home.html" class="on">首页</a></li>
                    <li><a href="../view/cake_list.html">生日蛋糕</a></li>
                    <li><a href="../view/dessert.html">甜点心礼</a></li>
                    <li class="drop"><a href="#qiye">企业专区</a>
                        <ul class="sub_menu">
                        <li><a href="#">合作专区</a></li>
                        <li><a href="#">企业采购</a></li>
                        <li><a href="#">大客户区</a></li>
                        <li><a href="#">立即兑换</a></li>
                        </ul>
                    </li>
                    <li class="drop"><a href="#nuoxin">我的诺心</a>
                        <ul class="sub_menu">
                        <li><a href="#">我的aha</a></li>
                        <li><a href="../view/shopCar.html">我的订单</a></li>
                        <li><a href="#">找回密码</a></li>
                        <li><a href="#">礼券专区</a></li>
                        <li><a href="#">卡券绑定 </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="select_city">
                <img src="../images/cakeindex_11.png" alt="">
                <span class="city">深圳</span>
            </div>
            <div class="search">
                <input type="text">
                <a href="##"><img src="../images/cakeindex_14.png"></a>
                <a href="##"><img src="../images/0_03.png"></a>
                <a href="##">
                    <img src="../images/cakeindex_03.png">
                    <strong><b class="total"></b></strong>
                </a>
            </div>
        </div>
        <!-- 底部固定 -->
        <div id="t_fix">
            <div class="weixn">
                <img src="../images/00_03.png" alt="">
                <p>微信公众号</p>
            </div>
            <div class="kefu">
                    <img src="../images/00_06.png" alt="">
                    <p><a href="#" class="On_line">在线客服</a></p>
            </div>
            <img src="../images/erweima.png" alt="" class="erweima">
            </div>
        <!-- 底部 -->
        </header>`)
$('body').append(`
        <footer>
        <div id="foot">
            <p><img src="../images/cake_03.png" alt="加载失败">客服电话：4001-578-578 服务时间（09:00-21:00）</p>
            <p>
                <a href="#">诺心公告</a>
                <a href="#">关于诺心</a>
                <a href="#">联系我们</a>
                <a href="#">客服服务</a>
                <a href="#">食品经营许可证</a>
                <a href="#">生产许可证</a>
                <a href="#">预付费卡协议</a>
                <a href="#"><img src="../images/cake_07.png" alt="加载失败">上海工商</a>
            </p>
            <p>诺心食品（上海）有限公司上海市徐汇区虹漕路68号锦和中心7楼A、C单元  客服邮箱：services@lecake.com  公司电话：4001-578-578</p>
            <p>copyright©2010-2019 诺心lecake.com版权所有 </p>
        </div>
        </footer>`)

/************* 导航效果 *************/
$(' .dropdown').children('li').children('a').click(function(){
    $(this).addClass('on').parent('li').siblings().find('a').removeClass('on')
})
let loca_hean=window.location.pathname
if(loca_hean.indexOf("project/view/home.html")!=-1){
    $('.dropdown').children('li').eq(0).children('a').addClass('on').parent('li').siblings().find('a').removeClass('on')
    $('#head_fix .dropdown').children('li').eq(0).children('a').addClass('on').parent('li').siblings().find('a').removeClass('on')
}else if(loca_hean.indexOf("project/view/cake_list.html")!=-1){
    $('.dropdown').children('li').eq(1).children('a').addClass('on').parent('li').siblings().find('a').removeClass('on')
    $('#head_fix .dropdown').children('li').eq(1).children('a').addClass('on').parent('li').siblings().find('a').removeClass('on')
}else if(loca_hean.indexOf("project/view/dessert.html")!=-1){
    $('.dropdown').children('li').eq(2).children('a').addClass('on').parent('li').siblings().find('a').removeClass('on')
    $('#head_fix .dropdown').children('li').eq(2).children('a').addClass('on').parent('li').siblings().find('a').removeClass('on')
}else if(loca_hean.indexOf("project/view/shopCar.html")!=-1||loca_hean.indexOf("project/view/Myaha.html")!=-1||loca_hean.indexOf("project/view/RetrievePwd.html")!=-1){
    $('.dropdown').children('li').eq(4).children('a').addClass('on').parent('li').siblings().find('a').removeClass('on')
    $('#head_fix .dropdown').children('li').eq(4).children('a').addClass('on').parent('li').siblings().find('a').removeClass('on')
}


$('li').hover(function(){
    $(this).children('ul').css({"display":"block","background":"#fff"})
},function(){
    $(this).children('ul').css({"display":"none"})
})
/************* 当向下滚动时60pxhead_fix显示header隐藏*************/
$(window).scroll(function(){
    var Stop=document.documentElement.scrollTop;
    if(Stop>=60){
        $('#head_fix').slideDown(1000,'linear')
    }else{
        $('#head_fix').slideUp(1000,'linear')
    }
})
/******************************** 在线客服/微信公众号*********************** */
$('#head_fix  .search img').click(function(){
    $(this).siblings('input').css('display','block');
})

$('.weixn').hover(function(){
    $('.erweima').css('display','block')
},function(){
    $('.erweima').css('display','none')
})

$('.kefu').click(function(){
    $(body).append(`
    
    
    `)
})
/******************************** 获取cookie值设置账户信息*********************** */
const cookieArr = document.cookie.split('=')
$('.phone').html(cookieArr[0])
/******************************** 获取cookie商品总数值设置*********************** */
var sum=localStorage.getItem('CARTCNT')
$('.total').append(sum);















