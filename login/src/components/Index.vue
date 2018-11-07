<template>
	<div> 
		<p>Hello,{{userName}}</p>		
	</div>
</template>
<script>
	export default{		
		computed:{		
			userName() {
		        let localData = localStorage.userName;		       		   
		        if(this.$store.state.username===undefined){		        	
		          	this.$store.commit('setUserName',localData)//同步操作
		        }		       
		        return this.$store.state.userName
		     }
		}
	}
</script>