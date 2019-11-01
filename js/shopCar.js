var goodsArr = JSON.parse(localStorage.getItem('goods'))
if(!!localStorage.getItem('goods')){//本地存储中有数据
    if(goodsArr.length>0){//本地存储中有数据且数据长度不为0
        $.ajax({
            url: '../php/shopCar.php',
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function (json) {
                //console.log(json);
                //console.log(typeof json);
                var str='';
                $.each(goodsArr,function(index,ele){
                    //console.log(ele.id);
                    $.each(json,function(index,item){
                        //console.log(item.id);
                        if(item.id==ele.id){
                            str += `
                            <div class="goodsItem" id="${item.id}">
                            <input type="checkbox" class="one">
                            <img src="${item.url_small}" alt="">
                            <div class="goodsDetails_L">
                                <h2><a href="">${item.name}</a></h2>
                                <p>280克</p>
                                <p class="price">￥<span>${item.price}</span></p>
                            </div>
                            <div class="goodsDetails_R">
                                <p>小计：￥<span>${item.price*ele.num}</span></p>
                                <p><i class="cut">-</i><input type="text" value="${ele.num}"><i class="add">+</i></p>
                            </div>  
                            </div>`
                        }
                    })
                    
                })
                $('.goodsList').append(str)
                AddorCut();
                checkAll();
                checkOne();
            }
        })
        //删除商品
        // $('.wrap_L').children('span').eq(1).click(function(){
        //     /* if($('.goodsItem').find('.one').attr('checked')){
        //         console.log(111);
        //         $(this).parent('.goodsItem').remove()
        //     } */
        // })
            if($('.goodsItem').find('.one').attr('checkbox')==true){
                console.log(111);
            }        
    }else{//本地存储中有数据,但数据为空
        $('.goodsList').html('<div class="no_content">逛一逛吧!亲</div>')
    }

}else{//本地存储中没有数据
    $('.goodsList').html('<div class="no_content">逛一逛吧!亲</div>')
}


/*************单个商品的增与减***********/

var sum1=localStorage.getItem('CARTCNT')
function AddorCut(){
    $(".cut").click(function(){
        if(sum1>0){
            //对各个页面购物车内总数值的渲染
            sum1--;
            $('.total').html(sum1).css('color','#000')
            //更新localStorage中的商品总数sum值
            localStorage.setItem('CARTCNT',sum1)
        }else if(sum1<=0){
            //当商品总数量减少到为0时移出b节点和清除本地数据
            $('.total').remove()
            localStorage.removeItem('CARTCNT','')
        }
        //对单个商品数量和小计的渲染
        var Num=Number($(this).siblings('input').attr('value'))
        var ID=$(this).parents('.goodsItem').attr('id');
        if(Num<=1){
            $(this).parents('.goodsItem').remove()
            //当将此商品删除完后，不但要移出页面节点还要清楚该商品的本地数据
            for (let i = 0; i < goodsArr.length; i++) {
                if(goodsArr[i].id==ID){
                    goodsArr.splice(i,1)
                    break;
                }
            }
            localStorage.setItem('goods',JSON.stringify(goodsArr))
        }else{
            Num--;
            $(this).siblings('input').attr('value',Num)
            //更新对应商品localStorage中的num值
            for (let i = 0; i < goodsArr.length; i++) {
                if(goodsArr[i].id==ID){
                    goodsArr[i].num--;
                    break;
                }
            }

            localStorage.setItem('goods',JSON.stringify(goodsArr))
        //对单个商品小计值的渲染
            var price=Number($(this).parent().parent().siblings('.goodsDetails_L').find('.price').find('span').text())
            $(this).parent('p').siblings('p').find('span').html(Num*price)
        }
        //共选和已选也得减
        if($(this).parent().parent().siblings('.one').prop('checked')==true){
            b--;
            $('.selecting').text(b)
        }
    })
    $(".add").click(function(){
        //对各个页面购物车内总数值的渲染
        sum1++;
        $('.total').html(sum1).css('color','#000')
        //更新localStorage中的商品总数sum值
        localStorage.setItem('CARTCNT',sum1)
        //对单个商品数量和小计的渲染
        var Num=Number($(this).siblings('input').attr('value'))
        Num++;
        $(this).siblings('input').attr('value',Num)
        //更新对应商品localStorage中的num值
        var ID=$(this).parents('.goodsItem').attr('id');
        for (let i = 0; i < goodsArr.length; i++) {
            if(goodsArr[i].id==ID){
                goodsArr[i].num++;
                break;
            }                
        }
        localStorage.setItem('goods',JSON.stringify(goodsArr))
    //对单个商品小计值的渲染
        var price=Number($(this).parent().parent().siblings('.goodsDetails_L').find('.price').find('span').text())
        $(this).parent('p').siblings('p').find('span').html(Num*price)
        //共选和已选也得加
        if($(this).parent().parent().siblings('.one').prop('checked')==true){
            b++;
            $('.selecting').text(b)
        }
    })
}

