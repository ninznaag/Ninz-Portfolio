let skillsBtn = document.querySelector("#skills-btn");
let toolsBtn = document.querySelector("#tools-btn");
let dynamicSkillsSection = document.querySelector("#dynamic-skills-section");

console.log(dynamicSkillsSection);

skillsBtn.addEventListener("click", () => {
	dynamicSkillsSection.innerHTML = `
	<div class="card skill-card m-2 m-lg-0">
	  <div class="card-body text-center">
	  	<i class="fa-solid fa-globe web-icon p-3"></i>
	    <h5 class="card-title skill-card-title text-center mt-2">WEB DEVELOPMENT</h5>
	    <ul class="text-light p-0 skills-list">
	    	<li class="list-unstyled my-1">
	    		<div class="d-flex justify-content-evenly">
	    			<p class="my-0 me-auto">HTML</p><i class="me-1 fs-5 fa-brands fa-html5"></i>
	    		</div>  		
	    	</li>
	    	<li class="list-unstyled my-1">
	    		<div class="d-flex justify-content-evenly">
	    			<p class="my-0 me-auto">CSS</p><i class="me-1 fs-5 fa-brands fa-css3-alt"></i>
	    		</div>  		
	    	</li>
	    	<li class="list-unstyled my-1">
	    		<div class="d-flex justify-content-evenly">
	    			<p class="my-0 me-auto">JavaScript</p><i class="me-1 fs-5 fa-brands fa-js"></i>
	    		</div>  		
	    	</li>
	    	
	    </ul>
	  </div>
	</div>
	<div class="card skill-card m-3 mx-lg-5 mt-lg-5">
	  <div class="card-body text-center">
	  	<i class="fa-solid fa-screwdriver-wrench web-icon p-3"></i>
	    <h5 class="card-title skill-card-title text-center mt-2">FRAMEWORKS</h5>
	    <ul class="text-light p-0 skills-list">
	    	<li class="list-unstyled my-1">
	    		<div class="d-flex justify-content-evenly">
	    			<p class="my-0 me-auto">Bootstrap</p><i class="fs-5 fa-brands fa-bootstrap"></i>
	    		</div>  		
	    	</li>
	    	<li class="list-unstyled my-1">
	    		<div class="d-flex justify-content-evenly">
	    			<p class="my-0 me-auto">Express JS</p><i class="me-1 fs-5 fa-brands fa-js"></i>
	    		</div>  		
	    	</li>
	    	
	    </ul>
	  </div>
	</div>
	<div class="card skill-card m-3 m-lg-0">
	  <div class="card-body text-center">
	  	<i class="fa-solid fa-mobile-screen-button web-icon p-3"></i>
	    <h5 class="card-title skill-card-title text-center mt-2">FULL-STACK DEVELOPMENT</h5>
	    <ul class="text-light p-0 skills-list">
	    	<li class="list-unstyled my-1">
	    		<div class="d-flex justify-content-evenly">
	    			<p class="my-0 me-auto">React JS</p><i class="me-1 fs-5 fa-solid fa-atom"></i>
	    		</div>  		
	    	</li>
	    	<li class="list-unstyled my-1">
	    		<div class="d-flex justify-content-evenly">
	    			<p class="my-0 me-auto">Node JS</p><i class="me-1 fs-5 fa-brands fa-node-js"></i>
	    		</div>  		
	    	</li>				    	
	    </ul>
	  </div>
	</div>
	`;
})

toolsBtn.addEventListener("click", () => {
	dynamicSkillsSection.innerHTML = `
	<div class="d-lg-flex mt-lg-2 flex-sm-wrap" >
		<div class="container">
			<div class="justify-content-center d-flex mt-2" data-aos="fade-down" data-aos-duration="2000">
				<div class="container-tools position-relative">
					<img class="skills-icon" src="images/gitbash-logo-nobg.png">
					<div class="overlay">Gitbash</div>
				</div>
				<div class="container-tools position-relative mx-3 mx-md-3 mx-lg-4" data-aos="fade-down" data-aos-duration="2000">
					<img class="skills-icon" src="images/gitlab-logo-nobg.png">	
					<div class="overlay">Gitlab</div>
				</div>
				<div class="container-tools position-relative" data-aos="fade-down" data-aos-duration="2000">
					<img class="skills-icon" src="images/github-logo-nobg.png">
					<div class="overlay">Github</div>
				</div>					
			</div>

			<div class=" mt-2 d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-duration="2000">
				<div class="container-tools position-relative" data-aos="fade-down" data-aos-duration="2000">
					<img class="skills-icon" src="images/sublime-text-logo-nobg.png">
					<div class="overlay">Sublime Text</div>
				</div>
				<div class="container-tools position-relative mx-3 mx-md-3 mx-lg-4">
					<img class="skills-icon" src="images/postman-logo-nobg.png">
					<div class="overlay">Postman</div>		
				</div>	
				<div class="container-tools position-relative" data-aos="fade-up" data-aos-duration="2000">
					<img class="skills-icon" src="images/figma-logo-nobg.png">
					<div class="overlay">Figma</div>	
				</div>
			</div>

			<div class="mt-2 d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-duration="2000">				
				<div class="container-tools position-relative" data-aos="fade-up" data-aos-duration="2000">
					<img class="skills-icon" src="images/MongoDB-logo-nobg.png">
					<div class="overlay">MongoDB</div>
				</div>
				<div class="container-tools position-relative mx-3 mx-md-3 mx-lg-4" data-aos="fade-up" data-aos-duration="2000">
					<img class="skills-icon" src="images/heroku-logo-nobg.png">
					<div class="overlay">Heroku</div>
				</div>	
				<div class="container-tools position-relative"  data-aos="fade-up" data-aos-duration="2000">
					<img class="skills-icon" src="images/vercel-logo-nobg.png">
					<div class="overlay">Vercel</div>
				</div>
								
			</div>
		</div>
	</div>
	`;
})



let navItems = document.querySelectorAll(".nav-item");
let navbarCollapse = document.querySelector(".navbar-collapse");

navItems.forEach((navItem) => {
	navItem.addEventListener("click", () => {
		console.log("test")
		navbarCollapse.classList.add("collapse");
	})
})



