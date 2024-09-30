class CollectionView {
  _parentElement = document.querySelector('.collec-container');
  render(data, colors) {
    this._data = data;
    this._colors = colors;
    this._parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
  }

  generateMarkup() {
    const markup = this._data.map(collection => `
      <a class="one-collec-container" href="#${collection.id}">
				<div class="collec-img-container">
					<img
						class="collec-img"
		  			src="../../images/dress.jpeg"
						alt="${collection.title}"
					/>
				</div>
				<div class="collec-description">
					<h3 class="collec-title">${collection.title}</h3>
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
							<p class="current-price">${collection.price} EGY</p>
							<p class="old-price"><del>${collection.oldPrice} EGY</del></p>
						</div>
					</div>
					<div class="colors">
						${this._colors.map(color => `<span style="background-color: ${color}" class="color-span"></span>`).join('')}
					</div>
				</div>
			</a>
    `).join('');
    return markup;
  }

  eventHandler(handler) {
    const overlay = document.querySelector('.overlay');
    const oneCollectView = document.querySelector('.one-collect-view');
    const closeIcon = document.querySelector('.close-icon');
    document.addEventListener('click', (e) => {
      const cart = e.target.closest('.one-collec-container');
      if (!cart) return;
      const hash = cart.getAttribute('href').slice(1); // Extract the ID from href
      window.location.hash = hash;

      overlay.classList.remove('hidden');
      oneCollectView.classList.remove('hidden');
      handler();

    });

    const closeCart = function (e) {
      e.preventDefault();
      const oneCollectView = document.querySelector('.one-collect-view');

      if (!oneCollectView) return;

      oneCollectView.innerHTML = '';
      overlay.classList.add('hidden');
      oneCollectView.classList.add('hidden');

      window.history.pushState('', document.title, window.location.pathname);

    }
    overlay.addEventListener('click', closeCart);
    closeIcon?.addEventListener('click', closeCart);

  }

}
export default new CollectionView();
