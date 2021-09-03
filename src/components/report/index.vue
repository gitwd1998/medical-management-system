<template>
  <div class="card">
    <ul class="crumbsnav">
      <li><router-link to="/doctor/report/report">报告查询</router-link></li>
      <li><router-link to="/doctor/report/addreport">添加报告</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>