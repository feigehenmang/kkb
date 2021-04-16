<template>
  <div>
      <div v-for="image in imageList" :key="image">
          <img v-load='image' src="../assets/logo.png" style="width: 100%;" alt="">
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imageList: []
        }
    },
    mounted() {
        const prefix = 'https://cn.bing.com';
        const arr = [];
        for(let i = 0; i < 5; i++) {
            this.$http.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx='+i+'&n=1&nc=1618544959745&pid=hp')
            .then(res => {
                console.log(res.data.images[0].url);
                arr.push(`${prefix}${res.data.images[0].url}`);
                if(arr.length >= 5) {
                    console.log(this.imageList)
                    this.imageList = arr;
                }
            })
        }
    }
}
</script>

<style>

</style>