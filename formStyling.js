var submitted = false

function beautifyForm () {
	$('#ss-submit').addClass("btn btn-success btn-lg")
	$(".ss-choices").css("list-style", "none")
	$(".required-message").each(function (index) {
		if ($(this).parents().hasClass("ss-item-required")) {
			$(this).css("color", "red")
		} else {
			$(this).css("display", "none")
		}
	})
	$(".ss-required-asterisk").css("display", "none")
	$(".aria-only-help").css("display", "none")
	$(".ss-secondary-text").addClass("help-block")
	$(".ss-q-short").addClass("form-control")
	$(".ss-q-long").addClass("form-control")
	$(".ss-q-other").addClass("form-control")
	$(".ss-form-question").addClass("form-group")
	$(".ss-q-title").css("font-size","150%")
	$(".ss-q-title").css("color","white")
	$(".ss-q-radio").each(function (index) {
		 if ($(this).parents().hasClass("ss-item-required")) {
		   $(this).prop("required", true)
		 }
	})

	$("select").addClass("form-control")
	$("select").prop("multiple", true)
}

function formSubmit () {
	if (submitted == true) {
		replaceFragment("main")
		var alertObject = document.createElement("div")
		alertObject.className = "alert alert-success alert-dismissable";
		alertObject.innerHTML = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button> Your spirit day results have been submitted"
		document.getElementById('alertHolder').appendChild(alertObject)
		submitted = false
	}
}