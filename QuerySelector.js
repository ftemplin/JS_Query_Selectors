<script type="text/javascript">

//CSS .class {}   #id {}, element combination could be .class #id a {}
		// Getting an element by its id
			var titleid = document.getElementById("titleid")
			titleid.innerText = "Changed text by ID reference in JS"
		// Getting an element by its Class
			var titleclass = document.querySelector(".titleclass")
			titleclass.innerText = "Changed text by Class reference in JS"
		// Getting an element within the title Class
			var title = document.querySelector(".title")
			var small = title.querySelector("small")
			small.innerText = "Changed text by class and element in JS"
		// changing the link with just the element
		var a = document.querySelector("a")
		a.innerText = "Coding For Everybody.com" 
		// changing all instances of an element
		var lis = document.querySelectorAll("li")
		lis[0].innerText = "This is First"
		lis[4].innerText = "This is Fith"
		lis[5].innerHTML = "<a href='www.DigiTellus.com'>DigiTellus</a>"
		//QuerySelector for inputs
		var input = document.querySelector(".form-control")
		var fname = document.querySelector(".fname")
		fname.innerText = input.value + " good job"

</script>