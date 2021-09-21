<template>
	<div id="app">
		
			
		<h1>{{surat.data}}</h1>
<div class="card">
	<div class="card-header">Nama Surat</div>
	<div class="card-body">
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Nomor Ayat</th>
					<th>Arab</th>
					<th>Latin</th>
					<th>Artinya</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="surah in surat" :key="surah.nomor">
					<td>{{surah.nomor}}</td>
					<td class="font-arab">{{surah.ar}}</td>
					<td v-html="surah.tr">{{surah.tr}}</td>
					<td>{{surah.id}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
		
	</div>
</template>
<script>
	export default{
	props : ['nomor'],
		data(){
		return {
			form:{
				no:{}
			},
			surat : {},
			data : [],
			ar: {}
		}
	},
		mounted(){
			this.getSurah()
		},
		methods:{
			getSurah(nomor){
				axios.get('https://api-alquranid.herokuapp.com/surah/' + this.nomor).then((response) => {
				console.log(response)
				this.surat = response.data.data
			})
			},
		}
	}
</script>
<style>
	@font-face
	{
		font-family : "Arab";
		src :('css/ScheherazadeNew-Bold.ttf');
	}
	.font-arab{
		font-family : "Arab";
		font-size : 28px;
	}
</style>