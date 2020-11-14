<template>
  <div id="app">
    <div class="row float-left">
      <label>Upload</label>
      <input type="file" name="file" @change="uploadFile" />
    </div>
    <div class="clearfix"></div>
    <HelloWorld :fileStructure="fileStructure" />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      baseURL: process.env.VUE_APP_baseUrl,
    };
  },
  created() {
    try {
      this.$store.dispatch("loadFileStructure", []);
    } catch (error) {
      this.$swal({
        title: "Error",
        text: error,
        icon: "error",
        button: true,
        dangerMode: true,
      });
    }
  },
  computed: {
    fileStructure() {
      return this.$store.state.fileStructure;
    },
  },
  methods: {
    async uploadFile(e) {
      var files = e.target.files || e.dataTransfer.files;
      var FileSize = files[0].size / 1024 / 1024; // in MB
      if (FileSize > 2) {
        alert("File size exceeds 2 MB");
        return false;
      }
      if (!files.length) return;
      await this.axios.post(
        "http://127.0.0.1:8000/api/fileStructure/store",
        files[0]
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
