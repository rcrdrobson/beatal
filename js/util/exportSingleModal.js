//A single modal template Boostrap
var modalTemplateHTML = $.parseHTML('<!-- Modal -->'
                                    +'<div class="modal fade" id="beatalPluginModal" role="dialog">'
                                      +'<div class="modal-dialog modal-sm">'
                                        +'<!-- Modal content-->'
                                        +'<div class="modal-content">'
                                          +'<div class="modal-header">'
                                            //+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
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
                                    +'</div>');

//Button default to action option
var actionBtnHTML = $.parseHTML('<button id="actionBtnBeatalPluginModal" type="button" class="btn btn-primary btn-sm">Action Button</button>');

//Defining the icon types
var warningIconTypeHTML = $.parseHTML('<i class="fa fa-exclamation-triangle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');
var errorIconTypeHTML = $.parseHTML('<i class="fa fa-exclamation-circle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');
var successIconTypeHTML = $.parseHTML('<i class="fa fa-check-circle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');

export { modalTemplateHTML, actionBtnHTML, warningIconTypeHTML, errorIconTypeHTML , successIconTypeHTML};