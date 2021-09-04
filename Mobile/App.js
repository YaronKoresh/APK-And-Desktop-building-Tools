// imports

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import { Avatar, Badge, withBadge, BottomSheet, Button, ButtonGroup, Card, ListItem, CheckBox, Chip, Divider, FAB, Header, Image, Input, LinearProgress, Overlay, PricingCard, Rating, AirbnbRating, SearchBar, Slider, SocialIcon, SpeedDial, Switch, Tab, Tile, Tooltip, Icon } from 'react-native-elements';
import CircularSlider from 'react-native-elements-universe';

// scripts

export function Giselle(allCode) {
	function DegreeUp() {
		parametersDegree++;
		code[i] += '(';
	}
	function DegreeDown() {
		parametersDegree--;
		code[i] += ')';
	}
	function Dependent(arg1, arg2, arg3) {
		if (arg1) {
			if (arg2 == /^\*/) {
				theDev = false;
				throw new Error('Error in line ' + (i + 1) + ': ' + arg2.toString().substring(1) + '.');
			} else {
				return arg2;
			}
		} else {
			if (arg3 == /^\*/) {
				theDev = false;
				throw new Error('Error in line ' + (i + 1) + ': ' + arg3.toString().substring(1) + '.');
			} else {
				return arg3;
			}
		}
	}
	function Looper(arg) {
		var l = Math.Random();
    currentScope++;
		if (typeof arg == 'number') {
			return 'for (var _' + l + ' = 0 ; _' + l + ' < ' + arg + ' ; _' + l + '++){';
		} else {
			return 'while (' + arg + '){';
		}
	}
	function GiselleCalc(arg1, arg2, arg3, arg4, arg5) {
		if (typeof arg5 == 'undefined') {
			arg5 = '++';
		}
		if (currentMode == 'operation') {
			if (arg1 == /^\*/) {
				theDev = false;
				throw new Error('Error in line ' + (i + 1) + ': ' + arg1.toString().substring(1) + '.');
			} else {
				if (arg5.substring(1) == '+') {
					code[i] += ' ' + arg1.toString();
				} else if (arg5.substring(1) == '-') {
					code[i] += arg1.toString();
				}
			}
		} else if (currentMode == 'operand') {
			if (arg2 == /^\*/) {
				theDev = false;
				throw new Error('Error in line ' + (i + 1) + ': ' + arg2.toString().substring(1) + '.');
			} else {
				if (arg5.substring(0, 1) == '+') {
					code[i] += ',' + arg1.toString();
				} else if (arg5.substring(0, 1) == '-') {
					code[i] += '+' + arg1.toString();
				}
			}
		}
		if (arg3 != 2) {
			currentMode = innerModes[arg3];
		}
		currentScope += arg4;
	}
	var i = 0;
  var j = 0;
  var k = 0;
  var inter = 'Internal Error: Please report a bug to the developer, with the following details: ';
  var currentScope = 0;
	var parametersDegree = 0;
	var innerModes = [
		'operand',
		'operation'
	];
  var code = [];
  var arrayNow = false;
	var currentMode = '';
	var lastWord = '';
	var nextWord = '';
	var word = '';
	var found = false;
	var regOpen = '(';
  var regOr = '|';
	var regCloseAny = '){0,}';
	var regCloseOne = '){1}';
	var regCloseOneOrZero = '){0,1}';
	var regCloseOneOrMore = '){1,}';
	var regAnySpace = regOpen + regOpen + ' ' + regOr + '\t' + regCloseOne + regCloseAny;
	var regSpace = regOpen + regOpen + ' ' + regOr + '\t' + regCloseOne + regCloseOneOrMore;
	var regVariableName = regOpen + regAnySpace + regOpen + '[a-zA-Z_]' + regCloseOne + regOpen + '[a-zA-Z0-9_]' + regCloseAny + regAnySpace + regCloseOne;
	var regLoop = regOpen + regAnySpace + 'loop' + regCloseOne + regOpen + regSpace + regOpen + '[0-9]' + regCloseOneOrMore + regOr + regOpen + regVariableName + regCloseOne + regOpen + regSpace + 'times' + regCloseOne + regAnySpace + regCloseOneOrZero;
	var regCommands = regOpen + regAnySpace + regOpen + regOpen + 'say' + regCloseOne + regOr + regOpen + 'sql' + regCloseOne + regOr + regOpen + 'break' + regCloseOne + regOr + regOpen + regLoop + regCloseOne + regCloseOne + regAnySpace + regCloseOne;
	var regBy = regOpen + regAnySpace + 'by' + regSpace + regOpen + '[a-zA-Z]' + regCloseOneOrMore + regAnySpace + regCloseOne;
  var regKeys = regOpen + regAnySpace + regOpen + 'window' + regCloseOneOrZero + regOpen + 'current' + regCloseOneOrZero + regOpen + 'empty' + regCloseOneOrZero + regOpen + 'newline' + regCloseOneOrZero + regAnySpace + regCloseOne;
	var regText = regOpen + regOpen + regAnySpace + 'text' + regCloseOne + regOpen + regSpace + regOpen + '[^ \f\n\r\t\x0B\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]' + regCloseOneOrMore + regCloseOneOrMore + regSpace + regOpen + regAnySpace + 'as' + regCloseOne + regSpace + regOpen + 'one' + regOr + 'some' + regOr + 'number' + regOr + 'boolean' + regOr + 'object' + regCloseOne + regAnySpace + regCloseOneOrMore;
  var regIn = regOpen + regAnySpace + 'in' + regSpace + regOpen + regVariableName + regOr + regText + regCloseOne + regAnySpace + regCloseOne;
	var regStorage = regOpen + regAnySpace + regVariableName + regOpen + regSpace + regOpen + regIn + regSpace + regCloseOneOrZero + 'will' + regSpace + regOpen + 'store' + regOr + 'gain' + regOr + 'lose' + regOr + 'do' + regCloseOne + regCloseOne + regOr + regOpen + regSpace + 'is' + regSpace + regOpen + 'like' + regOr + 'not' + regCloseOne + regCloseOne + regAnySpace + regCloseOne;
	var regData = regOpen + regBy + regOr + regIn + regOr + regText + regOr + regKeys + regCloseOne;
	var regFullCommand = regOpen + regCommands + regOr + regData + regCloseOneOrMore;
	var regFullStorage = regOpen + regStorage + regOr + regData + regCloseOneOrMore;
	var regNext = regOpen + regAnySpace + regOpen + 'also' + regOr + 'with' + regOr + 'without' + regCloseOne + regAnySpace + regCloseOne;
	var regAssignment = regOpen + regAnySpace + regFullStorage + regAnySpace + regOpen + regSpace + regFullCommand + regOpen + regAnySpace + regNext + regAnySpace + regFullCommand + regCloseAny + regCloseOneOrZero + regAnySpace + regCloseOne;
	var regActivity = regOpen + regAnySpace + regFullCommand + regAnySpace + regCloseOne;
	var regTester = regOpen + regAnySpace + regAssignment + regOr + regActivity + regAnySpace + regCloseOne;
	var reg = new RegExp('^' + regTester + '$');
  try {
  	var theDev = false;
	(var lines = allCode.replace('\n\n', '').replace(/^\n/, '').replace(/\n$/, '').split('\n')) || (var lines = window.document.currentScript.getAttribute("code").replace('\n\n', '').replace(/^\n/, '').replace(/\n$/, '').split('\n'));
		for (i = 0; i < lines.length; i++) {
			theDev = true;
			currentMode = innerModes[1];
			lastWord = '';
			if (reg.test(lines[i])) {
				theDev = false;
				var words = lines[i].split(/(( |\t){1}){0,}/);
				code[i] = '(';
				for (j = 0; j < words.length - 1; j++) {
					found = false;
					(nextWord = words[j + 1]) || (nextWord = '');
					word = words[j];
					theDev = true;
					(word == 'loop') && (GiselleCalc(Dependent('words[j+2]=="times"', Dependent('parametersDegree==0', Looper(nextWord), '*could not create a loop as a parameter. Please create the loop in a seperate line of code'), Dependent('parametersDegree==0', Looper(true), '*could not create a loop as a parameter. Please create the loop in a seperate line of code')), '"loop"', 2, 0)) && (found = true);
					(found == false) && (word == 'times') && (GiselleCalc(Dependent('words[j-2]=="loop"', '', '*unknown command "times"'), '"times"', 2, 0)) && (found = true);
					(found == false) && (word == 'not') && (GiselleCalc(Dependent('lastWord=="is"', '', '*unknown command not. You may forgot using "is"'), 'not', 2, 0)) && (found = true);
					(found == false) && (word == /^(~){1}$/) && (GiselleCalc('*unknown command "~"', '\" \"', 2, 0, '+-')) && (found = true);
					(found == false) && (word == /^(~){2,}$/) && (GiselleCalc('*unknown command ' + word.substring(1), word.substring(1), 2, 0, '++')) && (found = true);
					(found == false) && (word == 'by') && (GiselleCalc('.', '"by"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'sql') && (GiselleCalc('require("sqlite3").Database("/GiselleDB").run', '"sql"', 2, 0, '++') && DegreeUp()) && (found = true);
					(found == false) && (word == 'size') && (GiselleCalc(Dependent('lastWord=="by"', 'length', '*unknown command "size"'), '"size"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'parent') && (GiselleCalc(Dependent('lastWord=="by"', 'parentNode', '*unknown command "parent"'), '"parent"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'break') && (GiselleCalc('break', '"break"', 2, 0)) && (found = true);
					(found == false) && (word == 'empty') && (GiselleCalc('""', '"empty"', 2, 0)) && (found = true);
					(found == false) && (word == 'node') && (GiselleCalc(Dependent('lastWord=="by"', 'nodeType', '*unknown command "size"'), '"node"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'item') && (GiselleCalc(Dependent('lastWord=="by"', 'item', '*unknown command "item"'), '"item"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'html') && (GiselleCalc(Dependent('lastWord=="by"', 'innerHTML', '*unknown command "html"'), '"html"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'script') && (GiselleCalc(Dependent('lastWord=="by"', 'currentScript', '*unknown command "script"'), '"script"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'document') && (GiselleCalc(Dependent('lastWord=="by"', 'document', '*unknown command "document"'), '"document"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'window') && (GiselleCalc('window', '"window"', 2, 0)) && (found = true);
					(found == false) && (word == 'link') && (GiselleCalc(Dependent('lastWord=="by"', 'open', '*unknown command "link"'), '"link"', 2, 0) && DegreeUp()) && (found = true);
					(found == false) && (word == 'current') && (GiselleCalc('this', '"this"', 2, 0, Dependent('lastWord=="by"', '-+', '++'))) && (found = true);
					(found == false) && (word == 'newline') && (GiselleCalc('*unknown command "newline"', '\n', 2, 0, '+-')) && (found = true);
					(found == false) && (word == 'text') && (GiselleCalc('[""', 'text', 0, 0)) && (found = true);
          				(found == false) && (word == 'in') && (GiselleCalc('[', '\"in\"', 2, 0,'-+')) && (arrayNow = true) && (found = true);
					(found == false) && (word == 'as') && (GiselleCalc('*unknown command "as"', '', 1, 0)) && (found = true);
					(found == false) && (word == 'one') && (GiselleCalc(Dependent('lastWord=="as"', '].join("")', '*unknown command "one"'), '"one"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'some') && (GiselleCalc(Dependent('lastWord=="as"', ']', '*unknown command "some"'), '"some"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'number') && (GiselleCalc(Dependent('lastWord=="as"', '].forEach(_$D$A$T$A$_ => parseInt(_$D$A$T$A$_))', '*unknown command "number"'), '"number"', 2, 0, '-+')) && Dependent('arrayNow=="true"', 'code[i] += "]"','') && (arrayNow = false) && (found = true);
					(found == false) && (word == 'boolean') && (GiselleCalc(Dependent('lastWord=="as"', '].forEach(_$D$A$T$A$_ => this === _$D$A$T$A$_)', '*unknown command "boolean"'), '"boolean"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'object') && (GiselleCalc(Dependent('lastWord=="as"', '].join("").forEach(_$D$A$T$A$_ => new Function(_$D$A$T$A$_))', '*unknown command "object"'), '"object"', 2, 0, '-+')) && (found = true);
					(found == false) && (word == 'say') && (GiselleCalc('\"alert\"', '\"say\"', 2, 0) && DegreeUp()) && (found = true);
					(found == false) && (word == 'with') && (GiselleCalc(')&&(', 'with', 2, 0)) && (found = true);
					(found == false) && (word == 'without') && (GiselleCalc(')&&(_$I$F$_=true);(_$I$F$_==false)&&(', 'without', 2, 0)) && (found = true);
					(found == false) && (word == 'also') && (GiselleCalc(Dependent('currentScope>0', ');(_$I$F$_ = false);(', '*please start a new line in your code, instead of using "also" keyword'), 'also', 2, 0)) && (found = true);
					(found == false) && (word == 'do') && (GiselleCalc(Dependent('lastWord==will', Dependent('parametersDegree==0', '=> {', '*you can not create a function as a parameter. Instead, please define the function in a seperate line in your code, then, call it as a parameter'), '*unknown command gain. You may forgot using "will"'), 'do', 2, 1)) && (found = true);
					(found == false) && (word == 'is') && (GiselleCalc('', 'is', 2, 0)) && (found = true);
					(found == false) && (word == 'like') && (GiselleCalc(Dependent('lastWord=="is"', '==', '*unknown command like. You may forgot using "is"'), 'like', 2, 0)) && (found = true);
					(found == false) && (word == 'not') && (GiselleCalc(Dependent('lastWord=="is"', '!=', '*unknown command not. You may forgot using "is"'), 'not', 2, 0)) && (found = true);
					(found == false) && (word == 'will') && (GiselleCalc('', 'will', 2, 0)) && (found = true);
					(found == false) && (word == 'gain') && (GiselleCalc(Dependent('lastWord=="will"', '+=', '*unknown command gain. You may forgot using "will"'), 'gain', 2, 0)) && (found = true);
					(found == false) && (word == 'lose') && (GiselleCalc(Dependent('lastWord=="will"', '-=', '*unknown command gain. You may forgot using "will"'), 'lose', 2, 0)) && (found = true);
					(found == false) && (word == 'store') && (GiselleCalc(Dependent('lastWord=="will"', '=', '*unknown command gain. You may forgot using "will"'), 'store', 2, 0)) && (found = true);
					(found == false) && (word == /^([a-zA-Z_]){1}([a-zA-Z0-9_]){,}$/) && (GiselleCalc(Dependent('(nextWord=="will") || ((nextWord=="in") && ((words[j+3]=="will") || (words[j+6]=="will")))', 'var ' + word, Dependent('lastWord=="loop"', word, '*unknown command "' + word + '"')), '"' + word + '"', 2, 0, Dependent('lastWord=="by"', '-+', '++'))) && Dependent('arrayNow=="true"', 'code[i] += "]"','') && (arrayNow = false) && (found = true);
					(found == false) && (word == /^([^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]){1,}$/) && (GiselleCalc(Dependent('nextWord=="will"', '*storage name could not be used by JS: ' + word, '*unknown command "' + word + '"'), '"' + word.replace('\'', '\\\'').replace('"', '\\"').replace('\'', '\\\'') + '"', 2, 0, Dependent('lastWord=="by"', '-+', '++')));
					lastWord = word;
				}
				theDev = true;
				for (j = 0; j < parametersDegree; parametersDegree--) {
					DegreeDown();
				}
				for (j = 0; j < currentScope; currentScope--) {
					code[i] += ';}';
				}
				code[i] += ');_$I$F$_=false;';
			} else {
				theDev = false;
				throw new Error('Phrasing Error: line ' + (i + 1) + ' is not understandable.\nPlease check the phrasing in:\n' + lines[i].toString());
			}
			theDev = false;
		}
	} catch (exception) {
		if (!theDev) {
			alert(exception.message);
		} else if (theDev) {
			alert(inter + exception.message);
		}
	}
	try {
		for (k = 0; k < code.length; k++) {
			code[k];
		}
	} catch (exception) {
		alert('Logical Error: line ' + (k+1) + ' could not be executed. Please check the logical side of the given code:\n' + lines[k].toString());
	}
}

// styles

const c = StyleSheet.create({
	foreLight: {
		alignSelf: 'center',
		color: 'e0ffff',
	},
	foreDark: {
		alignSelf: 'center',
		color: '#2f4f4f',
	},
	backLight: {
		alignSelf: 'center',
		backgroundColor: '#f0e3cc',
	},
	backDark: {
		alignSelf: 'center',
		backgroundColor: '#666',
	},
	shadowLight: {
		alignSelf: 'center',
		borderWidth: '0px',
		borderRadius: '5%',
		boxShadow: '0 0 10pt 10pt #eee8aa',
	},
	shadowDark: {
		alignSelf: 'center',
		borderWidth: '0px',
		borderRadius: '5%',
		boxShadow: '0 0 10pt 10pt #b22222',
	},
	hide: {
		alignSelf: 'center',
		display: 'none !important',
	},
	out: {
    alignSelf: 'center',
		display: 'block',
		margin: '0',
		padding: '0',
		width: '100%',
		height: '100vh',
	},
	fence: {
    alignSelf: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
		height: '100vh',
		marginLeft: 'calc(-50% + 50%)',
		marginTop: 'calc(-50% + 50%)',
		padding: '0',
		backgroundColor: 'white',
		color: 'black',
		fontSize: 'calc(1vmin + 1vmin)',
		fontWeight: '500',
	},
	sizeA: {
    alignSelf: 'center',
		height: '150vh !important',
	},
	sizeB: {
    alignSelf: 'center',
		height: '200vh !important',
	},
	sizeC: {
    alignSelf: 'center',
		height: '250vh !important',
	},
	sizeD: {
    alignSelf: 'center',
		height: '300vh !important',
	},
	sizeE: {
    alignSelf: 'center',
		height: '350vh !important',
	},
	sizeF: {
    alignSelf: 'center',
		height: '400vh !important',
	},
	sizeG: {
    alignSelf: 'center',
		height: '450vh !important',
	},
	sizeH: {
    alignSelf: 'center',
		height: '500vh !important',
	},
	sizeI: {
    alignSelf: 'center',
		height: '550vh !important',
	},
	sizeJ: {
    alignSelf: 'center',
		height: '600vh !important',
	},
	sizeK: {
    alignSelf: 'center',
		height: '650vh !important',
	},
	sizeL: {
    alignSelf: 'center',
		height: '700vh !important',
	},
	sizeM: {
    alignSelf: 'center',
		height: '750vh !important',
	},
	sizeN: {
    alignSelf: 'center',
		height: '800vh !important',
	},
	sizeO: {
    alignSelf: 'center',
		height: '850vh !important',
	},
	sizeP: {
    alignSelf: 'center',
		height: '900vh !important',
	},
	sizeQ: {
    alignSelf: 'center',
		height: '950vh !important',
	},
	sizeR: {
    alignSelf: 'center',
		height: '1000vh !important',
	},
	X1: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '1%',
		height: '100%',
	},
	X2: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '2%',
		height: '100%',
	},
	X3: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '3%',
		height: '100%',
	},
	X4: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '4%',
		height: '100%',
	},
	X5: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '5%',
		height: '100%',
	},
	X6: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '6%',
		height: '100%',
	},
	X7: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '7%',
		height: '100%',
	},
	X8: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '8%',
		height: '100%',
	},
	X9: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '9%',
		height: '100%',
	},
	X10: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '10%',
		height: '100%',
	},
	X11: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '11%',
		height: '100%',
	},
	X12: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '12%',
		height: '100%',
	},
	X13: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '13%',
		height: '100%',
	},
	X14: {
    alignSelf: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '14%',
		height: '100%',
	},
	X15: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '15%',
		height: '100%',
	},
	X16: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '16%',
		height: '100%',
	},
	X17: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '17%',
		height: '100%',
	},
	X18: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '18%',
		height: '100%',
	},
	X19: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '19%',
		height: '100%',
	},
	X20: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '20%',
		height: '100%',
	},
	X21: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '21%',
		height: '100%',
	},
	X22: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '22%',
		height: '100%',
	},
	X23: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '23%',
		height: '100%',
	},
	X24: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '24%',
		height: '100%',
	},
	X25: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '25%',
		height: '100%',
	},
	X26: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '26%',
		height: '100%',
	},
	X27: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '27%',
		height: '100%',
	},
	X28: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '28%',
		height: '100%',
	},
	X29: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '29%',
		height: '100%',
	},
	X30: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '30%',
		height: '100%',
	},
	X31: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '31%',
		height: '100%',
	},
	X32: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '32%',
		height: '100%',
	},
	X33: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '33%',
		height: '100%',
	},
	X34: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '34%',
		height: '100%',
	},
	X35: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '35%',
		height: '100%',
	},
	X36: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '36%',
		height: '100%',
	},
	X37: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '37%',
		height: '100%',
	},
	X38: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '38%',
		height: '100%',
	},
	X39: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '39%',
		height: '100%',
	},
	X40: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '40%',
		height: '100%',
	},
	X41: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '41%',
		height: '100%',
	},
	X42: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '42%',
		height: '100%',
	},
	X43: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '43%',
		height: '100%',
	},
	X44: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '44%',
		height: '100%',
	},
	X45: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '45%',
		height: '100%',
	},
	X46: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '46%',
		height: '100%',
	},
	X47: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '47%',
		height: '100%',
	},
	X48: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '48%',
		height: '100%',
	},
	X49: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '49%',
		height: '100%',
	},
	X50: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '50%',
		height: '100%',
	},
	X51: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '51%',
		height: '100%',
	},
	X52: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '52%',
		height: '100%',
	},
	X53: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '53%',
		height: '100%',
	},
	X54: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '54%',
		height: '100%',
	},
	X55: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '55%',
		height: '100%',
	},
	X56: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '56%',
		height: '100%',
	},
	X57: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '57%',
		height: '100%',
	},
	X58: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '58%',
		height: '100%',
	},
	X59: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '59%',
		height: '100%',
	},
	X60: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '60%',
		height: '100%',
	},
	X61: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '61%',
		height: '100%',
	},
	X62: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '62%',
		height: '100%',
	},
	X63: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '63%',
		height: '100%',
	},
	X64: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '64%',
		height: '100%',
	},
	X65: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '65%',
		height: '100%',
	},
	X66: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '66%',
		height: '100%',
	},
	X67: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '67%',
		height: '100%',
	},
	X68: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '68%',
		height: '100%',
	},
	X69: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '69%',
		height: '100%',
	},
	X70: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '70%',
		height: '100%',
	},
	X71: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '71%',
		height: '100%',
	},
	X72: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '72%',
		height: '100%',
	},
	X73: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '73%',
		height: '100%',
	},
	X74: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '74%',
		height: '100%',
	},
	X75: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '75%',
		height: '100%',
	},
	X76: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '76%',
		height: '100%',
	},
	X77: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '77%',
		height: '100%',
	},
	X78: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '78%',
		height: '100%',
	},
	X79: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '79%',
		height: '100%',
	},
	X80: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '80%',
		height: '100%',
	},
	X81: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '81%',
		height: '100%',
	},
	X82: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '82%',
		height: '100%',
	},
	X83: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '83%',
		height: '100%',
	},
	X84: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '84%',
		height: '100%',
	},
	X85: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '85%',
		height: '100%',
	},
	X86: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '86%',
		height: '100%',
	},
	X87: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '87%',
		height: '100%',
	},
	X88: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '88%',
		height: '100%',
	},
	X89: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '89%',
		height: '100%',
	},
	X90: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '90%',
		height: '100%',
	},
	X91: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '91%',
		height: '100%',
	},
	X92: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '92%',
		height: '100%',
	},
	X93: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '93%',
		height: '100%',
	},
	X94: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '94%',
		height: '100%',
	},
	X95: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '95%',
		height: '100%',
	},
	X96: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '96%',
		height: '100%',
	},
	X97: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '97%',
		height: '100%',
	},
	X98: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '98%',
		height: '100%',
	},
	X99: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '99%',
		height: '100%',
	},
	X100: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '100%',
		height: '100%',
	},
	Y1: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '1%',
		width: '100%',
	},
	Y2: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '2%',
		width: '100%',
	},
	Y3: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '3%',
		width: '100%',
	},
	Y4: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '4%',
		width: '100%',
	},
	Y5: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '5%',
		width: '100%',
	},
	Y6: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '6%',
		width: '100%',
	},
	Y7: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '7%',
		width: '100%',
	},
	Y8: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '8%',
		width: '100%',
	},
	Y9: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '9%',
		width: '100%',
	},
	Y10: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '10%',
		width: '100%',
	},
	Y11: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '11%',
		width: '100%',
	},
	Y12: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '12%',
		width: '100%',
	},
	Y13: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '13%',
		width: '100%',
	},
	Y14: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '14%',
		width: '100%',
	},
	Y15: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '15%',
		width: '100%',
	},
	Y16: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '16%',
		width: '100%',
	},
	Y17: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '17%',
		width: '100%',
	},
	Y18: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '18%',
		width: '100%',
	},
	Y19: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '19%',
		width: '100%',
	},
	Y20: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '20%',
		width: '100%',
	},
	Y21: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '21%',
		width: '100%',
	},
	Y22: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '22%',
		width: '100%',
	},
	Y23: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '23%',
		width: '100%',
	},
	Y24: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '24%',
		width: '100%',
	},
	Y25: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '25%',
		width: '100%',
	},
	Y26: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '26%',
		width: '100%',
	},
	Y27: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '27%',
		width: '100%',
	},
	Y28: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '28%',
		width: '100%',
	},
	Y29: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '29%',
		width: '100%',
	},
	Y30: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '30%',
		width: '100%',
	},
	Y31: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '31%',
		width: '100%',
	},
	Y32: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '32%',
		width: '100%',
	},
	Y33: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '33%',
		width: '100%',
	},
	Y34: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '34%',
		width: '100%',
	},
	Y35: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '35%',
		width: '100%',
	},
	Y36: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '36%',
		width: '100%',
	},
	Y37: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '37%',
		width: '100%',
	},
	Y38: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '38%',
		width: '100%',
	},
	Y39: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '39%',
		width: '100%',
	},
	Y40: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '40%',
		width: '100%',
	},
	Y41: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '41%',
		width: '100%',
	},
	Y42: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '42%',
		width: '100%',
	},
	Y43: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '43%',
		width: '100%',
	},
	Y44: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '44%',
		width: '100%',
	},
	Y45: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '45%',
		width: '100%',
	},
	Y46: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '46%',
		width: '100%',
	},
	Y47: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '47%',
		width: '100%',
	},
	Y48: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '48%',
		width: '100%',
	},
	Y49: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '49%',
		width: '100%',
	},
	Y50: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '50%',
		width: '100%',
	},
	Y51: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '51%',
		width: '100%',
	},
	Y52: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '52%',
		width: '100%',
	},
	Y53: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '53%',
		width: '100%',
	},
	Y54: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '54%',
		width: '100%',
	},
	Y55: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '55%',
		width: '100%',
	},
	Y56: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '56%',
		width: '100%',
	},
	Y57: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '57%',
		width: '100%',
	},
	Y58: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '58%',
		width: '100%',
	},
	Y59: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '59%',
		width: '100%',
	},
	Y60: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '60%',
		width: '100%',
	},
	Y61: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '61%',
		width: '100%',
	},
	Y62: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '62%',
		width: '100%',
	},
	Y63: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '63%',
		width: '100%',
	},
	Y64: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '64%',
		width: '100%',
	},
	Y65: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '65%',
		width: '100%',
	},
	Y66: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '66%',
		width: '100%',
	},
	Y67: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '67%',
		width: '100%',
	},
	Y68: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '68%',
		width: '100%',
	},
	Y69: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '69%',
		width: '100%',
	},
	Y70: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '70%',
		width: '100%',
	},
	Y71: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '71%',
		width: '100%',
	},
	Y72: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '72%',
		width: '100%',
	},
	Y73: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '73%',
		width: '100%',
	},
	Y74: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '74%',
		width: '100%',
	},
	Y75: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '75%',
		width: '100%',
	},
	Y76: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '76%',
		width: '100%',
	},
	Y77: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '77%',
		width: '100%',
	},
	Y78: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '78%',
		width: '100%',
	},
	Y79: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '79%',
		width: '100%',
	},
	Y80: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '80%',
		width: '100%',
	},
	Y81: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '81%',
		width: '100%',
	},
	Y82: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '82%',
		width: '100%',
	},
	Y83: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '83%',
		width: '100%',
	},
	Y84: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '84%',
		width: '100%',
	},
	Y85: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '85%',
		width: '100%',
	},
	Y86: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '86%',
		width: '100%',
	},
	Y87: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '87%',
		width: '100%',
	},
	Y88: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '88%',
		width: '100%',
	},
	Y89: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '89%',
		width: '100%',
	},
	Y90: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '90%',
		width: '100%',
	},
	Y91: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '91%',
		width: '100%',
	},
	Y92: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '92%',
		width: '100%',
	},
	Y93: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '93%',
		width: '100%',
	},
	Y94: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '94%',
		width: '100%',
	},
	Y95: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '95%',
		width: '100%',
	},
	Y96: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '96%',
		width: '100%',
	},
	Y97: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '97%',
		width: '100%',
	},
	Y98: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '98%',
		width: '100%',
	},
	Y99: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '99%',
		width: '100%',
	},
	Y100: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '100%',
		width: '100%',
	},
	cell: {
		display: 'flex',
		width: '100%',
		flexWrap: 'nowrap',
		height: '100%',
		wordBreak: 'breakWord',
		alignItems: 'center',
	},
	rl: {
		display: 'inlineBlock',
		textAlign: 'right',
		direction: 'rtl',
		width: '100%',
		height: 'auto',
	},
	lr: {
		display: 'inlineBlock',
		textAlign: 'left',
		direction: 'ltr',
		width: '100%',
		height: 'auto',
	},
	rlc: {
		display: 'inlineBlock',
		textAlign: 'center',
		direction: 'rtl',
		width: '100%',
		height: 'auto',
	},
	lrc: {
		display: 'inlineBlock',
		textAlign: 'center',
		direction: 'ltr',
		width: '100%',
		height: 'auto',
	},
	big: {
		fontSize: '200%',
	},
	bold: {
		fontWeight: '1000',
	},
	strong: {
		fontSize: '150%',
		fontWeight: '700',
		backgroundColor: '#fcf8e3',
		color: 'black',
	},
	sub: {
		fontSize: '75%',
		lineHeight: '0',
		position: 'relative',
		verticalAlign: 'baseline',
		bottom: '-0.25em',
	},
	sup: {
		fontSize: '75%',
		lineHeight: '0',
		position: 'relative',
		verticalAlign: 'baseline',
		top: '-0.5em',
	},
	under: {
		textDecoration: 'underline',
	},
	frame: {
		padding: '2%',
	},
	radius: {
		borderRadius: '1.25em !important',
	},
});

