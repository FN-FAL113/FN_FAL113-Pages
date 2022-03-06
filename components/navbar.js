class NavBar extends HTMLElement {

	constructor(){
		super();
	}


	connectedCallback() {
		this.innerHTML = `
		<ul class="bar">
		<li>
			<a class="social_link" href="index.html">
           		<img src="https://tinyurl.com/45as4pwk" alt="failed to load image">
           		<strong style="position: relative; top: 4px;">Home</strong>
        	</a>
        </li>

        <li>
        	<a class="social_link" href="https://github.com/FN-FAL113/" target=_blank>
           		<img src="https://tinyurl.com/mr36j2pw" alt="failed to load image">
           		<strong style="position: relative; top: 4px;">Github</strong>
        	</a>
        </li>

        <li>
        	<a class="social_link" href="https://www.youtube.com/channel/UCP7YiykhJSFQt1ce7dp-rZg" target=_blank>
            	<img id="yt_image" src="https://tinyurl.com/4ft8e2v4" alt="failed to load image">
            	<strong style="position: relative; top: 4px;">Youtube</strong>
        	</a>
        </li>

        <li>
        	<a class="social_link" href="https://steamcommunity.com/id/JPachelbel" target=_blank>
           		<img src="https://tinyurl.com/2p872evp" alt="failed to load image">
           		<strong style="position: relative; top: 4px;">Steam</strong>
        	</a>
        </li>
        <li>
        	<a class="social_link" href="projects.html">
           		<img src="https://tinyurl.com/3eeh63af" alt="failed to load image">
            	<strong style="position: relative; top: 4px;">Projects</strong>
        	</a>
        </li>
        </ul>
    `;
	}
		

} 

customElements.define('navigation-bar', NavBar);