//Import the util datas
import { modalTemplateHTML, actionBtnHTML, warningIconTypeHTML, errorIconTypeHTML , successIconTypeHTML } from './exportSingleModal';

global.beatal = function beatalCall(type,title,text,textBtnClose,actionBtnText,actionBtnFunction){
  //Put Title
  $(modalTemplateHTML).find(".modal-title").html(title);
  //Put Text
  $(modalTemplateHTML).find(".modal-body>p").html(text);
  //Put text Button Close
  if(textBtnClose!=null){
    $(modalTemplateHTML).find(".btn.btn-default").html(textBtnClose);
    $(modalTemplateHTML).find(".btn.btn-default").click(function(){
                                                          clearModal()
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
  //Put Button Action
  if(actionBtnText!=null){
    $(modalTemplateHTML).find(".modal-footer").append(actionBtnHTML);
    $(modalTemplateHTML).find(".btn.btn-info").html(actionBtnText);
  }
  //Put action button
  if(actionBtnFunction!=null){
    $(actionBtnHTML).click(function(){
                              actionBtnFunction();
                              $(modalTemplateHTML).find(".btn.btn-default").click();
                             });
  }

  //Open modal
  //$(modalTemplateHTML).modal('show');
  $("body").append("<div id='tempDivBeatal'></div>");
  $("#tempDivBeatal").append($(modalTemplateHTML));
  $(modalTemplateHTML).modal('show');
}

global.clearModal = function clearModal(){
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $("#tempDivBeatal").remove();
}