// pages

function Menu(titles,pages) {
  Giselle(`
    currentPlacement will store text 0 as number
    currentProperty will store text 0 as number
    amount will store titles by size
    loop amount times arrayOfButtons in currentPlacement will store titles in currentProperty also currentPlacement will gain text 1 as number also arrayOfButtons in currentPlacement will store pages in currentProperty also currentPlacement will gain text 1 as number also currentProperty will gain text 1 as number
  `)
  var allButtons = "";
  for(var i = 0 ; i < amount ; i += 2){
     allButtons += `<Button style={c.cell.frame.radius} raised title="${arrayOfButtons[i]}" onPress={Giselle('window by link text ${arrayOfButtons[i+1]} as one')}/>`;
  }
  return (
		<View style={c.out}>
			<View style={c.fence}>
				<View style={c.X5}>
          <Text>&zwnj;</Text>
				</View>
        <View style={c.X90}>
          <View style={c.Y90}>
            {allButtons}
          </View>
        </View>
        <View style={c.X5}>
          <Text>&zwnj;</Text>
				</View>
			</View>
		</View>
	);
}

function List(table) {
  return(
    <View style={c.out}>
      <View style={c.fence}>
        <View style={c.X5}>
          <Text>&zwnj;</Text>
        </View>
        <View style={c.X90}>
          <View style={c.Y5}>
            <Text>&zwnj;</Text>
          </View>
          <View style={c.Y90}>
            <View style={c.cell}>
              <View style={c.ltrc}>
                <Input multiline style={c.strong} value={Giselle(`
                  sql text select text from ${table} where row_number() = 1 as one
						    `)} onChangeText={Giselle(`
                  sql text create table ${table}(text) ; update ${table} set text = ? where row_number() = 1 , [ this ] as one
							  `)}/>
              </View>
            </View>
          </View>
          <View style={c.Y5}>
            <Text>&zwnj;</Text>
          </View>
        </View>
        <View style={c.X5}>
          <Text>&zwnj;</Text>
        </View>
      </View>
    </View>
  );
}

// path

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Menu(["Coding"],["code"])}/>
        <Stack.Screen name="code" component={List("code")}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
