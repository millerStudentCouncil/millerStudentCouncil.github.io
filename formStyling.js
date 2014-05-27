var submitted = false

function beautifyForm () {
	$("form").prop("target", "hidden_iframe")
	$("form").submit(function () {
		showSubmitting()
	})
	$('#ss-submit').addClass("btn btn-success btn-lg")
	$(".ss-choices").css("list-style", "none")
	$(".required-message").each(function (index) {
		if ($(this).parents().hasClass("ss-item-required")) {
			$(this).addClass('help-block')
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
	$(".ss-q-title").addClass("control-label")
	$(".ss-q-title").css("font-size","150%")
	$(".ss-logo-container").css("content", "url(//ssl.gstatic.com/docs/forms/forms_logo_small_dark.png)")
	$(".ss-q-radio").each(function (index) {
		 if ($(this).parents().hasClass("ss-item-required")) {
		   $(this).prop("required", true)
		 }
	})

	$("select").addClass("form-control")
}

function formSubmit () {
	if (submitted == true) {
		var alertObject = document.getElementById("loadAlert")
		alertObject.className = "alert alert-success alert-dismissable";
		alertObject.innerHTML = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button> Your spirit day results have been submitted"
		submitted = false
	}
}

function showSubmitting () {
	submitted = true;
	replaceFragment("main")
	var alertObject = document.createElement("div")
	alertObject.className = "alert alert-success";
	alertObject.id = "loadAlert"
	alertObject.innerHTML = "Submitting Your Results... <div class=\"spinner\"><div class=\"dot1\"></div><div class=\"dot2\"></div></div>"
	document.getElementById('alertHolder').appendChild(alertObject)
}