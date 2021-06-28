<template>
	<div>
		<h2>EC2Instances.info</h2>
		<JqxGrid 
			:width="800" :theme="'material-green'" 
			:source="dataAdapter" :columns="columns" 
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
        // eslint-disable-next-line
        dataAdapter: new jqx.dataAdapter(this.source),
        columns: [
			{text: 'API Name', datafield: 'InstanceType'},
			{text: 'Availablity Zone', datafield: 'AvailabilityZone'},
			{text: 'Group Name', datafield: 'GroupName'},
			{ text: 'OwnerId', datafield: 'OwnerId', width: 170 },
			{ text: 'ReservationId', datafield: 'ReservationId', width: 200 }
        ]
      }
    },
	// mounted() {
	// 	this.getList();
	// },
    beforeCreate: function () {
      this.source = {
        //localdata: 
		// function() {
		// 	this.$axios.get("http://localhost:3000/api/board")
		// 	.then((res)=>{
		// 		//console.log(res);
		// 		//console.log(res.data.Reservations);
		// 		return res.data.Reservations[0];
		// 	})
		// },
		// 
		url: "http://localhost:3000/api/board",
        datafields: [
			{ name: 'InstanceType', type:'string', map: 'Instances>0>InstanceType'},
			{ name: 'AvailabilityZone', type: 'string', map: 'Instances>0>Placement>AvailabilityZone'},
			{ name: 'GroupName', type: 'string', map: 'Instances>0>NetworkInterfaces>0>Groups>0>GroupName'},
			{ name: 'OwnerId', type: 'string' },
			{ name: 'ReservationId', type: 'string' },
        ],
        datatype: 'json'
      };
	},
	// methods:{
	// 	getList() {
	// 		this.$axios.get("http://localhost:3000/api/board")
	// 		.then((res)=>{
	// 			console.log(res);
	// 			console.log(res.data.Reservations);
	// 			return res.data.Reservations[0];
	// 		})
	// 		// .then((err)=>{
	// 		// 	console.log(err);
	// 		// })
	// 	},	    
	// },

}
</script>

<style scoped>

</style>