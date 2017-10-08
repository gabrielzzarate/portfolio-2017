export default function spanifyTitle(title){
	const loopChar = title.split('').map((char, i) => {
		return (<span key={i}>{char}</span>);
	});
	return loopChar;
}


var isMobile = {
	Android: function() {
	    return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
	    return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
	    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
	    return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
	    return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
	    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

if(isMobile.any()) {
	document.body.classList.add("mobile");
}
else {
	document.body.classList.add("desktop");
}

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

if ( x < 766 ){
	document.body.classList.add("isMobile");
}
