var a1_0x587e=['deasciifyRange','_getInputSelection','start','end','_deasciify_word_at_cursor','createTextRange','collapse','moveStart','character','startRestore','moveEnd','endRestore','select','addEventListener','attachEvent','removeEventListener','detachEvent','selection','createRange','parentElement','compareEndPoints','length','EndToEnd','slice','which','keyCode','_is_keycode_seperator','_is_seperator','charAt','_find_last_word_seperator','_installedObjects','undefined','_getKeyupHandler','_addEvent','_keyupHandlers','_enabledObjects','_afterDeasciifyCallbacks','_removeEvent','keyup','selectionStart','selectionEnd','deasciify','value','_deasciifier'];(function(_0x37a313,_0x4c2d8c){var _0x28d476=function(_0x230846){while(--_0x230846){_0x37a313['push'](_0x37a313['shift']());}};_0x28d476(++_0x4c2d8c);}(a1_0x587e,0x1d6));var a1_0x13a0=function(_0x33cfbf,_0x2fc33e){_0x33cfbf=_0x33cfbf-0x0;var _0x308332=a1_0x587e[_0x33cfbf];return _0x308332;};var DeasciifyHandler={'init':function(){this['_deasciifier']=new Deasciifier();},'install':function(_0x370be7,_0x4d6f5e,_0x39177c){if(!_0x370be7){return![];}if(this[a1_0x13a0('0x0')][_0x370be7]){return;}if(typeof _0x4d6f5e==a1_0x13a0('0x1')){_0x4d6f5e=!![];}var _0x2006cc=this[a1_0x13a0('0x2')](_0x370be7);this[a1_0x13a0('0x3')](_0x370be7,'keyup',_0x2006cc);this[a1_0x13a0('0x4')][_0x370be7]=_0x2006cc;this[a1_0x13a0('0x0')][_0x370be7]=!![];this[a1_0x13a0('0x5')][_0x370be7]=_0x4d6f5e;this[a1_0x13a0('0x6')][_0x370be7]=_0x39177c;},'uninstall':function(_0x572eea){if(this['_keyupHandlers'][_0x572eea]){this[a1_0x13a0('0x7')](_0x572eea,a1_0x13a0('0x8'),this[a1_0x13a0('0x4')][_0x572eea]);this[a1_0x13a0('0x0')][_0x572eea]=null;this[a1_0x13a0('0x5')][_0x572eea]=null;this[a1_0x13a0('0x4')][_0x572eea]=null;}},'deasciify':function(_0x4bc746,_0x57850a){if(!_0x4bc746){return;}if(typeof _0x4bc746[a1_0x13a0('0x9')]!='undefined'){var _0x4b842f=_0x4bc746[a1_0x13a0('0x9')];var _0xb54db2=_0x4bc746[a1_0x13a0('0xa')];if(_0x4bc746['selectionStart']==_0x4bc746[a1_0x13a0('0xa')]){if(_0x57850a){_0x4bc746['value']=this['_deasciifier'][a1_0x13a0('0xb')](_0x4bc746[a1_0x13a0('0xc')]);}else{_0x4bc746[a1_0x13a0('0xc')]=this['_deasciify_word_at_cursor'](_0x4bc746[a1_0x13a0('0xc')],_0x4b842f);}}else{_0x4bc746['value']=this[a1_0x13a0('0xd')][a1_0x13a0('0xe')](_0x4bc746[a1_0x13a0('0xc')],_0x4b842f,_0xb54db2);}_0x4bc746['selectionStart']=_0x4b842f;_0x4bc746['selectionEnd']=_0xb54db2;}else{var _0x346394=this[a1_0x13a0('0xf')](_0x4bc746);var _0x4b842f=_0x346394[a1_0x13a0('0x10')];var _0xb54db2=_0x346394[a1_0x13a0('0x11')];if(_0x4b842f==_0xb54db2){if(_0x57850a){_0x4bc746[a1_0x13a0('0xc')]=this[a1_0x13a0('0xd')]['deasciify'](_0x4bc746[a1_0x13a0('0xc')]);}else{_0x4bc746['value']=this[a1_0x13a0('0x12')](_0x4bc746['value'],_0x4b842f);}}else{_0x4bc746[a1_0x13a0('0xc')]=this['_deasciifier'][a1_0x13a0('0xe')](_0x4bc746[a1_0x13a0('0xc')],_0x4b842f,_0xb54db2);}var _0x461476=_0x4bc746[a1_0x13a0('0x13')]();_0x461476[a1_0x13a0('0x14')](!![]);_0x461476[a1_0x13a0('0x15')](a1_0x13a0('0x16'),_0x346394[a1_0x13a0('0x17')]);_0x461476[a1_0x13a0('0x18')]('character',_0x346394[a1_0x13a0('0x19')]-_0x346394[a1_0x13a0('0x17')]);_0x461476[a1_0x13a0('0x1a')]();}},'deasciifyText':function(_0x259055){if(!_0x259055)return _0x259055;return this[a1_0x13a0('0xd')][a1_0x13a0('0xb')](_0x259055);},'setEnabled':function(_0x1a513d,_0x64669c){this[a1_0x13a0('0x5')][_0x1a513d]=_0x64669c;},'getEnabled':function(_0x35c56e){return this[a1_0x13a0('0x5')][_0x35c56e]?!![]:![];},'_installedObjects':{},'_enabledObjects':{},'_keyupHandlers':{},'_afterDeasciifyCallbacks':{},'_is_keycode_seperator':function(_0x5cf193){return _0x5cf193==0x20||_0x5cf193==0xd||_0x5cf193==0xbc||_0x5cf193==0xbe||_0x5cf193==0xbf||_0x5cf193==0xbd||_0x5cf193==0x32||_0x5cf193==0xba||_0x5cf193==0x38||_0x5cf193==0x39||_0x5cf193==0x30;},'_is_seperator':function(_0xfc2558){return _0xfc2558=='\x20'||_0xfc2558=='\x0a'||_0xfc2558=='.'||_0xfc2558==','||_0xfc2558==';'||_0xfc2558=='?'||_0xfc2558=='!'||_0xfc2558=='('||_0xfc2558==')'||_0xfc2558=='*'||_0xfc2558=='&'||_0xfc2558=='@'||_0xfc2558=='-';},'_addEvent':function(_0x748ee7,_0x5e5bdf,_0x1a419f){if(_0x748ee7[a1_0x13a0('0x1b')]){_0x748ee7[a1_0x13a0('0x1b')](_0x5e5bdf,_0x1a419f,![]);}else{if(_0x748ee7[a1_0x13a0('0x1c')]){_0x748ee7[a1_0x13a0('0x1c')]('on'+_0x5e5bdf,_0x1a419f);}}},'_removeEvent':function(_0x15f5d1,_0x11c043,_0x462258){if(_0x15f5d1[a1_0x13a0('0x1d')]){_0x15f5d1[a1_0x13a0('0x1d')](_0x11c043,_0x462258);}else{if(_0x15f5d1[a1_0x13a0('0x1e')]){_0x15f5d1[a1_0x13a0('0x1e')]('on'+_0x11c043,_0x462258);}}},'_getInputSelection':function(_0x7404ba){var _0x284c66=0x0,_0x1940ef=0x0,_0x4af6da,_0x5e0b03,_0x3dcb0f,_0x2548de,_0x2a0572;var _0x3348d9,_0x5cbd7e;_0x5e0b03=document[a1_0x13a0('0x1f')][a1_0x13a0('0x20')]();if(_0x5e0b03&&_0x5e0b03[a1_0x13a0('0x21')]()==_0x7404ba){_0x2548de=_0x7404ba[a1_0x13a0('0xc')]['length'];_0x4af6da=_0x7404ba[a1_0x13a0('0xc')]['replace'](/\r\n/g,'\x0a');_0x3dcb0f=_0x7404ba['createTextRange']();_0x3dcb0f['moveToBookmark'](_0x5e0b03['getBookmark']());_0x2a0572=_0x7404ba[a1_0x13a0('0x13')]();_0x2a0572[a1_0x13a0('0x14')](![]);if(_0x3dcb0f[a1_0x13a0('0x22')]('StartToEnd',_0x2a0572)>-0x1){_0x284c66=_0x1940ef=_0x2548de;_0x3348d9=0x0;_0x5cbd7e=0x0;}else{_0x284c66=-_0x3dcb0f[a1_0x13a0('0x15')](a1_0x13a0('0x16'),-_0x2548de);_0x3348d9=_0x4af6da['slice'](0x0,_0x284c66)['split']('\x0a')[a1_0x13a0('0x23')]-0x1;_0x284c66+=_0x3348d9;if(_0x3dcb0f[a1_0x13a0('0x22')](a1_0x13a0('0x24'),_0x2a0572)>-0x1){_0x1940ef=_0x2548de;}else{_0x1940ef=-_0x3dcb0f[a1_0x13a0('0x18')]('character',-_0x2548de);_0x5cbd7e=_0x4af6da[a1_0x13a0('0x25')](0x0,_0x1940ef)['split']('\x0a')[a1_0x13a0('0x23')]-0x1;_0x1940ef+=_0x5cbd7e;}}}return{'start':_0x284c66,'end':_0x1940ef,'startRestore':_0x284c66-_0x3348d9,'endRestore':_0x1940ef-_0x5cbd7e};},'_getKeyupHandler':function(_0x45c325){var _0x4a2a45=this;return function(_0x583cc5){if(!_0x4a2a45[a1_0x13a0('0x5')][_0x45c325]){return;}var _0x3e04e2;if(_0x583cc5){_0x3e04e2=_0x583cc5[a1_0x13a0('0x26')]?_0x583cc5[a1_0x13a0('0x26')]:event[a1_0x13a0('0x27')];}else{_0x3e04e2=event[a1_0x13a0('0x27')];}if(_0x4a2a45[a1_0x13a0('0x28')](_0x3e04e2)){_0x4a2a45[a1_0x13a0('0xb')](_0x45c325);if(_0x4a2a45[a1_0x13a0('0x6')][_0x45c325]){_0x4a2a45[a1_0x13a0('0x6')][_0x45c325](_0x45c325);}}};},'_find_last_word_seperator':function(_0x4f6d9a,_0x382f43){if(_0x382f43>=_0x4f6d9a[a1_0x13a0('0x23')]){_0x382f43=_0x4f6d9a[a1_0x13a0('0x23')]-0x1;}for(var _0x5878c5=_0x382f43;_0x5878c5>0x0;_0x5878c5--){if(this[a1_0x13a0('0x29')](_0x4f6d9a[a1_0x13a0('0x2a')](_0x5878c5))&&!this['_is_seperator'](_0x4f6d9a[a1_0x13a0('0x2a')](_0x5878c5-0x1))){return _0x5878c5;}}return 0x0;},'_deasciify_word_at_cursor':function(_0x11d8c3,_0x2f4930){var _0x5d0296=this[a1_0x13a0('0x2b')](_0x11d8c3,_0x2f4930);var _0x220f4f=0x0;if(_0x5d0296>0x0){_0x220f4f=this['_find_last_word_seperator'](_0x11d8c3,_0x5d0296-0x1);}return this[a1_0x13a0('0xd')]['deasciifyRange'](_0x11d8c3,_0x220f4f,_0x5d0296);}};