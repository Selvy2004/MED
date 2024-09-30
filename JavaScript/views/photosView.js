import { colors } from "../data.js";
class PhotosView {
	_parentElement = document.querySelector('.one-collect-view');
	_currPhoto;

	render(data) {
		this._data = data;
		this._colors = colors;
		this._parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
		this._currPhoto = document.querySelector('.viewed-img .main-image');
	}

	generateMarkup() {
		const markup = `      
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="close-icon"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 18 18 6M6 6l12 12"
				/>
			</svg>

			<div class="one-collect-view-container">
				<div class="collec-img-container">
					<img
						class="collec-img"
						src="${this._data.imageView}"
						alt="${this._data.title}"
					/>
				</div>
				<div class="collec-description">
					<h3 class="collec-title">${this._data.title}</h3>
					<div class="prices">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="svg-icon"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
							/>
						</svg>
						<div class="prices-nums">
							<p class="current-price">${this._data.price} EGY</p>
							<p class="old-price"><del>${this._data.oldPrice} EGY</del></p>
						</div>
					</div>
					<div class="colors">
						 ${this._colors.map(color => `<span style="background-color: ${color}" class="color-span"></span>`).join('')}
					</div>
					<h3 class="Contact-with-us-title">Contact with us</h3>
					<div class="contact">
						<div class="phone-num">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="svg-icon"
								xml:space="preserve"
								viewBox="0 0 16 16"
								id="whatsapp"
							>
								<g fill="none" stroke-miterlimit="10">
									<path
										d="M8.002.5h-.004C3.863.5.5 3.864.5 8c0 1.64.529 3.161 1.428 4.396l-.935 2.787 2.883-.921A7.448 7.448 0 0 0 8.002 15.5c4.135 0 7.498-3.364 7.498-7.5S12.137.5 8.002.5z"
									></path>
									<path
										d="M12.175 10.931c-.172.484-.858.884-1.405 1.001-.374.079-.862.142-2.507-.534-2.103-.863-3.457-2.982-3.562-3.119-.1-.138-.849-1.122-.849-2.139 0-1.017.522-1.514.732-1.726.172-.175.458-.254.732-.254.088 0 .168.004.24.008.21.008.315.021.454.35.172.413.593 1.43.643 1.534.05.104.101.246.029.384-.067.142-.126.204-.231.325-.105.121-.206.213-.311.342-.097.113-.206.234-.084.442.122.204.542.884 1.161 1.43.799.705 1.447.93 1.678 1.026.172.071.378.054.505-.079.16-.171.358-.454.559-.734.143-.2.324-.225.513-.154.193.067 1.215.567 1.426.671.21.104.349.154.4.242.049.087.049.5-.123.984z"
									></path>
								</g>
							</svg>
							<a href="https://wa.me/+201282449947" class="phone-number"
								>+201282449947</a
							>
						</div>
						<div class="phone-num">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="svg-icon"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
								/>
							</svg>
							<a href="tel:+201282449947" class="phone-number">+201282449947</a>
						</div>
					</div>
				</div>
			</div>
    `;
		return markup;
	}
	photosOptions(sub, i) {
		const markup = `
        <img
          src="${sub}"
          class="sub-image ${i === 0 ? 'active-photo' : ''} "
          alt = "${sub}"
          status="${i === 1 ? 'active' : 'notactive'}"
        />
    `;
		return markup;
	}

	eventHandler() {
		// Click on Sub Photos
		document.querySelector('body').addEventListener('click', (e) => {
			e.preventDefault();
			const subPhoto = e.target.closest('.sub-image');
			if (!subPhoto) return;
			this._currPhoto.setAttribute('src', subPhoto.getAttribute('src').replace('-thumbnail', ''));
			// Activation
			document.querySelectorAll('.sub-image').forEach(img => {
				img.classList.remove('active-photo');
				img.setAttribute('status', 'notactive');
			});
			subPhoto.classList.add('active-photo');
			subPhoto.setAttribute('status', 'active');
			console.log('clicked');
		});

		// Click on current Viewed Photo
		this._parentElement.addEventListener('click', (e) => {
			e.preventDefault();
			const viewedPhoto = e.target.closest('.viewed-img');
			if (!viewedPhoto) return;
			// const middleSide = document.getElementsByClassName('left-side-contant')[0];
			const clone = document.getElementsByClassName('left-side-contant')[0].cloneNode(true);
			clone.classList.add('centered-photo');
			document.body.appendChild(clone);
			setTimeout(() => {
				clone.style.opacity = '1';
			}, 10);
			console.log(clone);

			// console.log(middleSide);
			// this.rander(this._data);

		});
		// Click on right and left arrow

		// Right and Left Scroll animation

		// Click on overlay and X

	}

}
export default new PhotosView();