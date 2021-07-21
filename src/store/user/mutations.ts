import { UserInfoModel } from 'src/utils/DataModel';
import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
  login(state, payload: { user: UserInfoModel, token: string }) {
    state.user = payload.user;
    state.isLogin = true;
    state.apiToken = payload.token;
  },
  logout(state) {
    state.apiToken = undefined;
    state.user = undefined;
    state.isLogin = false;
  }
};

export default mutation;
