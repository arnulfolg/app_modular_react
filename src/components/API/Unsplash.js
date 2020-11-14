import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {'Authorization': `Client-ID ${process.env.REACT_APP_API_KEY}`}
});

const getHomeImages = () => {
	return instance.get(`collections/354267/photos?orientation=landscape&per_page=12`)
		.then(res => {
			return res.data
		})
}

const getBackgroundImages = () => {
	return instance.get(`collections/606460/photos?orientation=landscape`)
		.then(res => {
			return res.data
		})
}

const getUserImage = () => {
	return instance.get(`photos/F3zYeRzxOsM`)
		.then(res => {
			return res.data
		})
}

export { getHomeImages, getUserImage, getBackgroundImages }