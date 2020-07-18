<template>
  <div class="search">
    <div class="city-picker">
      <van-field
        readonly
        clickable
        label="城市"
        :value="value"
        placeholder="选择城市"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
    <van-search v-model="keywords" placeholder="请输入搜索关键词" @search='send'/>
    <p> {{search}} </p>
  </div>
</template>


<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      keywords:'',
      value: "",
      showPicker: false,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      search:'',
    };
  },
  methods: {
      
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    send() {
        this.$store.dispatch('getSearch',{
          value:this.value,
          keywords:this.keywords
        }).then((res) =>{this.search = res.data.msg})

    }
  }
};
</script>

<style lang="scss" scoped>
  p{
    font-size:0.1678rem;
    color:#888;
    text-align:center;
    margin:0.5rem;
  }
</style>