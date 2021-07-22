<template>
  <q-layout view="hHh lpR lFf">
    <q-header
      class="bg-white text-black shadow-1"
      style="height: 50px; display: flex; align-items: center"
    >
      <q-avatar size="32px" style="margin-left: 20px">
        <img src="../assets/primary-icon.png" />
      </q-avatar>
      <span
        style="
          color: #00896c;
          font-size: 1.1rem;
          letter-spacing: 1px;
          font-weight: 500;
        "
        >檐椽网</span
      >
      <div style="flex-grow: 1"></div>
      <q-avatar size="32px" style="margin-right: 10px">
        <q-icon
          v-if="!isLogin"
          :name="matAccountCircle"
          style="font-size: 32px"
        />
        <img :src="avatar" style="width: 32px" />
      </q-avatar>
      <q-btn
        icon="logout"
        flat
        round
        dense
        style="color: #00896c; margin-right: 20px"
        @click="onLogout"
      />
    </q-header>

    <q-dialog v-model="visible" persistent>
      <q-card style="width: 40vw; padding: 20px">
        <q-card-section
          class="cloumn"
          style="display: flex; justify-content: center"
        >
          <q-icon :name="matAccountCircle" style="font-size: 8vw" />
        </q-card-section>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="username"
            label="用户名"
            hint="请不要填邮箱"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || '用户名不得为空',
              (val) => val.search(/\s+/) === -1 || '用户名含非法字符',
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="密码"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || '密码不得为空',
              (val) => val.search(/\s+/) === -1 || '密码含非法字符',
            ]"
          />
          <div>
            <q-inner-loading :showing="loading">
              <q-spinner-dots size="50px" color="primary" />
            </q-inner-loading>
            <q-btn
              label="确定"
              type="submit"
              color="primary"
              :v-close-popup="visible"
              :disable="loading"
            />
            <q-btn
              label="重置"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card>
    </q-dialog>

    <q-drawer show-if-above side="left" :width="200" :breakpoint="700">
      <div class="left-side">
        <div
          v-for="item in options"
          class="parallel-container item"
          :key="item.key"
          @click="onClick(item.key)"
          :style="
            judgeCurrent(item.key)
              ? 'background: linear-gradient(to right, #6EE7B7, #6EE7B7 4px, #6B7280 4px, #6B7280);'
              : ''
          "
        >
          <q-icon :name="item.icon" style="color: #9ca3af" class="icon" />
          <span style="color: #fff; font-size: 1.2rem; font-weight: 550">{{
            item.name
          }}</span>
        </div>
      </div>
    </q-drawer>
    <q-page-container :hidden="!isLogin">
      <router-view />
    </q-page-container>
    <q-footer
      :style="`background: ${
        (current === 'dash-board' || current === '') ? 'transparent' : '#fff'
      };color: #9ca3af;text-align: center;padding-top: 5px;padding-bottom: 5px;`"
      >Copyright © 2021 All Rights Reserved | Karshilov</q-footer
    >
  </q-layout>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent } from 'vue';
import options from '../utils/options';
import { matAccountCircle } from '@quasar/extras/material-icons';
import { api } from 'boot/axios';
import { UserInfoModel } from 'src/utils/DataModel';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      options,
      current: '',
      visible: false,
      matAccountCircle: '',
      username: '',
      password: '',
      avatar: '',
      loading: false,
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.userModule.isLogin;
    },
  },
  created: async function () {
    this.current = this.$route.path;
    this.matAccountCircle = matAccountCircle;
    this.avatar = this.$store.state.userModule.user?.avatar ?? '';
    console.log(this.current, this.current.split('/').reverse()[0]);
    if (!this.isLogin) {
      this.visible = true;
    }
    if (this.$store.state.userModule.isLogin) {
      api.defaults.headers = { 'x-api-token': this.$store.state.userModule.user?.token };
      const res = await api.get('/test');
      if (res.status !== 200 || !res.data.success) {
        this.$store.commit('userModule/logout');
        this.visible = true;
      }
    }
  },
  methods: {
    async onClick(value: string) {
      if (!this.isLogin) return;
      await this.$router.push({ path: `/${value}` });
      this.current = value;
    },
    judgeCurrent(value: string) {
      if (this.current.split('/').reverse()[0] === value) return true;
      if (this.current === '/' && value === 'audit-resources') return true;
      return false;
    },
    async onSubmit() {
      this.loading = true;
      const res = await api.post('/auth', {
        username: this.username,
        password: this.password,
      });
      const success = res.data.success as boolean;
      const reason = res.data.reason as string;
      const result = res.data.result as UserInfoModel;
      if (success) {
        api.defaults.headers = { 'x-api-token': result.token };
        const avt = await api.get('/minio', {
          params: { type: 'avatar', name: result.avatar },
        });
        if (avt.data.success) {
          this.avatar = avt.data.result as string;
          result.avatar = avt.data.result as string;
        } else {
          this.$q.notify({
            type: 'negative',
            message: avt.data.reason as string,
          });
        }
        this.$store.commit('userModule/login', {
          user: result,
          token: result.token,
        });
        this.visible = false;
        this.$q.notify({
          type: 'positive',
          message: '登录成功～',
        });
        this.loading = false;
      } else {
        this.$q.notify({
          type: 'negative',
          message: reason,
        });
      }
    },
    onReset() {
      this.username = '';
      this.password = '';
    },
    onLogout() {
      console.log('here');
      this.$store.commit('userModule/logout');
      this.visible = true;
    },
  },
});
</script>
