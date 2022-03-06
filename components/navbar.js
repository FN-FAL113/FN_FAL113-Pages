class NavBar extends HTMLElement {

	constructor(){
		super();
	}


	connectedCallback() {
		this.innerHTML = `
		<ul class="bar">
		<li class="home">
			<a class="social_link" href="index.html">
           		<img src="https://www.pinclipart.com/picdir/big/531-5312593_house-logo-white-lines-svg-clip-arts-png.png" alt="failed to load image">
           		<strong style="position: relative; left: -6px; top: 12px">Home</strong>
        	</a>
        </li>

        <li>
        	<a class="social_link" href="https://github.com/FN-FAL113/" target=_blank>
           		<img src="https://tinyurl.com/mr36j2pw" alt="failed to load image">
           		<strong style="position: relative; left:-2px; top: 12px;">Github</strong>
        	</a>
        </li>

        <li class="youtube">
        	<a class="social_link" href="https://www.youtube.com/channel/UCP7YiykhJSFQt1ce7dp-rZg" target=_blank>
            	<img  src="https://tinyurl.com/4ft8e2v4" alt="failed to load image">
            	<strong style="position: relative; left:-5px; top: 12px;">Youtube</strong>
        	</a>
        </li>

        <li class="steam">
        	<a class="social_link" href="https://steamcommunity.com/id/JPachelbel" target=_blank>
           		<img src="https://tinyurl.com/2p872evp" alt="failed to load image">
           		<strong style="position: relative; left:-5px; top: 12px;">Steam</strong>
        	</a>
        </li>
        <li class="proj">
        	<a class="social_link" href="projects.html">
           		<img src="https://i.imgur.com/ZLDq5Ez.png" alt="failed to load image">
            	<strong style="position: relative; top: 12px;">Projects</strong>
        	</a>
        </li>
        </ul>
    `;
	}
		

} 

customElements.define('navigation-bar', NavBar);