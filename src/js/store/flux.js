const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				//let url = "https://www.swapi.tech/api/people";
				let url = "https://swapi.dev/api/people";

				let res = fetch(url)
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));

				//url = "https://www.swapi.tech/api/planets";
				url = "https://swapi.dev/api/planets";

				res = fetch(url)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
			},

			loadSomeInfo: (id, ispleople) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				if (ispleople) {
					let url = "https://www.swapi.tech/api/people/" + id;
					let res = fetch(url)
						.then(res => res.json())
						.then(data => setStore({ info: data.results.properties }));
				} else {
					let url = "https://www.swapi.tech/api/planets/" + id;
					let res = fetch(url)
						.then(res => res.json())
						.then(data => setStore({ info: data.results.properties }));
				}
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
