import axios from "axios";
export default {
  async getFileStructure() {
    return await axios.get("http://127.0.0.1:8000/api/GetFileStructures");
  },
};
