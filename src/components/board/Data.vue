<template>
	<div>
		<h2>JSON DATA</h2>
        <div>
            {{message}}
        </div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    mounted() {
        this.getList();
    },
	methods:{
		getList() {
			this.$axios.get("http://localhost:3000/api/books")
			.then((res)=>{
                this.message = JSON.stringify(res);
			})
		}
	}
}
</script>


<style scoped>

</style>