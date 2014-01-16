var defaultFragment = "main"
var homeroomRep = false

function addEventInfo() {
	var infoDiv = document.createElement('div')
	infoDiv.className = "info"
	infoDiv.innerHTML = '<h3>Event Info:</h3>Title: <input type="text" class="form-control"><br/>Text: <input type="text" class="form-control"><br/>'
	document.getElementById('eventInfos').appendChild(infoDiv)
}

function generateAnnouncement() {
	var announcement = {}
	var titleText = document.getElementById('announcementTitleText').value
	var titleLink = document.getElementById('announcementTitleLink').value

	if (titleLink.length === 0) {
		announcement.title = titleText
	} else {
		announcement.title = {
			"link": titleLink,
			"text": titleText
		}
	}

	var infosArray = []

	var eventInfos = document.getElementById('eventInfos').childNodes
	var currentInfo = 0
	for (currentInfo = 0; currentInfo < eventInfos.length; currentInfo++) {
		var info = eventInfos[currentInfo]
		var infoTitle = info.childNodes[2].value
		var infoText = info.childNodes[5].value

		var infoObject = {}

		if (infoText.length === 0) {
			infoObject = infoTitle
		} else {
			infoObject.title = infoTitle
			infoObject.text = infoText
		}

		infosArray.push(infoObject)
	}

	announcement.eventInfo = infosArray

	var output = document.getElementById('output')
	output.value = JSON.stringify(announcement, null, '\t')

	var announcementDOM = createAnnouncement(announcement)
	var preview = document.getElementById('announcementPreview')
	preview.innerHTML = ''
	preview.appendChild(announcementDOM)
}

function generateEvent() {
	var event = {}
	var eventImage = document.getElementById('eventImage').value
	var titleText = document.getElementById('eventTitleText').value
	var titleLink = document.getElementById('eventTitleLink').value
	var eventInfo = document.getElementById('eventInfo').value

	event.img = eventImage

	if (titleLink.length === 0) {
		event.title = titleText
	} else {
		event.title = {
			"link": titleLink,
			"text": titleText
		}
	}

	event.info = eventInfo

	var output = document.getElementById('output')
	output.value = JSON.stringify(event, null, '\t')

	var eventDOM = createUpcomingEvent(event)
	eventDOM.className = 'item active'
	var preview = document.getElementById('eventPreview')
	preview.innerHTML = ''
	preview.appendChild(eventDOM)
}

function createUpcomingEvent(data) {
	var event = document.createElement('div')
	event.className = 'item'

	var img = document.createElement('img')
	img.style.height = '300px'
	img.style.display = 'inline-block'
	img.setAttribute('src', data.img)
	event.appendChild(img)

	var caption = document.createElement('div')
	caption.className = 'carousel-caption'

	var title = createTitle(data.title)
	caption.appendChild(title)

	if ((typeof data.info) === 'string') {
		var info = document.createElement('p')
		info.innerHTML = data.info
		caption.appendChild(info)
	}

	event.appendChild(caption)

	return event
}

function createAnnouncement(data) {
	var announcement = document.createElement('li')
	var title = createTitle(data.title)
	announcement.appendChild(title)
	if ((typeof data.eventInfo === 'object')) {
		var currentInfo = 0
		for (currentInfo = 0; currentInfo < data.eventInfo.length; currentInfo++) {
			var infoData = data.eventInfo[currentInfo]
			if ((typeof infoData) === 'object') {
				var infoTitle = document.createElement('h4')
				infoTitle.innerHTML = infoData.title

				var infoText = document.createElement('p')
				infoText.innerHTML = infoData.text

				announcement.appendChild(infoTitle)
				announcement.appendChild(infoText)
			} else if ((typeof infoData) === 'string') {
				var infoTitle = document.createElement('h4')
				infoTitle.innerHTML = infoData

				announcement.appendChild(infoTitle)
			}
		}
	}
	return announcement
}

function createTitle(data) {
	var title = document.createElement('h3')
	if ((typeof data) === 'string') {
		title.innerHTML = data
	} else if ((typeof data) === 'object') {
		if ((typeof data.link) === 'string') {
			var link = document.createElement('a')
			link.setAttribute('href', data.link)
			link.innerHTML = data.text
			title.appendChild(link)
		}
	}

	return title
}

function processHTML(data, hash) {
	$('#main').html(data)

	$("#main-menu").removeClass("in")
	$("#main-menu").addClass("collapse")

	if (hash == "main") {
		$("#upcoming-events").carousel({
			interval: 3000
		})

		var currentAnnouncement = 0
		for (currentAnnouncement = 0; currentAnnouncement < announcements.length; currentAnnouncement++) {
			var announcementsList = document.getElementById('announcements')
			var announcement = createAnnouncement(announcements[currentAnnouncement])
			announcementsList.appendChild(announcement)
		}

		var currentEvent = 0
		var carouselIndicators = document.getElementById('carousel-indicators')
		for (currentEvent = 0; currentEvent < upcomingEvents.length; currentEvent++) {
			var carousel = document.getElementById('events-container')
			var event = createUpcomingEvent(upcomingEvents[currentEvent])

			var indicator = document.createElement('li')
			indicator.setAttribute('data-target', '#upcoming-events')
			indicator.setAttribute('data-slide-to', '' + currentEvent)

			if (currentEvent == 0) {
				event.className += " active"
				indicator.className += "active"
			}
			carousel.appendChild(event)
			carouselIndicators.appendChild(indicator)
		}
	}

	if (hash == "socialForm") {
		$('#main').load("./" + hash + ".html .ss-form-container", function (response, status, xhr) {
			beautifyForm()
		})
	}

	window.scrollTo(0,0)
}

function replaceFragment(hash) {
	if (hash instanceof String && hash.startsWith("#")) {
		hash = hash.substring(1)
	}
	if (!hash) {
		hash = defaultFragment
	}
	
	if (hash == "hr") {
		homeroomRep = true
	}

	$.get('/' + hash + '.html', function(data) {
		processHTML($('<div>').append($.parseHTML(data)).find('#main'), hash)
	}).error(function () {
		$.get('/' + hash + '.md', function(data) {
			var converter = new Showdown.converter()
			var converted = converter.makeHtml(data)
			processHTML(converted, hash)
		}).error(function () {
			replaceFragment(defaultFragment)
		});
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
