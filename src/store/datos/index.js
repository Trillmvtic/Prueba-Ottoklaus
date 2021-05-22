import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    Productos: [],
    add: false,
  },
  getters: {
    datos(state) {
      return state.Productos;
    },
  },
  mutations: {
    setData(state, payload) {
      state.Productos = payload;
    },
    AddData(state, payload) {
      state.Productos.push(payload);
    },
    MostrarAdd(state) {
      state.add = !state.add;
    },
  },
  actions: {
    getData({ commit }) {
      firebase
        .firestore()
        .collection("productos")
        .onSnapshot((snapshot) => {
          let listadoProductos = [];
          snapshot.forEach((p) => {
            listadoProductos.push({
              id: p.id,
              codigo: p.data().codigo,
              nombre: p.data().nombre,
              stock: p.data().stock,
              precio: p.data().precio,
            });
          });
          commit("setData", listadoProductos);
        });
    },
    async addData({ commit }, payload) {
      const juguete = {
        precio: Number(payload.precio),
        stock: Number(payload.stock),
        nombre: payload.nombre.toLowerCase(),
        codigo: payload.codigo.toUpperCase(),
      };

      try {
        await firebase
          .firestore()
          .collection("productos")
          .add(juguete);
      } catch (error) {
        console.error("Error al agregar juguete:", error);
      }
    },

    async borrarJuguete({ commit }, id) {
      try {
        await firebase
          .firestore()
          .collection("productos")
          .doc(id)
          .delete();
        // commit("deleteData",id);
      } catch (error) {
        console.error("No se puede eliminar el juguete:", error);
      }
    },

    async editToy({ commit },juguetes ) {
      console.log(juguetes)
      try {
        await firebase
          .firestore()
          .collection("productos")
          .doc(juguetes.id)
          .update(juguetes.data);
      } catch (error) {
        console.error("Error al editar juguete:", error);
      }
    },
  },
};
