import { useState, useEffect } from 'react';
import axios from 'axios';

let API_KEY = localStorage.getItem('API_KEY');
const CLIENT_ID = process.env.REACT_APP_API_CLIENT_ID;

const CallIgdb = (dataCallIgdb) => {
	const [gameList, setGameList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!API_KEY)
			axios
				.post(
					`https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_SECRET}&grant_type=client_credentials`
				)
				.then((response) => response.data)
				.then((data) => localStorage.setItem('API_KEY', data.access_token))
				.catch((err) => console.log(err));
		if (API_KEY) {
			axios({
				url:
					'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games',
				method: 'POST',
				headers: {
					'Client-ID': process.env.REACT_APP_API_CLIENT_ID,
					Authorization: `Bearer ${API_KEY}`,
				},
				data: dataCallIgdb,
			})
				.then((response) => response.data)
				.then((data) => {
					setGameList(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		}
	}, [dataCallIgdb]);

	return { gameList, setGameList, loading, setLoading };
};

export default CallIgdb;
