<template>
	<div>
		<h2>EC2Instances.info</h2>
		<div>
			<JqxListBox style="float: left" @checkChange="myListBoxOnCheckChange($event)"
                    :width="400" :height="200" :source="listBoxSource" :checkboxes="true">
        	</JqxListBox>
		</div>
		<div style="margin-top: 20px">
			<div style="float: right; margin-right: 13px">
				<JqxButton @click="csvBtnOnClick()">Export to CSV</JqxButton>
			</div>
			<div style="float: right; margin-right: 13px">
				<JqxButton @click="btnOnClick()" :width="150">Auto Resize Columns</JqxButton>
			</div>
		</div>
		<JqxGrid ref="myGrid"
			:width="width" :theme="'material-green'" 
			:source="dataAdapter" :columns="columns" 
			:sortable="true"
			:autoheight="true"
			:filterable="true"
        	:showfilterrow="true"
			:altrows="true"
		/>
	</div>
</template>

<script>
import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";
import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
export default {
	components: {
		JqxListBox,
		JqxButton,
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
			{ text: 'Physical Processor', datafield: 'Physical Processor', hidden: true},
			{ text: 'Clock Speed(GHz)', datafield: 'Clock Speed(GHz)', hidden: true},
			{ text: 'Instance Storage', datafield: 'Instance Storage', width: 130, cellsalign: 'right'},
			{ text: 'Network Performance', datafield: 'Network Performance'},
			{ text: 'Linux On Demand cost', datafield: 'Linux On Demand cost'},
			{ text: 'Linux Reserved cost', datafield: 'Linux Reserved cost'},
			{ text: 'Windows On Demand cost', datafield: 'Windows On Demand cost'},
			{ text: 'Windows Reserved cost', datafield: 'Windows Reserved cost'}
        ],
		listBoxSource: [
                    { label: 'Name', value: 'Name', checked: true },
                    { label: 'API Name', value: 'API Name', checked: true },
                    { label: 'Memory', value: 'Memory', checked: true },
                    { label: 'vCPUs', value: 'vCPUs', checked: true },
                    { label: 'Physical Processor', value: 'Physical Processor', checked: false },
					{ label: 'Clock Speed(GHz)', value: 'Clock Speed(GHz)', checked: false },
					{ label: 'Instance Storage', value: 'Instance Storage', checked: true },
					{ label: 'Network Performance', value: 'Network Performance', checked: true },
					{ label: 'Linux On Demand cost', value: 'Linux On Demand cost', checked: true },
					{ label: 'Linux Reserved cost', value: 'Linux Reserved cost', checked: true },
					{ label: 'Windows On Demand cost', value: 'Windows On Demand cost', checked: true },
					{ label: 'Windows Reserved cost', value: 'Windows Reserved cost', checked: true },
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
			{ name: 'Physical Processor', type: 'String'},
			{ name: 'Clock Speed(GHz)', type: 'String'},
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
	methods: {
		btnOnClick: function () {
			this.$refs.myGrid.autoresizecolumns();
		},
		csvBtnOnClick: function () {
			this.$refs.myGrid.exportdata('csv', 'jqxGrid');
		},
		myListBoxOnCheckChange: function(event) {
			this.$refs.myGrid.beginupdate();
			if (event.args.checked) {
				this.$refs.myGrid.showcolumn(event.args.value);
			}
			else {
				this.$refs.myGrid.hidecolumn(event.args.value);
			}
			this.$refs.myGrid.endupdate();
		}
	}
}
</script>

<style scoped>

</style>