var seps = window.document.getElementsByTagName( "sep" ) ; for ( var i = 0 ; i < seps.length ; i += 1 ) { seps[i].innerHTML = '&zwnj;</sep>' }
var spans = window.document.getElementsByTagName( "span" ) ; for ( var j = 0 ; j < spans.length ; j += 1 ) { spans[j].insertAdjacentHTML ( "afterbegin" , '&zwnj;' ) ; spans[j].innerHTML += '&zwnj;' }
