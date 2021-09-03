<template>
  <div id="doctor">
    <div id="sidenav">
      <h1><img src="../assets/logo.png" alt="" /></h1>
      <ul>
        <li v-for="item in nav" :key="item.name">
          <router-link :to="item.path" v-text="item.item"></router-link>
        </li>
      </ul>
      <div class="user">张医生</div>
    </div>
    <div id="wrapper">
      <router-view></router-view>
      <div class="footer">
        <i class="el-icon-setting"></i>
        <i class="el-icon-bell"></i>
        <i class="el-icon-moon"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          name: "patient",
          item: "我的病人",
          path: "/doctor/patient",
        },
        {
          name: "electronic",
          item: "电子病历",
          path: "/doctor/electronic",
        },
        {
          name: "inhospital",
          item: "住院管理",
          path: "/doctor/inhospital",
        },
        {
          name: "report",
          item: "报告查询",
          path: "/doctor/report",
        },
        {
          name: "outhospital",
          item: "出院管理",
          path: "/doctor/outhospital",
        },
        {
          name: "recipe",
          item: "处方管理",
          path: "/doctor/recipe",
        },
        {
          name: "consult",
          item: "就诊咨询",
          path: "/doctor/consult",
        },
        {
          name: "self",
          item: "个人信息",
          path: "/doctor/self",
        },
      ],
    };
  },
};
</script>
<style lang="less">
@color: #16dcb8;
#doctor {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../assets/doctor_bg.jpg") center center no-repeat;
  background-size: 100% 100%;
}
#sidenav {
  position: absolute;
  width: 18%;
  height: 100%;
  left: 0px;
  background: hsla(0, 0%, 100%, 0.8);
  h1 {
    padding: 20px 30px;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
  ul {
    li {
      width: 100%;
      text-align: center;
      padding: 15px 0px;
      a {
        &:hover {
          color: @color;
          transition: 0.3s;
        }
        &.router-link-active {
          color: @color;
        }
      }
    }
  }
  .user {
    position: absolute;
    width: 100%;
    padding: 20px 0;
    height: 20px;
    text-align: center;
    bottom: 0px;
    background: hsla(0, 0%, 100%, 0.8);
    font-weight: bold;
  }
}
#wrapper {
  position: absolute;
  width: 82%;
  height: 100%;
  right: 0px;
  .card {
    position: absolute;
    top: 0px;
    bottom: 60px;
    width: 90%;
    margin: 3% 5% 1%;
    .crumbsnav {
      padding-left: 50px;
      overflow: hidden;
      li {
        float: left;
        width: 150px;
        height: 42px;
        border-radius: 40px 2px;
        overflow: hidden;
        text-align: center;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          font: 16px/42px "";
          background: #ffffff;
          color: #aaaaaa;
          transition: 0.3s;
          &.router-link-active {
            background: linear-gradient(to left, #32c0e6, #16dcb8);
            color: #ffffff;
          }
        }
      }
    }
    .content {
      position: absolute;
      left: 0px;
      right: 0px;
      top: 44px;
      bottom: 0px;
      padding: 2%;
      background: hsla(0, 0%, 100%, 0.9);
      box-shadow: -6px 4px 20px 0px #d3d3d3;
    }
  }
  .footer {
    position: absolute;
    bottom: 0px;
    width: 90%;
    height: 20px;
    padding: 20px 5%;
    background: hsla(0, 0%, 100%, 0.8);
    i {
      float: right;
      margin-left: 20px;
      cursor: pointer;
      font: 14px/20px "";
    }
  }
}
</style>
