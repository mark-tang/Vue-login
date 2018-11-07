<template>
  <div class="hello">   
    <div><input type="text" name="" id="" v-model="userName" placeholder="请输入用户名"/> </div>
    <div><input type="password" name="" v-model="pwd" placeholder="请输入密码"/> </div>
    <p v-if="error" class="error">*帐号或密码错误</p>
    <div><input type="submit" class="sub_btn" placeholder="登    录" @click="checkUser"/></div>   
  </div>  
</template>

<script>
  import axios from 'axios'  
  export default {
    name: 'Login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        userName: '',
        pwd: '',
        error:false
      }
    },
    created(){
      this.addUser();
    },
    methods:{
      addUser() {
          var _this = this;
          //取静态 json 数据
          this.$http.get('http://localhost:3003/getList.json').then(function(res){  
            console.log(res.data);
          },(err)=>{
            //console.log(err);
          });
          //取数据库数据
          this.$http.get('http://localhost:3003/category').then(function(res){  
            console.log(res.data);
          },(err)=>{
            //console.log(err);
          });
            
      },
      //用户登录
      checkUser(){
        var _this = this;
        this.$http.post('api/login',{
              username:_this.userName,
              password:_this.pwd,
            }).then((res)=>{                
              if(res.data.msg === "登录成功"){
                _this.error=false;
                _this.$store.commit("setUser",res.data);
                _this.$router.push({path: '/index'});
              }
              else{
                _this.error = true
              }            
            },(err)=>{             
              //console.log(err);
            }); 
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  margin:0;
}
.error{
  color: red;
}
</style>
