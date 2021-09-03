<template>
  <div id="home">
    <div id="header">
      <h1>YOU LOGO</h1>
      <div>
        <router-link to="/login" replace>
          <i class="el-icon-user-solid"></i> / 管理员登录
        </router-link>
      </div>
      <form>
        <input type="text" :value="value" :placeholder="placeholder" />
        <input type="button" value="搜索" />
      </form>
    </div>
    <div id="nav">
      <ul>
        <li v-for="(navitem, index) in nav" :key="index" v-text="navitem"></li>
      </ul>
    </div>
    <div id="banner">
      <div>
        <img src="@/assets/banner.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "",
      placeholder: "请输入疾病名/科室名/医生名",
      nav: ["首页", "预约挂号", "在线问诊", "个人中心", "健康咨询", "疾病专题"],
    };
  },
};
</script>
<style lang="less" scoped>
@color: skyblue;
#home {
  width: 100%;
}
#header {
  width: 1200px;
  height: 40px;
  padding: 25px 0px;
  margin: auto;
  h1 {
    float: left;
    color: @color;
    font: bolder 30px/40px "";
  }
  div {
    float: right;
    font: 14px/40px "";
    color: #aaaaaa;
    cursor: pointer;
  }
  form {
    width: 360px;
    height: 38px;
    margin: auto;
    border: 1px solid @color;
    input {
      font: 14px/38px "";
      height: 38px;
      &[type="text"] {
        width: 300px;
        padding-left: 20px;
      }
      &[type="button"] {
        width: 60px;
        background: @color;
      }
    }
  }
}
#nav {
  border-top: 1px solid #cccccc;
  height: 60px;
  color: #aaaaaa;
  font: 14px/60px "";
  ul {
    width: 1200px;
    margin: auto;
    li {
      float: left;
      padding: 0px 10px;
      &:hover {
        background: skyblue;
        color: white;
        cursor: pointer;
      }
    }
  }
}
#banner img {
  width: 100%;
  height: 500px;
}
</style>
