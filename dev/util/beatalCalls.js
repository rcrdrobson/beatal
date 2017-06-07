//Import the util datas
import {getModalTemplateHTML, getActionBtnHTML, getWarningIconTypeHTML, getErrorIconTypeHTML , getSuccessIconTypeHTML} from './exportSingleModal';

//Aux vars
  $(document).ready(function(){
  var modalTemplateHTML;
  var actionBtnHTML;
  var warningIconTypeHTML;
  var errorIconTypeHTML;
  var successIconTypeHTML;

  global.beatal = function beatalCall(type,title,text,textBtnClose,actionBtnText,actionBtnFunction){
    //Setting Template Modal
    makeTemplate();

    //Writting the Modal's div if not exist
    makeModalDiv();

    //Setting the Modal's attrs
    putAttrsTemplate(type,title,text,textBtnClose,actionBtnText,actionBtnFunction);

    //Writting Modal in its div
    writeModal();
  }

  //********************
  //Aux functions
  //********************
  function clearModal(){
    $('.modal-backdrop').remove();
  }

  function makeTemplate(){
    //Setting Template Modal
    modalTemplateHTML=getModalTemplateHTML();
    actionBtnHTML=getActionBtnHTML();
    warningIconTypeHTML=getWarningIconTypeHTML();
    errorIconTypeHTML=getErrorIconTypeHTML();
    successIconTypeHTML=getSuccessIconTypeHTML();
  }

  function makeModalDiv(){
    //Writting the Modal's div if not exist
    if($("#tempDivBeatal").length == 0){
      $("body").append("<div id=\"tempDivBeatal\"></div>");
    }else{
      $("#tempDivBeatal").html("");
    }
  }

  function putAttrsTemplate(type,title,text,textBtnClose,actionBtnText,actionBtnFunction){
    //Setting the Modal's attrs
    //Put Title
    $(modalTemplateHTML).find(".modal-title").html(title);
    //Put Text
    $(modalTemplateHTML).find(".modal-body>p").html(text);
    //Put text Button Close
    if(textBtnClose!=null){
      $(modalTemplateHTML).find(".btn.btn-default").html(textBtnClose);
      $(modalTemplateHTML).find(".btn.btn-default").click(function(){
                                                            clearModal();
                                                          });
    }
    //Put icon type before the title
    if(type==="warning"){
      $(warningIconTypeHTML).insertBefore($(modalTemplateHTML).find(".modal-title")).css("color", "#f0ad4e");
    }else if(type==="error"){
      $(errorIconTypeHTML).insertBefore($(modalTemplateHTML).find(".modal-title")).css("color", "#d9534f");
    }else if(type==="success"){
      $(successIconTypeHTML).insertBefore($(modalTemplateHTML).find(".modal-title")).css("color", "#449d44");
    }
    //Put Button Action if exist his name
    if(actionBtnText!=null){
      $(modalTemplateHTML).find(".modal-footer").append(actionBtnHTML);
      $(modalTemplateHTML).find(".btn.btn-info").html(actionBtnText);
    }
    //Put Action Function in Button
    if(actionBtnFunction!=null){
      $(actionBtnHTML).click(function(){
                                $(modalTemplateHTML).find(".btn.btn-default").click();
                                actionBtnFunction();        
        });
    }
  }

  function writeModal(){
    //Writting Modal in its div
    $("#tempDivBeatal").html($(modalTemplateHTML));
    $(modalTemplateHTML).modal('show');
  }
});