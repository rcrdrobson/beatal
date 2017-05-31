var popupHTML = '<!-- Modal -->'
                +'<div class="modal fade" id="beatalPluginModal" role="dialog">'
                  +'<div class="modal-dialog modal-sm">'
                    +'<!-- Modal content-->'
                    +'<div class="modal-content">'
                      +'<div class="modal-header">'
                        +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
                        +'<h4 class="modal-title">Modal Header</h4>'
                      +'</div>'
                      +'<div class="modal-body">'
                        +'<p>Some text in the modal.</p>'
                      +'</div>'
                      +'<div class="modal-footer">'
                        +'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
                      +'</div>'
                    +'</div>'
                    
                  +'</div>'
                +'</div>';

var btnHTML = '<button hidden="hidden" type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#beatalPluginModal">Open Modal</button>'
var actionBtnHTML = '<button id="actionBtnBeatalPluginModal" type="button" class="btn btn-primary btn-sm">Action Button</button>'

var warningIconHTML = '<i class="fa fa-exclamation-triangle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>';
var errorIconHTML = '<i class="fa fa-exclamation-circle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>';
var successIconHTML = '<i class="fa fa-check-circle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>';


function beatal(type,title,text,actionBtnText,actionBtnFunction){
  var tempPopupHTML = $.parseHTML(popupHTML);
  //Put Title
  $(tempPopupHTML).find(".modal-title").html(title);
  //Put Text
  
  $(tempPopupHTML).find(".modal-body>p").html(text);
  //Put icon type
  if(type==="warning"){
    $($.parseHTML(warningIconHTML)).insertBefore($(tempPopupHTML).find(".modal-title"));
  }else if(type==="error"){
    $($.parseHTML(errorIconHTML)).insertBefore($(tempPopupHTML).find(".modal-title"));
  }else if(type==="success"){
    $($.parseHTML(successIconHTML)).insertBefore($(tempPopupHTML).find(".modal-title"));
  }

  if(actionBtnText!=null){
      actionBtnHTML
      var tempActionBtnHTML = $.parseHTML(actionBtnHTML);
      $(tempActionBtnHTML).html(actionBtnText);
      $(tempPopupHTML).find(".modal-footer").append($(tempActionBtnHTML));
  }

  //Write Modal and Click
  $("body").append("<div id='tempDivBeatal'></div>");
  $("#tempDivBeatal").append($(tempPopupHTML));
  var tempBtnPopup = $.parseHTML(btnHTML)
  $("#tempDivBeatal").append($(tempBtnPopup));
  $(tempBtnPopup).click();

  //TODO remove modal #tempDivBeatal
  /*
  ...
  ...
  ...
  */
}


