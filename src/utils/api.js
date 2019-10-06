class Api {
	constructor() {
		this.defaultHeaders = new Headers({
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		})
	}

	get(url, params) {
		const options = {
			method: 'GET',
			headers: this.defaultHeaders
		};

		return fetch(url, options)
	}
}

export const API = new Api();