<template>
	<div>
		<div id="app">
			<h1>Selamat Datang Di Website Qur'an-Reader</h1>
			<div class="card">
				<div class="card-header">Table</div>
				<div class="card-body">
					<table class="table table-dark table-hover">
						<thead>
							<tr class="bg-success">
								<th>No</th>
								<th>Surah</th>
								<th>Jumlah Ayat</th>
								<th>Diturunkan</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-success" v-for="item in data" :key="item.id">
								<td>{{item.nomor}}</td>
								<td>{{item.nama}}</td>
								<td>{{item.ayat}}</td>
								<td>{{item.type}}</td>
								<th><a class="btn btn-primary" @click.prevent="read(item.nomor)">Baca</a>
									<!-- <router-link class="btn btn-primary" :to="{name : 'read'}">Baca</router-link> -->
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- {{data}} -->
		</div>
	</div>
</template>
<script>
export default {
	props:['id'],
	data(){
		return {
			form:{
				nama: '',
				arti: ''
			},
			data : [],
			author : null
		}
	},
	mounted(){
		this.getData()
	},
	methods:{
		getData(){
			axios.get('https://api-alquranid.herokuapp.com/surah').then((response) => {
				console.log(response.data.data)
				this.data = response.data.data
				this.nama = response.data.data
			})
		},
		read(nomor){
			this.$router.push({
				name: 'read',
				params: {nomor}
			})
		}

	}
}
</script>