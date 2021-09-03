<template>
  <div class="card">
    <ul class="crumbsnav">
      <li><router-link to="/doctor/electronic/case">电子病历</router-link></li>
      <li>
        <router-link to="/doctor/electronic/addcase">添加病历</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>