/**
 * Created by muyi on 16/3/11.
 */
//weChat
function is_weChat(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=='micromessenger') {
        return true;
    }else {
        return false;
    }
}
//通过版本号 控制 微信判断
if(typeof(version)=='undefined'){
    if(!is_weChat()){
        alert('no weChat');
        //location.href='./weChat.html';
    };
}

$(function(){

});
