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
    $(modalTemplateHTML).find(".btn.btn-primary").html(actionBtnText);
  }
  //Put action button
  if(actionBtnFunction!=null){
    $(actionBtnHTML).click(actionBtnFunction);
  }

  //Open modal
  $(modalTemplateHTML).modal('show');
}