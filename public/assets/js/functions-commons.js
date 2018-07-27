/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//****************************
//Funciones Javascript
//****************************

function loadLayout()
{
    $('#divStyles').load('styles.html');
    $('#navbar-top').load('../layout/navbar-top.html');
    //$('#myCarousel').load('../layout/header.html');
    $('#content-common').load('../layout/content-common.html');
    $('#footer').load('layout/footer.html');
}    


function enabledForm(sw)
{
    $('#frmRegister').find('input, textarea, button, select, file').prop('disabled', sw);
}


function cleanForm()
{
    $("#frmRegister").find('input[type=text], input[type=email], input[type=tel], textarea').val('');
}


function validateLength(division, input, length)
{
    var sw = false
    if(input.val().length >= length)
    {
        division.removeClass("has-error"); 
        division.addClass("has-success");
        sw = true;
    }
    else
    {
        division.removeClass("has-success");
        division.addClass("has-error");
    }
    return sw;
}
            

function validateEmail(division, input)
{
    var sw = false;
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.val())){
        division.removeClass("has-error"); 
        division.addClass("has-success");
        sw = true;
    } else{
        division.removeClass("has-success");
        division.addClass("has-error");
    }
    return sw;
}


function validateUrl(division, input)
{
    var pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(pattern.test(input.val())){
        division.removeClass("has-error"); 
        division.addClass("has-success");
        return true;                    
    }else{
        division.removeClass("has-success");
        division.addClass("has-error");
        return false;
    }
}