const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			info: [],
			characters: [
				{ name: "Luke", data: "este es Luke", uid: 1 },
				{ name: "Anakyn", data: "este es Anakyn", uid: 2 },
				{ name: "Leia", data: "este es Leia", uid: 3 }
			],
			planets: [{ name: "Death Star" }, { name: "The Republic" }]
		},
		actions: {
			loadSomeData: () => {
				//let url = "https://www.swapi.tech/api/people";
				let url = "https://swapi.dev/api/people/";

				let res = fetch(url)
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));

				//url = "https://www.swapi.tech/api/planets";
				url = "https://swapi.dev/api/planets/";

				res = fetch(url)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
			},

			loadSomeInfoCharacter: id => {
				let url = `https://swapi.dev/api/people/${id}/`;

				let res = fetch(url)
					.then(res => res.json())
					.then(data => setStore({ info: data }));
			},

			loadSomeInfoPlanet: id => {
				let url = `https://swapi.dev/api/planets/${id}/`;

				let res = fetch(url)
					.then(res => res.json())
					.then(data => setStore({ info: data }));
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			deleteFavorites: name => {
				const store = getStore();
				const newFavorites = [...store.favorites];
				const indice = newFavorites.indexOf(name);
				newFavorites.splice(indice, 1);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
