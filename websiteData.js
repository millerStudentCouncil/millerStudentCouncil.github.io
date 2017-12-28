var announcements = [
	
	
{
		"title": {
			"link":"#feedbackForm",
			"text":"Give Feedback to Help Improve this Website!"
		},
	},
	/*{
		"title":{
			"link":"#wackyTackySpiritWeek",
			"text":"Learn more about the upcoming spirit week!"
		},
	}, */
/*	{
		"title":{
			"link":"https://docs.google.com/forms/d/e/1FAIpQLSdJEeCEEPfPcFODQhzpXmQWk6sMcAd9HiQ6_eGvMGjBzONXLA/viewform",
			"text":"Remember to update the form for Mismatch Day!"
		},
	}, */
	
/*	{
		"title": {
			"link":"#walkorbike",
			"text":"Learn More About Walk or Bike to School Day (Wednesday, October 11th)"
		},
	},*/
	/*{
		"title": {
			"link":"millersc.org/rainbowSpiritWeek.html",
			"text":"Show your spirit in the Rainbow Spirit Week starting October 9th!"
		},
	},*/
/*{
		"title": {
			"link":"", //No Link, just an announcement
			"text":"Don't forget to come to the Student Store, which opens on September 26th"
		},
	},*/
/*
	{
		"title": {
			"link":"", //No Link, just an announcement
			"text":"Make sure to come to the Galaxy Dance on Friday, 7 - 9:30 PM!"
		},
	},
*/
/*
	{
		"title": {
			"link":"", //No Link, just an announcement
			"text":"Come to the Back to School Bash on Thursday, September 14."
		},
	}, 
	
	{
		"title": {
			"link":"", //No Link, just an announcement
			"text":"Student Council Meeting on Wednesday, September 6th at 8:20 AM."
		},
	}, */



/*		"title": {
			"link":"https://docs.google.com/forms/d/e/1FAIpQLSdw0Xu5P900_gPyGkb3zdwcvaANPF8nfwSIqnUW8B9QBnBdrA/viewform",
			"text":"Click here to fill out the Tech Talk Homeroom Interest Form!"
			
		},
	},
	
*/
	
/*
{
		"title": {
			"link":"https://kahunaflowers.com/index.php/school/joaquin-miller-m-s.html?mode=list",
			"text":"Click here to buy flowers and leis for 8th grade graduation!"
		},
	},	
*/


	

/*	{
		"title": {
			"link":"#spiritday",
			"text":"Make sure to participate in Crazy Socks Day!"
		},
	},
	

/*	{
		"title": {
			"link":"https://docs.google.com/forms/d/1_3LEn4XLUidDQtzzsF9HbTeqC-WpPfhO6a92hA8KpgI/viewform",
			"text":"Miller Oscars Sign Up"
		},
	},*/

	
/*	{
		"title": {
			"link":"#plasticToPennies",
			"text":"Learn how to get involved with the Plastic to Pennies Drive!"
		},
	},*/	


]

var upcomingEvents = [	
	{"img":"http://millersc.org/Drawing.png","title":"Welcome to the Official Miller Student Council Website!","info":"Check Back Frequently For All The Latest Information"},
//	{"img":"http://millersc.org/wackyTacky.png","title":"Wacky Tacky Spirit Week","info":"Remember to update the Mismatch day form for today!"},
//	{"img":"http://www.camdencc.edu/oit/images/Screen-Shot-2016-04-19-at-12-13-16-PM.png","title":"Contact Us","info":"If you have any questions, check our contact us page. Our emails have changed, so please look at that too."},
//	{"img":"https://i.ytimg.com/vi/TySrpYqNzFE/maxresdefault.jpg","title":"We Scare Hunger","info":"Donate to those in need with WE SCARE HUNGER. For more information, check the events tab and click 'We Scare Hunger.'"},
//	{"img":"","title":"","info":""}, //TEMPLATE
	
//	{"img":"http://www.walkbiketoschool.org/wp-content/themes/WBTS_Custom/images/Logo_WBTS.png","title":"Walk or Bike to School Day","info":"Walk or Bike to School Day is on Wednesday, October 11th. For more information, click on the Events tab and click 'Walk or Bike to School Day.'"}, 
//	{"img":"https://i.pinimg.com/originals/1f/68/b8/1f68b8001e6843bbe4db3dcc4d540205.jpg","title":"Rainbow Spirit Week","info":"Show your spirit in the Rainbow Spirit Week starting October 9th. To learn more about the spirit week, click on the Events tab and click 'Rainbow Spirit Week.'"},	
//      {"img":"http://www.carnivaldepot.com/images/ringtoss.jpg", "title":"Come to the Back to School Bash on Thursday, September 14!", "info":"Why did the chalkboard get up in class? To get chalk-olate! There will be various refreshments for sale in the Back to School Bash from 5 to 7PM! Attendance is free and there will be fun carnival games!"},
//      {"img":"http://www.workboard.com/master-team-meetings/images/meeting-peoples.png", "title":"Don't forget to come to the full student council meeting!", "info":"This meeting is on Wednesday, December 11th at 8:20 AM. Check the calendar for more updates and such."},	
	{"img":"http://www.laminaresearchcenter.com/images/comingsoon.png","title":"More Coming Soon!","info":"Stay Tuned"},
//	{"img":"http://saintjamesschool.net/wp-content/uploads/2015/05/BoxTopColor.jpg","title":"Start collecting Box Tops!","info":"Turn them in to your Homeroom Representative when the collection date (10/14) comes near!"},
//	{"img":"http://a.theinspiration.com/wp-content/uploads/url19.jpeg","title":"The Look At the Books Drive is from May 20th until June 3rd!","info":"We are collecting gently used books to help raise money for Nepal earthquake relief."},
//	{"img":"http://files.hgsitebuilder.com/hostgator705321/image/graduation-leis.jpg","title":"Purchase your flowers for graduation now!","info":"Visit kahunaflowers.com, choose Joaquin Miller M.S. as your school, and buy away!"},
//	{"img":"http://www.banthebottle.net/wp-content/uploads/2012/05/RecycleSymbol_wPlasticBottles.jpg","title":"The Plastic to Pennies Drive is coming soon!","info":"Recycle your empty plastic water bottles in exchange for pennies!"},
//	{"img":"http://heidicohen.com/wp-content/uploads/social-media-icons-300x225.png","title":"Do you have a Snapchat, Instagram, Twitter, Facebook, or Google+ account?","info":"Follow Miller Student Council to receive updates on Leadership events and activities."},
]

var spiritDay = "" //Leave empty when there is no spirit day

var formHashes = ["walkOrBikeToSchoolForm","techRequestForm", "dodgeball", "fancyDanceCooking","oscarForm", "feedbackForm", "spiritDayForm", "socialForm", "movieNightForm", "danceFeedbackForm"] // Hashes to be formatted as google forms, DO NOT INCLUDE spiritDay
