// 导航栏下拉框
$('.dao2').hover(function () {
    $(this).children().css("display", 'block');

}, function () {
    $(this).children().eq(1).css("display", 'none');

});

$('.dao1').hover(function () {
    $(this).children().css("display", 'block');
}, function () {
    $(this).children().eq(1).css({"display": 'none'});
})
// 导航栏下拉框结束
// 轮播图
var a = 0;
setInterval(function () {
    a++;
    if (a > 2) {
        a = 0;
    }
    $('#bo').css('left', a * -508 + 'px');
    $('#ul li').eq(a).addClass('ul').siblings().removeClass('ul');
}, 1500)
// 点击白点 跳转图片
$('#ul li').click(function () {
    a = $(this).index();
    $('#bo').css('left', a * -508 + 'px');
    $('#ul li').eq(a).addClass('ul').siblings().removeClass('ul');

})
// 轮播图结束
//鼠标移到触发动画
$('.img_1').hover(function () {
    $(this).children('img').css("animation", 'ji .5s forwards');
    $(this).children('.deng').css("animation", 'ji_1 .5s forwards');
    $(this).children('p').css("animation", 'ji_2 .5s forwards');
}, function () {
    $(this).children('img').css("animation", 'ji_3 .5s forwards');
    $(this).children('.deng').css("animation", 'ji_4 .5s forwards');
    $(this).children('p').css("animation", 'ji_5 .5s forwards');
})
//鼠标移到触发动画结束
//视频中心播放样式显示隐藏
$('.shi_img1').hover(function () {
    $(this).children('.fa-play-circle_1').css('display', 'block');
}, function () {
    $(this).children('.fa-play-circle_1').css('display', 'none');
})
$('.shi_img2').hover(function () {
    $(this).children('.fa-play-circle_1').css('display', 'block');
}, function () {
    $(this).children('.fa-play-circle_1').css('display', 'none');
})
$('.shi_img3').hover(function () {
    $(this).children('.fa-play-circle_1').css('display', 'block');
}, function () {
    $(this).children('.fa-play-circle_1').css('display', 'none');
})
//视频中心播放样式显示隐藏结束
//大轮播图开始
var indexa = 0;
//分页符的初始颜色
$(function () {
    $('#ul_1 li').eq(0).css('backgroundColor', '#F2A900');
})

//点击跳转上一页
$('#sang').click(function () {
    indexa--;
    if (indexa < 0) {
        indexa = 2;
    }

    $(this).prev().css('left', indexa * -1520 + 'px');
    //点击分页符换颜色
    $('#ul_1 li').eq(indexa).css('backgroundColor', '#F2A900').siblings().css('backgroundColor', '#242424');
}).hover(function () {
//鼠标到上一页悬浮事件
    $(this).css('backgroundColor', 'rgba(189,138,19,.5)');
}, function f() {
    $(this).css('backgroundColor', 'rgba(0,0,0,.5)');
})
//点击跳转下一页
$('#xia').click(function () {
    indexa++;
    if (indexa > 2) {
        indexa = 0;
    }
    $(this).prev().prev().css('left', indexa * -1520 + 'px');
    //点击分页符换颜色
    $('#ul_1 li').eq(indexa).css('backgroundColor', '#F2A900').siblings().css('backgroundColor', '#242424');
}).hover(function () {
//鼠标到下一页悬浮事件
    $(this).css('backgroundColor', 'rgba(189,138,19,.5)');
}, function f() {
    $(this).css('backgroundColor', 'rgba(0,0,0,.5)');
})


