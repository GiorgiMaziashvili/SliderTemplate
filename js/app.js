var slideParam = {
    mainContent:'.slider',
    mainContentChildren:'slider__block',
    sliderTimer:3000,
    bullets:true
}
var sl_index = 0;
var setTime;
slider(sl_index,slideParam.bullets);


function slider(x,bullets){
    var elem = document.getElementsByClassName(slideParam.mainContentChildren);
    for(var i=0;i<elem.length;i++){
        elem[i].style.display='none';
    }
    if(sl_index > elem.length-1){
        sl_index = 0;
    }
    if(sl_index < 0){
        sl_index = elem.length-1;
    }
    elem[sl_index].style.display='flex';
    setTime = setTimeout(sl_right,slideParam.sliderTimer);

    if(bullet==)
}
function sl_left(){
    clearTimeout(setTime);
    slider(sl_index--,slideParam.bullets);
}
function sl_right(){
    clearTimeout(setTime);
    slider(sl_index++,slideParam.bullets);
}


