 /* ******************************* cake效果 *********************/
 $('.cake').hover(function(){
    $(this).find('img').animate({'transform':'scale(1.05)'},500)
  },function(){
   $(this).find('img').animate({'transform':'scale(1)','background':'#fff'},500)
 })
 var n=14,m=33;
 ajax({
       url:'../php/cake.php',
       method:'get',
       data:{'n':13,'m':32},
       success:function(res){
         var data=JSON.parse(res)
         for(var i=0;i<data.length;i++){
           console.log(data[i])
         $('.cake_list').append(`
           <div class="cake" id='${data[i].id}'>
           <a href="#"><img src="${data[i].url_small}" alt="加载失败"></a>
           <p><a href="#">${data[i].name}</a></p>
           <p><span>${data[i].detail}</span></p>
           <div class="buy">
               <p>￥${data[i].price}</p>
               <p><a href="#" class="red">加入购物车<span>></span></a></p>
           </div>
       </div>`)
         }
        /*****************  加入购物车 *************/
        $('.red').click(function(){
          Popup();
          tanchuan();
          //点击加入购物车获取商品id
          var id=$(this).parents('.cake').attr('id')
          //console.log(id);
          $('.buy_btn').click(function(){
            //定义数据存储的形式，为数组还是对象形式
              var goodsArr=[
                {
                  id:id,
                  num:1
                }
              ]
              //localStorage.setItem('goods',JSON.stringify(goodsArr));
              //将商品id存储到localStorage
              if(!!localStorage.getItem('goods')){//表示数据存在
                  //存在，在原来的基础上加1
                  var carArr=JSON.parse(localStorage.getItem('goods'));
                  var sum=0;//计算商品总数
                  //定义一个监听器，用于判断当前id是否存在
                  var flag=false;//表示当前id不存在
                  for (let i = 0; i < carArr.length; i++) {
                   //判断点击时获取id是否存在
                    if(carArr[i].id==id){
                      carArr[i].num++;
                      flag=true;//表示id存在
                      break;
                    }
                  }
                  if(!flag){//表示点击获取的id不存在
                    carArr.push({id:id,num:1})
                  }
                  $.each(carArr,function(index,ele){
                      sum+=ele.num;
                  })
                  localStorage.setItem('goods',JSON.stringify(carArr))
                  localStorage.setItem('CARTCNT',sum)
                }else{//表示数据不存在,也就是第一次添加商品
                  //不存在，添加一个商品
                  localStorage.setItem('goods',JSON.stringify(goodsArr))
                  localStorage.setItem('CARTCNT',1)
                }
                alert('加入成功!')
          })  

        })
        /******************************** cake效果 *********************/
        $('.cake').hover(function(){
          $(this).find('img').css({'transform':'scale(1.05)'},1000)
        },function(){
        $(this).find('img').css({'transform':'scale(1)','background':'#fff'},1000)
        })
        $('.red').hover(function(){
          $(this).css('text-decoration','underline').find('span').html('+')
        })



       } 
 })
 //弹框
function Popup(){
  var str=`    
  <div class="tanchuan">
  <h3>建议使用人数<a class="close_btn">×</a></h3>
  <p><a>2-4人食</a><a>5-8人食</a><a>5-8人食</a><a>5-8人食</a><a>5-8人食</a></p>
  <p><span>玫瑰森林</span><i>￥218</i></p>
  <div>
      <p>口味：慕斯口味</p>
      <p>约<i>13x13x13cm</i></p>
      <p><i>含5套餐具</i></p>
      <p>甜度：<i></i></p>
      <p>约<i>420g</i></p>
  </div>
  <button class="buy_btn" style="cursor: pointer;">加入购物车</button>
</div>`
//遮罩
var mask=document.createElement('div')
mask.style.cssText="width:100%;height:100%;background:rgba(0, 0, 0, 0.2);z-index:999;position:fixed;top:0;left:0;"
document.body.append(mask)
$('body').append(str)
//关闭
$('.close_btn').click(function(){
  $('.tanchuan').css('display','none')
  mask.style.display='none';
})
//点击a标签
$('.tanchuan').children('p').eq(0).find('a').click(function(){
  $(this).css('background','#fff').siblings().css('background','rgba(222, 222, 222, 0.6)')
})
$(window).resize(function(){
  tanchuan()
})   
//弹窗随窗口变化而变化
$(window).resize(function(){
  tanchuan();
})
}
    //弹窗随窗口变化而变化
    function tanchuan(){
      var l=($(window).width()-$('.tanchuan').width())/2
      var t=($(window).height()-$('.tanchuan').height())/2
      $('.tanchuan').css({position:'fixed',left:l+'px',top:t+"px"})
    }

