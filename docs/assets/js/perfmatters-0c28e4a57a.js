!function(t){function n(e){if(o[e])return o[e].exports;var d=o[e]={exports:{},id:e,loaded:!1};return t[e].call(d.exports,d,d.exports,n),d.loaded=!0,d.exports}var o={};return n.m=t,n.c=o,n.p="",n(0)}([function(t,n){"use strict";function o(){var t=window.performance.timing,n=t.domContentLoadedEventStart-t.domLoading,o=t.domComplete-t.domLoading,e=document.getElementById("crp-stats");e.textContent="DCL: "+n+"ms, onload: "+o+"ms"}window.addEventListener("load",function(t){o()})}]);