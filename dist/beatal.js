(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _beatalCalls = require("./util/beatalCalls");

var beatal = _interopRequireWildcard(_beatalCalls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

},{"./util/beatalCalls":2}],2:[function(require,module,exports){
(function (global){
'use strict';

var _exportSingleModal = require('./exportSingleModal');

//Aux vars
$(document).ready(function () {
  var modalTemplateHTML;
  var actionBtnHTML;
  var warningIconTypeHTML;
  var errorIconTypeHTML;
  var successIconTypeHTML;

  global.beatal = function beatalCall(type, title, text, textBtnClose, actionBtnText, actionBtnFunction) {
    //Setting Template Modal
    makeTemplate();

    //Writting the Modal's div if not exist
    makeModalDiv();

    //Setting the Modal's attrs
    putAttrsTemplate(type, title, text, textBtnClose, actionBtnText, actionBtnFunction);

    //Writting Modal in its div
    writeModal();
  };

  //********************
  //Aux functions
  //********************
  function clearModal() {
    $('.modal-backdrop').remove();
  }

  function makeTemplate() {
    //Setting Template Modal
    modalTemplateHTML = (0, _exportSingleModal.getModalTemplateHTML)();
    actionBtnHTML = (0, _exportSingleModal.getActionBtnHTML)();
    warningIconTypeHTML = (0, _exportSingleModal.getWarningIconTypeHTML)();
    errorIconTypeHTML = (0, _exportSingleModal.getErrorIconTypeHTML)();
    successIconTypeHTML = (0, _exportSingleModal.getSuccessIconTypeHTML)();
  }

  function makeModalDiv() {
    //Writting the Modal's div if not exist
    if ($("#tempDivBeatal").length == 0) {
      $("body").append("<div id=\"tempDivBeatal\"></div>");
    } else {
      $("#tempDivBeatal").html("");
    }
  }

  function putAttrsTemplate(type, title, text, textBtnClose, actionBtnText, actionBtnFunction) {
    //Setting the Modal's attrs
    //Put Title
    $(modalTemplateHTML).find(".modal-title").html(title);
    //Put Text
    $(modalTemplateHTML).find(".modal-body>p").html(text);
    //Put text Button Close
    if (textBtnClose != null) {
      $(modalTemplateHTML).find(".btn.btn-default").html(textBtnClose);
      $(modalTemplateHTML).find(".btn.btn-default").click(function () {
        clearModal();
      });
    }
    //Put icon type before the title
    if (type === "warning") {
      $(warningIconTypeHTML).insertBefore($(modalTemplateHTML).find(".modal-title")).css("color", "#f0ad4e");
    } else if (type === "error") {
      $(errorIconTypeHTML).insertBefore($(modalTemplateHTML).find(".modal-title")).css("color", "#d9534f");
    } else if (type === "success") {
      $(successIconTypeHTML).insertBefore($(modalTemplateHTML).find(".modal-title")).css("color", "#449d44");
    }
    //Put Button Action if exist his name
    if (actionBtnText != null) {
      $(modalTemplateHTML).find(".modal-footer").append(actionBtnHTML);
      $(modalTemplateHTML).find(".btn.btn-info").html(actionBtnText);
    }
    //Put Action Function in Button
    if (actionBtnFunction != null) {
      $(actionBtnHTML).click(function () {
        $(modalTemplateHTML).find(".btn.btn-default").click();
        actionBtnFunction();
      });
    }
  }

  function writeModal() {
    //Writting Modal in its div
    $("#tempDivBeatal").html($(modalTemplateHTML));
    $(modalTemplateHTML).modal({ backdrop: 'static', keyboard: false });
    $(modalTemplateHTML).modal('show');
  }
}); //Import the util datas

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./exportSingleModal":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//A single modal template Boostrap
function getModalTemplateHTML() {
  return $.parseHTML('<!-- Modal -->' + '<div class="modal fade" id="beatalPluginModal" role="dialog">' + '<div class="modal-dialog modal-sm">' + '<!-- Modal content-->' + '<div class="modal-content">' + '<div class="modal-header">'
  //+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
  + '<h4 class="modal-title">Modal Header</h4>' + '</div>' + '<div class="modal-body">' + '<p>Some text in the modal.</p>' + '</div>' + '<div class="modal-footer">' + '<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button>' + '</div>' + '</div>' + '</div>' + '</div>');
}

//Button default to action option
function getActionBtnHTML() {
  return $.parseHTML('<button id="actionBtnBeatalPluginModal" type="button" class="btn btn-info btn-sm">Action Button</button>');
}
//Defining the icon types
function getWarningIconTypeHTML() {
  return $.parseHTML('<i class="fa fa-exclamation-triangle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');
}

function getErrorIconTypeHTML() {
  return $.parseHTML('<i class="fa fa-exclamation-circle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');
}

function getSuccessIconTypeHTML() {
  return $.parseHTML('<i class="fa fa-check-circle fa-2x" aria-hidden="true" style="float:left; margin-right:20px;"></i>');
}

exports.getModalTemplateHTML = getModalTemplateHTML;
exports.getActionBtnHTML = getActionBtnHTML;
exports.getWarningIconTypeHTML = getWarningIconTypeHTML;
exports.getErrorIconTypeHTML = getErrorIconTypeHTML;
exports.getSuccessIconTypeHTML = getSuccessIconTypeHTML;

},{}]},{},[1]);
