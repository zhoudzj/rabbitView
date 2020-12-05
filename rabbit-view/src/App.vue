<template>
  <div>
    <rab-icon icon="edit"/>
    <rab-icon icon="sousuo"/>
    <rab-group-button>
    <rab-button>默认按钮</rab-button>
    <rab-button type="primary">默认按钮</rab-button>
    <rab-button type="info">默认按钮</rab-button>
    <rab-button type="success">默认按钮</rab-button>
    <rab-button type="warning">默认按钮</rab-button>
    <rab-button type="danger">默认按钮</rab-button>
    <rab-button icon="sousuo" icon-position="left" type="primary">搜索</rab-button>
    <rab-button icon="sousuo" icon-position="right" type="primary">搜索</rab-button>
    <rab-button icon="sousuo" loading>加载中</rab-button>
    <rab-button type="success" @click="fn">加载中</rab-button>
    </rab-group-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    fn(e){
      console.log(e);
    }
  }
}
</script>

<style lang="scss">
</style>
