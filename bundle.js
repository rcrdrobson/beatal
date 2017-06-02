(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _beatalCalls = require("./util/beatalCalls");

},{"./util/beatalCalls":2}],2:[function(require,module,exports){
(function (global){
"use strict";

var _exportSingleModal = require("./exportSingleModal");

global.beatal = function beatalCall(type, title, text, textBtnClose, actionBtnText, actionBtnFunction) {
  //Put Title
  $(_exportSingleModal.modalTemplateHTML).find(".modal-title").html(title);
  //Put Text
  $(_exportSingleModal.modalTemplateHTML).find(".modal-body>p").html(text);
  //Put text Button Close
  if (textBtnClose != null) {
    $(_exportSingleModal.modalTemplateHTML).find(".btn.btn-default").html(textBtnClose);
  }
  //Put icon type before the title
  if (type === "warning") {
    $(_exportSingleModal.warningIconTypeHTML).insertBefore($(_exportSingleModal.modalTemplateHTML).find(".modal-title")).css("color", "#f0ad4e");
  } else if (type === "error") {
    $(_exportSingleModal.errorIconTypeHTML).insertBefore($(_exportSingleModal.modalTemplateHTML).find(".modal-title")).css("color", "#d9534f");
  } else if (type === "success") {
    $(_exportSingleModal.successIconTypeHTML).insertBefore($(_exportSingleModal.modalTemplateHTML).find(".modal-title")).css("color", "#449d44");
  }
  //Put Button Action
  if (actionBtnText != null) {
    $(_exportSingleModal.modalTemplateHTML).find(".modal-footer").append(_exportSingleModal.actionBtnHTML);
    $(_exportSingleModal.modalTemplateHTML).find(".btn.btn-primary").html(actionBtnText);
  }
  //Put action button
  if (actionBtnFunction != null) {
    $(_exportSingleModal.actionBtnHTML).click(function () {
      actionBtnFunction();$(_exportSingleModal.modalTemplateHTML).find(".btn.btn-default").click();
    });
  }

  //Open modal
  $(_exportSingleModal.modalTemplateHTML).modal('show');
}; //Import the util datas

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./exportSingleModal":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//A single modal template Boostrap
var modalTemplateHTML = $.parseHTML('<!-- Modal -->' + '<div class="modal fade" id="beatalPluginModal" role="dialog">' + '<div class="modal-dialog modal-sm">' + '<!-- Modal content-->' + '<div class="modal-content">' + '<div class="modal-header">'
//+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
+ '<h4 class="modal-title">Modal Header</h4>' + '</div>' + '<div class="modal-body">' + '<p>Some text in the modal.</p>' + '</div>' + '<div class="modal-footer">' + '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' + '</div>' + '</div>' + '</div>' + '</div>');

//Button default to action option
var actionBtnHTML = $.parseHTML('<button id="actionBtnBeatalPluginModal" type="button" class="btn btn-primary btn-sm">Action Button</button>');

//Defining the icon types
var warningIconTypeHTML = $.parseHTML('<i class="fa fa-exclamation-triangle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');
var errorIconTypeHTML = $.parseHTML('<i class="fa fa-exclamation-circle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');
var successIconTypeHTML = $.parseHTML('<i class="fa fa-check-circle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');

exports.modalTemplateHTML = modalTemplateHTML;
exports.actionBtnHTML = actionBtnHTML;
exports.warningIconTypeHTML = warningIconTypeHTML;
exports.errorIconTypeHTML = errorIconTypeHTML;
exports.successIconTypeHTML = successIconTypeHTML;

},{}]},{},[1]);
