
$.fn.customCheckBox = function(options){
    var settings = $.extend({
        type : "default"
    }, options);

    if(settings.type === "toggle"){
        var customHTML = "<span class='checkbox-toggle'></span>";
    }else{
        var customHTML = "<span class='checkbox-custom'></span>";
    }
    var checkBox = $(this);
    $(checkBox).each(function() {
        $(this).wrap(customHTML);
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
    });
    $(checkBox).click(function(){
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }else if($(this).not(':checked')){
            $(this).parent().removeClass("selected");
        }
    });
}

$.fn.customRadioBtn=function(){
    var radioBtn=$(this);
    $(radioBtn).each(function(){
        $(this).wrap('<span class="radio-custom"></span>');
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
        });
        $(radioBtn).click(function(){
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
            $(radioBtn).not(this).each(function(){
                $(this).parent().removeClass("selected");
            });	
        });
}


$(document).ready(function(){
    $(".default-checkbox").customCheckBox();
    $(".toggle-checkbox").customCheckBox({
        type: "toggle"
    });
    $(".custom-radio").customRadioBtn();
})