$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

});

function otptimerscript() {
	document.getElementById("timerbtn").onclick();

}

function otptimerscript1() {
	document.getElementById("timerbtn1").onclick();

}


function hideSignIn() {
	PF('SignIn').hide();
}

function hideSignUp() {
	PF('NewUserDialog').hide();
}

function hideall() {
	$("sing").hide();
}

function isNumberKey(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;

	var keychar = String.fromCharCode(key);
	var keycheck = /[0-9]|\+/;

	if (!(key == 8 || key == 27 || key == 46 || key == 9 || key == 45
			|| key == 32 || key == 37 || key == 39)) // backspace delete
		// escape arrows
	{
		if (!keycheck.test(keychar)) {
			theEvent.returnValue = false;// for IE
			if (theEvent.preventDefault)
				theEvent.preventDefault();// Firefox

		}
	}
}

function alphaRestricted(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;

	var keychar = String.fromCharCode(key);
	var keycheck = /^[a-zA-Z]*$/;

	if (!(key == 8 || key == 27 || key == 46 || key == 9 || key==32 || key==222)) // backspace
		// delete
		// escape
		// arrows
	{
		if (!keycheck.test(keychar)) {
			theEvent.returnValue = false;// for IE
			if (theEvent.preventDefault)
				theEvent.preventDefault();// Firefox

		}
	}
}

//for layout page name field
function alphaRestrictedLay(evt) {
	console.log(evt);
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;

	var keychar = String.fromCharCode(key);
	var keycheck = /^[a-zA-Z]*$/;

	if (!(key == 8 || key == 27 || key == 9 || key==32 || key==222)) // backspace
		// delete
		// escape
		// arrows
	{
		if (!keycheck.test(keychar)) {
			theEvent.returnValue = false;// for IE
			if (theEvent.preventDefault)
				theEvent.preventDefault();// Firefox

		}
	}
}






function onlyAlphaNumberSpace(evt) {

	var charCode = (evt.which) ? evt.which : evt.keyCode
			if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122))
				return false;
	return true;
}	



function onlyAddress(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;

	var keychar = String.fromCharCode(key);
	var keycheck = /[0-9a-zA-Z-\,\#\(\)\/]|\./;

	if (!(key == 8 || key == 27 || key == 46 || key == 9 || key == 39 || key == 34 || key == 222)) // backspace
		// delete
		// escape
		// arrows
	{
		if (!keycheck.test(keychar)) {
			theEvent.returnValue = false;// for IE
			if (theEvent.preventDefault)
				theEvent.preventDefault();// Firefox

		}
	}

//	if (key == 46 || key == 94 || key == 95) { //(.) not allowed
//	theEvent.returnValue = false;
//	if (theEvent.preventDefault)
//	theEvent.preventDefault() = false;//Firefox
//	}

}

function onlyNumbers(evt) {
	alert("only numnbers event called::")
	console.log("only numnbers event called::");
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;

	var keychar = String.fromCharCode(key);
	var keycheck = /[0-9]/;
	// var keycheckSpec = /[%]/;
	var keycheckSpec = /[%,+,_,',.]/; // to restric %,',.'
	if (keycheckSpec.test(keychar) ){   
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();// Firefox
	}

	if (!(key == 8  ||  key == 27 ||  key == 9  ||  key == 39 ||  key == 37  || key == 46) ) // backspace
		// delete
		// escape
		// arrows
	{
		if ( !keycheck.test(keychar) ){       
			theEvent.returnValue = false;// for IE
			if (theEvent.preventDefault) theEvent.preventDefault();// Firefox
		}   
	}  
}

