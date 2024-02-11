<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        visible:false,
        check:'Remember me'
        
      }
    },
  }
</script>
<style>
body{
  font-family: "Roboto", sans-serif;
  font-size:14px;
  background-color:#0D47A1;
  background-size : 100% ;
  background-repeat : no-repeat;
  background-attachment : fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.blur-background {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(50px);
}
</style>

//background-image: url("https://papers.co/wallpaper/papers.co-sl98-pastel-blue-blur-gradation-29-wallpaper.jpg");
//https://th.bing.com/th/id/R.af077f1f49af54c3335c2c61b5a18975?rik=LUw1tydcnZOMkw&riu=http%3a%2f%2fwww.solidbackgrounds.com%2fimages%2f2048x2048%2f2048x2048-dark-blue-solid-color-background.jpg&ehk=gGp9X5bElQ5PqKRdRmZCkAnqpUXfKWeKW3YNSAp9HBM%3d&risl=&pid=ImgRaw&r=0
//https://theawesomedaily.com/wp-content/uploads/2018/07/cool-backgrounds-1-1.png