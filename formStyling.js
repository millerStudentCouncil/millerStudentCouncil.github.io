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
	$("#ss-form").attr("target", "_new")
	$(".ss-q-short").addClass("form-control")
	$(".ss-q-long").addClass("form-control")
	$(".ss-q-other").addClass("form-control")
	$(".ss-form-container").addClass("col-lg-8")
	$(".ss-form-question").addClass("form-group")
	$(".ss-q-title").css("font-size","150%")
	$(".ss-q-title").css("color","white")
	$(".ss-q-radio").each(function (index) {
		 if ($(this).parents().hasClass("ss-item-required")) {
		   $(this).prop("required", true)
		 }
	})
}