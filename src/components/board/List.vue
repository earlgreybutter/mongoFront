<template>
	<div>
		<h2>EC2Instances.info</h2>
		<JqxGrid ref="myGrid"
			:width="width" :theme="'material-green'" 
			:source="dataAdapter" :columns="columns" 
			:sortable="true"
			:autoheight="true"
			:filterable="true"
        	:showfilterrow="true"
		/>
	</div>
</template>

<script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
export default {
	components: {
		JqxGrid
	},
	data: function () {
      return {
		width: '99%',
        // eslint-disable-next-line
        dataAdapter: new jqx.dataAdapter(this.source),
        columns: [
			{ text: 'Name', datafield: 'Name', width: 180},
			{ text: 'API Name', datafield: 'API Name', width: 130},
			{ text: 'Memory', datafield: 'Memory', width: 130, cellsformat: 'F2', cellsalign: 'right'},
			{ text: 'vCPUs', datafield: 'vCPUs', width: 130},
			{ text: 'Instance Storage', datafield: 'Instance Storage', width: 130, cellsalign: 'right'},
			{ text: 'Network Performance', datafield: 'Network Performance'},
			{ text: 'Linux On Demand cost', datafield: 'Linux On Demand cost'},
			{ text: 'Linux Reserved cost', datafield: 'Linux Reserved cost'},
			{ text: 'Windows On Demand cost', datafield: 'Windows On Demand cost'},
			{ text: 'Windows Reserved cost', datafield: 'Windows Reserved cost'}
        ]
      }
    },

    beforeCreate: function () {

      this.source = {
		url: "http://localhost:3000/api/books",
        datafields: [
			{ name: 'Name', type:'string'},
			{ name: 'API Name', type: 'string'},
			{ name: 'Memory', type: 'string'},
			{ name: 'vCPUs', type: 'string'},
			{ name: 'Instance Storage', type: 'string'},
			{ name: 'Network Performance', type: 'string'},
			{ name: 'Linux On Demand cost', type: 'string'},
			{ name: 'Linux Reserved cost', type: 'string'},
			{ name: 'Windows On Demand cost', type: 'string'},
			{ name: 'Windows Reserved cost', type: 'string'},
		],
        datatype: 'json',
		root: 'Rows',
		cache: false,
		sort: () => {
			// update the grid and send a request to the server.
			this.$refs.myGrid.updatebounddata("sort");
		},
      };

	},

}
</script>

<style scoped>

</style>