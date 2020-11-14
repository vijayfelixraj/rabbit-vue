<template>
  <div class="hello">
    <data-table
      :data="fileStructure"
      :per-page="perPage"
      :columns="columns"
      :table="table"
    >
    </data-table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      perPage: ["5", "10", "25", "50"],
      table: {
        "text-left": true,
        "w-full": true,
        "border-collapse": true,
      },
      columns: [
        {
          label: "ID",
          name: "id",
          filterable: true,
        },
        {
          label: "File",
          name: "file",
          filterable: true,
        },
        {
          label: "File Structure",
          name: "filePath",
          filterable: true,
        },
        {
          label: "Action",
          name: "view",
          filterable: false,
        },
      ],
    };
  },
  props: {
    fileStructure: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
