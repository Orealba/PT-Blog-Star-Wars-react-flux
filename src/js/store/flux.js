const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favPeli: [],
      favPer: [],
      favPla: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      FotosPersonajes: [
        "https://cinematicos.net/wp-content/uploads/l-intro-1634662920.jpg",
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/c-3po.jpg?itok=JvPuyp6W",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwD-j9wTzzTxVebX15Be9qS0n3y8PUsMmzoQ&usqp=CAU",
        "https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg?fit=2048%2C1365&ssl=1",
        "https://dam.smashmexico.com.mx/wp-content/uploads/2016/12/princesa-leia-organa-ejemplo-femenino.jpg",
        "https://sm.askmen.com/askmen_in/topten/o/owen-lars/owen-lars_qt6s.jpg",
        "https://static.wikia.nocookie.net/disney/images/9/9b/Berulars.jpg",
        "https://preview.free3d.com/img/2017/01/2279321979024573604/nsjpsv4a-900.jpg",
        "https://comicvine.gamespot.com/a/uploads/scale_medium/14/145984/4902632-8136336329-biggs.jpg",
        "https://cdn.mos.cms.futurecdn.net/56gz8xREXTFngXKdRhWDeH.jpeg",
      ],
      FotosFilms: [
        "http://static-1.ivoox.com/audios/1/6/0/7/3321493907061_XXL.jpg",
        "https://i.discogs.com/6-axGq8-EPtEN4mTnED8OlYppiP5SnbloHGj3Fhxuho/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5Njk3/MzMtMTI4MjU2NTc3/OS5qcGVn.jpeg",
        "https://i.scdn.co/image/ab67616d0000b2737da954f63a1401edee1ff95f",
        "https://m.media-amazon.com/images/I/81Vl2RQrZkL._SX425_.jpg",
        "https://i2.wp.com/www.lafosadelrancor.com/wp-content/uploads/2017/07/sw-II.jpg?fit=476%2C381&ssl=1",
        "https://images-na.ssl-images-amazon.com/images/I/61CS7WVD50L.jpg",
      ],
      FotosPlanetas: [
        "https://s03.s3c.es/imag/_v0/770x420/d/0/8/star-wars-tatooine.jpg",
        "https://static.wikia.nocookie.net/esstarwars/images/e/ec/Ciudad_Aldera_en_Alderaan.jpeg",
        "https://static.wikia.nocookie.net/esstarwars/images/9/93/Great_Temple_RO.png",
        "https://frikipolis.com/wp-content/uploads/2021/07/unnamed-file-54.jpg",
        "https://imgix.gizmodo.com.au/content/uploads/sites/2/2016/04/30/fuf7x2czccyh1x18djy7.gif?ar=16%3A9&fit=crop&q=80&w=1280&nrs=40&fm=jpg&frame=1",
        "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg",
        "https://images3.alphacoders.com/931/thumb-1920-931417.png",
        "https://i.pinimg.com/originals/ac/dd/1c/acdd1cd77aca5a5c784cca933a1bb229.jpg",
        "https://www.ecured.cu/images/3/38/Coruscant_distrito_del_Senado.jpg",
        "https://w0.peakpx.com/wallpaper/750/827/HD-wallpaper-star-wars-kamino-star-wars.jpg",
      ],
      Peliculas: [],
      MoreDetails: [],
      Planetas: [],
      Personajes: [],
    },

    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: async () => {
        await fetch("https://swapi.dev/api/films")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setStore({
              Peliculas: data.results,
            });
          })
          .catch((error) => console.log("DANGER DANGER", error));
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      loadSomeDataDetails: async () => {
        await fetch("https://swapi.dev/api/films/")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setStore({
              MoreDetails: data.results,
            });
          })
          .catch((error) => console.log("DANGER DANGER", error));
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      dataPlanetas: async () => {
        await fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setStore({
              Planetas: data.results,
            });
          })
          .catch((error) => console.log("DANGER DANGER", error));
      },

      dataPersonajes: async () => {
        await fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setStore({
              Personajes: data.results,
            });
          })
          .catch((error) => console.log("DANGER DANGER", error));
      },

      addFav: (nombre, tipo) => {
        const store = getStore();
        if (tipo === "personajes") {
          setStore({ favPer: [nombre, ...store.favPer] });
        } else if (tipo === "planetas") {
          setStore({ favPla: [nombre, ...store.favPla] });
        } else if (tipo === "peliculas") {
          setStore({ favPeli: [nombre, ...store.favPeli] });
        }
      },

      isFav: (nombre, tipo) => {
        const store = getStore();
        if (tipo === "personajes") {
          return store.favPer.indexOf(nombre) >= 0 ? true : false;
        } else if (tipo === "planetas") {
          return store.favPla.indexOf(nombre) >= 0 ? true : false;
        } else if (tipo === "peliculas") {
          return store.favPeli.indexOf(nombre) >= 0 ? true : false;
        }
      },

      deleteFav: (nombre, tipo) => {
        const store = getStore();
        if (tipo === "personajes") {
          const personas = store.favPer.filter((name) => name !== nombre);
          setStore({ favPer: personas });
        } else if (tipo === "planetas") {
          const planetas = store.favPla.filter((name) => name !== nombre);
          setStore({ favPla: planetas });
        } else if (tipo === "peliculas") {
          const films = store.favPeli.filter((name) => name !== nombre);
          setStore({ favPeli: films });
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
      },
    },
  };
};

export default getState;
