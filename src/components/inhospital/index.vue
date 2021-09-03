<template>
  <div class="card">
    <ul class="crumbsnav">
      <li>
        <router-link to="/doctor/inhospital/inhospital">住院管理</router-link>
      </li>
      <li>
        <router-link to="/doctor/inhospital/addpatient">添加病人</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>