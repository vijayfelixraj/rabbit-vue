import Vue from "vue";
import Vuex from "vuex";
import FileStructure from "../services/api/fileStructure";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fileStructure: [],
  },

  mutations: {
    fetchFileStructureMutation(state, payLoad) {
      state.fileStructure = payLoad;
    },
  },

  actions: {
    async loadFileStructure({ commit }) {
      const files = await FileStructure.getFileStructure();
      commit("fetchFileStructureMutation", files.data);
    },
  },

  getters: {},
});
