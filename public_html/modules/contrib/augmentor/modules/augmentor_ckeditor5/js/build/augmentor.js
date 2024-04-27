!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.augmentor=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/utils.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";o.d(r,{default:()=>a});var e=o("ckeditor5/src/core.js"),t=o("ckeditor5/src/ui.js");var s=o("ckeditor5/src/utils.js");class n extends e.Command{constructor(e,t){super(e),this._config=t}execute(e={}){const t=this.editor,o=t.model.document.selection,r=o.getLastPosition(),s=o.getRanges();let n="";for(let e of s)for(let t of e.getItems())void 0!==t.data&&(n=n+t.data+" ");var d={input:n,augmentor:e,type:"ckeditor"};t.model.change((e=>{fetch(drupalSettings.path.baseUrl+"augmentor/execute/augmentor",{method:"POST",credentials:"same-origin",body:JSON.stringify(d)}).then((e=>{if(jQuery(".ajax-progress--fullscreen").remove(),e.ok)return e.json();this._showError(JSON.parse(result.responseJSON))})).then((e=>this._updateCkeditor(e,r))).catch((e=>{this._showError(e)}))}))}_updateCkeditor(e,t){var o=JSON.parse(e);o=(o="<br/>"+o.default.toString()).replaceAll("\n","<br/>");const r=this.editor,s=r.data.processor.toView(o),n=r.data.toModel(s);r.model.insertContent(n,t)}_showError(e){const t=new Drupal.Message;t.clear(),t.add(e,{type:"error"}),jQuery("html, body").animate({scrollTop:0},"slow")}}class d extends e.Plugin{init(){const e=this.editor,o=this.editor.config.get("augmentors")[0].augmentors;e.commands.add("executeCommand",new n(e,o)),e.ui.componentFactory.add("augmentor",(e=>{const r=new s.Collection;Object.keys(o).forEach((e=>{r.add({type:"button",model:new t.Model({id:e,label:o[e],withText:!0,command:"executeCommand"})})}));const n=(0,t.createDropdown)(e,t.DropdownButtonView);return(0,t.addListToDropdown)(n,r),n.buttonView.set({label:"Augmentors",class:"augmentor-dropdown",icon:'<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"\n "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">\n<svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"\n preserveAspectRatio="xMidYMid meet">\n\n<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"\nfill="#000000" stroke="none">\n<path d="M25 135 c-50 -49 -15 -135 55 -135 41 0 80 39 80 80 0 41 -39 80 -80\n80 -19 0 -40 -9 -55 -25z m97 -12 c38 -34 11 -103 -40 -103 -54 0 -81 62 -45\n102 20 22 61 23 85 1z"/>\n<path d="M50 105 c-26 -32 13 -81 48 -59 9 6 18 19 20 28 8 38 -43 61 -68 31z\nm46 -16 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"/>\n</g>\n</svg>\n',tooltip:!0,withText:!0}),this.listenTo(n,"execute",(e=>{var t=this.editor.sourceElement.id;jQuery("#"+t).before(Drupal.theme.ajaxProgressIndicatorFullscreen()),this.editor.execute(e.source.command,e.source.id)})),n}))}}class i extends e.Plugin{static get requires(){return[d,t.ContextualBalloon]}}const a={augmentor:i}})(),r=r.default})()));