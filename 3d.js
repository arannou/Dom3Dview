javascript: void 
function (b, p) {
	function   l(k, c, b, e, g, d, f,r) {
		if (r) {
			return "<div class='3d-view' style='position:absolute;-webkit-transform-origin: 0 0 0;" + ("background:" + f + ";") + ("width:" + e + "px; height:" + g + "px;") + ("-webkit-transform:" + ("translate3d(" + k + "px," + c + "px," + b + "px)") + ("rotateX(270deg) rotateY(" + d + "deg)") + ";") + "'></div>";
		} else {
			return "";
		}
	}
	var r = true;
	function   o(k, c, d, f) {
		for (var   j = k.childNodes, n = j.length, m = 0; m < n; m++) {
			var   a = j[m];
			if (1 === a.nodeType) {
				if (r) {
					a.style.overflow = "visible";
					a.style.WebkitTransformStyle = "preserve-3d";
					a.style.WebkitTransform = "translateZ(" + (b + (n - m) * q).toFixed(3) + "px)";
				} else {
					a.style.overflow = "initial";
					a.style.WebkitTransformStyle = "initial";
					a.style.WebkitTransform = "initial";
				}
				var   h = d, i = f;
				a.offsetParent === k && (h += k.offsetLeft, i += k.offsetTop);
				o(a, c + 1, h, i);
				e += l(h + a.offsetLeft, i + a.offsetTop, (c + 1) * b, a.offsetWidth, b, 0, g[c % (g.length - 1)],r);
				e += l(h + a.offsetLeft + a.offsetWidth, i + a.offsetTop, (c + 1) * b, a.offsetHeight, b, 270, g[c % (g.length - 1)],r);
				e += l(h + a.offsetLeft, i + a.offsetTop + a.offsetHeight, (c + 1) * b, a.offsetWidth, b, 0, g[c % (g.length - 1)],r);
				e += l(h + a.offsetLeft, i + a.offsetTop, (c + 1) * b, a.offsetHeight, b, 270, g[c % (g.length - 1)],r)
			}
		}
	}
	var   g = "#C33,#ea4c88,#663399,#0066cc,#669900,#ffcc33,#ff9900,#996633".split(","), q = 0.001, e = "", d = document.body;
	var w=d.style;
	d.style.overflow = "visible";
	d.style.WebkitTransformStyle = "preserve-3d";
	d.style.WebkitPerspective = p;
	var   r = (window.innerWidth / 2).toFixed(2), s = (window.innerHeight / 2).toFixed(2);
	d.style.WebkitPerspectiveOrigin = d.style.WebkitTransformOrigin = r + "px " + s + "px";
	o(d, 0, 0, 0);
	var   f = document.createElement("DIV");
	f.style.display = "none";
	f.style.position = "absolute";
	f.style.top = 0;
	f.innerHTML = e;
	d.appendChild(f);
	var   j = "NO_FACES";
	
	function mm(b) {
		if ("DISABLED" !== j) {
			var   c = b.screenX / screen.width, b = (360 * (1 - b.screenY / screen.height) - 180).toFixed(2), c = (360 * c - 180).toFixed(2);
			d.style.WebkitTransform = "rotateX(" + b + "deg) rotateY(" + c + "deg)"
		}
	}
	function mu() {
		switch (j) {
			case   "NO_FACES":
				j = "FACES";
				f.style.display = "";
				break;
			case   "FACES":
				j = "NO_FACES", f.style.display = "none"
		}
	}
	function kd(y) {
		var key = y.keyCode;
		if (key==27) {
			j = "DISABLED";
			r= false;
			o(d, 0, 0, 0);
			d.removeChild(f);
			d.style = w;
			document.removeEventListener("keydown", function(e) {kd(e)});
			document.removeEventListener("keyup", function(e) {ku(e)});
			document.removeEventListener("mousemove", function(b) {mm(b)});
			document.removeEventListener("mouseup", function() {mu()});
		}
		if (key==16) {
			j = "DISABLED";
			r= false;
		}
	}
	function ku(event) {
		var key = event.keyCode;
		if (key==16) {
			j = "NO_FACES";
			r = true;
		}
	}
	document.addEventListener("mousemove", function(b) {mm(b)}, !0);
	document.addEventListener("mouseup", function() {mu()}, !0);
	
	document.addEventListener("keydown", function(e) {kd(e)});
	document.addEventListener("keyup", function(e) {ku(e)});
}(25, 5E3);
