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
			characters: [
				{ name: "Luke", data: "este es Luke" },
				{ name: "Anakyn", data: "este es Anakyn" },
				{ name: "Leia", data: "este es Leia" }
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
				let url = "https://www.swapi.tech/api/people";
				let res = fetch(url)
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));

				url = "https://www.swapi.tech/api/planets";
				res = fetch(url)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
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
