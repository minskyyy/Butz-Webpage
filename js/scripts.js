/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
//Toggle when any Head Item is pressed
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}
//Toggle when Burger is pressed
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});
//Toggle when Kontakt is pressed
document.querySelector(".btn-solid-sm").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) {
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}


/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});


/* Image Slider - Swiper */
var imageSlider = new Swiper('.image-slider', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	loop: true,
	spaceBetween: 50,
	slidesPerView: 5,
	breakpoints: {
		// when window is <= 575px
		575: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window is <= 767px
		767: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window is <= 991px
		991: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		// when window is <= 1199px
		1199: {
			slidesPerView: 4,
			spaceBetween: 20
		},

	}
});


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}


//tomtom map
function mapContent(){
		var api_key = 'pWWOtKFEXaOAAj2nGu62cfl3FHa74qAw';
		var latAndLong = {lat: 47.747900, lng: 11.371660};
		var zoomLevel = 15;
		var yourAddress = 'Thomas Butz Fahrschule <br> Sindelsdorfer Str. 7, 82377 Penzberg';

		var map = tt.map({
		    container: 'map',
		    key: api_key,
		    center: latAndLong,
		    zoom: zoomLevel
		});

		var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);

	 	// FOR CUSTOM MARKER
		//var customMarker = document.createElement('div');
		//customMarker.id = 'marker';
		//var marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);

		var popupOffsets = {
		  top: [0, 0],
		  bottom: [0, -70],
		  'bottom-right': [0, -70],
		  'bottom-left': [0, -70],
		  left: [25, -35],
		  right: [-25, -35]
		}

		var popup = new tt.Popup({offset: popupOffsets}).setHTML(yourAddress);
	    marker.setPopup(popup).togglePopup();
}

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
