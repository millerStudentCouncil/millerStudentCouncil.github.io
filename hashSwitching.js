var defaultFragment = "main"

function replaceFragment(hash) {
	if (hash instanceof String && hash.startsWith("#")) {
		hash = hash.substring(1)
	}
	if (!hash) {
		hash = defaultFragment
	}
	$('#main').load('/' + hash + '.html #main', function(response, status, xhr) {
		if (status == "error") {
			replaceFragment(defaultFragment)
		}

		$("#main-menu").removeClass("in")
		$("#main-menu").addClass("collapse")

		if (hash == "main") {
			$("#upcoming-events").carousel({
				interval: 3000
			})
		}

		if (hash == "socialForm") {
			$('#main').load("./" + hash + ".html .ss-form-container", function (response, status, xhr) {
				beautifyForm()
			})
		}
	});
}

$(document).ready(function() {
	replaceFragment(window.location.hash)

	$(function() {
		if (Modernizr.history) {
			$(window).bind("hashChange", function(e, hash, oldHash) {
				replaceFragment(hash);
			});
			$(window).hashChange();
		} else {
			alert("This browser is too old. Please update to a newer version of Chrome, Safari, Firefox, Opera, or Internet Explorer")
		}
	});
});