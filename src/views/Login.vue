<template>
  <div id="login">
    <h1>医疗管理系统</h1>
    <form>
      <div><h2>医生登录</h2></div>
      <div><input type="text" /></div>
      <div><input type="password" /></div>
      <div><a href="javascript:;">忘记密码</a></div>
      <div>
        <router-link to="/doctor" replace
          ><input type="button" value="登录"
        /></router-link>
      </div>
    </form>
  </div>
</template>
<style lang="less" scoped>
@color: #32c0e6;
#login {
  width: 100%;
  height: 100%;
  background: url(../assets/login_bg.jpg) center center no-repeat;
  background-size: 100% 100%;
  div {
    padding: 16px 0px;
    a {
      color: @color;
      font: 16px/20px "";
    }
  }
  h1 {
    color: white;
    width: 400px;
    height: 114px;
    background: url(../assets/sys_bg.png) center center no-repeat;
    background-size: 100% 100%;
    text-align: center;
    font: 30px/114px "";
    margin-left: 200px;
  }
  h2 {
    width: 120px;
    padding-bottom: 10px;
    border-bottom: 3px solid @color;
    font: 24px/40px "";
    color: @color;
  }
  input {
    width: 320px;
    height: 48px;
    border-radius: 24px;
    background: #ffffff;
    padding: 0px 50px;
    &:focus {
      box-shadow: 0px 1px 10px #000000;
    }
    &[type="button"] {
      background: linear-gradient(to left, @color, #16dcb8);
      color: #ffffff;
      cursor: pointer;
      &:focus {
        box-shadow: 0px 1px 10px #16dcb8;
      }
    }
  }
}
</style>