//全选商品切换总价及商品删除
var sumAll=0;
var all=document.querySelector('.all');
var todo=document.querySelector('.todo')
function checkAll(){
    all.onclick=function(){
        if(all.checked==true){
            $('.one').each(function(index,ele){
                ele.checked=true;
            //计算全选中时商品的总价
            var smallTotal=Number($(this).siblings('.goodsDetails_R').find('p').find('span').text())
            sumAll+=smallTotal;
            $('.jiesuan').find('p').find('b').html(sumAll)
            })
            todo.onclick=function(){
                $('.goodsItem').remove()
                localStorage.removeItem('goods')
                localStorage.removeItem('CARTCNT')
                //全选删除全部商品时总价为0
                $('.jiesuan').find('p').find('b').html(0)
            }
            $('.selecting').text(sum1).css('color','red')
            }else if(all.checked==false){
            $('.one').each(function(index,ele){
                ele.checked=false;
                //全部未选中的时总价为0
                var smallTotal=Number($(this).siblings('.goodsDetails_R').find('p').find('span').text())
                sumAll-=smallTotal;
                $('.jiesuan').find('p').find('b').html(sumAll)
            })
            todo.onclick=function(){
                return false;
            }
            $('.selecting').text('0').css('color','red')
        }
    }
}

//单选商品切换总价及商品删除
function checkOne(){
    $('.one').on('click',function(){
        var n=$(this).siblings('.goodsDetails_R').find('p').find('input').val()
        console.log(n)
        if(all.checked==true){//全选状态点击one
            console.log($(this).prop('checked'))
            all.checked=false;
            //此时为全选状态总价
            var smallTotal=Number($(this).siblings('.goodsDetails_R').find('p').find('span').text())
            sumAll-=smallTotal;
            console.log(smallTotal,sumAll)
            $('.jiesuan').find('p').find('b').html(sumAll)
            //表示目前已选的商品
            sum1--;
            $('.selecting').text(sum1).css('color','red')            
        }else if(all.checked==false){//全不选状态点击one
            var arr=[];//存储已勾选的单选按钮
            for(var i=0;i<$('.one').length;i++){
                if($('.one')[i].checked==true){
                    arr.push('a');
                }
            }
            if(arr.length==$('.one').length){
                all.checked=true;
            }
            //此时为非全选状态总价
            if($(this).prop('checked')==false){//并且点击的单选按钮由选中到未选中
                var smallTotal=Number($(this).siblings('.goodsDetails_R').find('p').find('span').text())
                sumAll-=smallTotal;
                $('.jiesuan').find('p').find('b').html(sumAll)
                //表示目前已选的商品
                sum1--;
                $('.selecting').text(sum1).css('color','red')
            }else if($(this).prop('checked')){//并且点击的单选按钮由未选中到选中
                var smallTotal=Number($(this).siblings('.goodsDetails_R').find('p').find('span').text())
                sumAll+=smallTotal;
                $('.jiesuan').find('p').find('b').html(sumAll)
                //表示目前已选的商品
                $('.selecting').text(n).css('color','red')
            }
        }
    })
}
