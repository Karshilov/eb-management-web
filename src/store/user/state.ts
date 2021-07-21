import { UserInfoModel } from 'src/utils/DataModel'
export interface UserStateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  apiToken?: string;
  isLogin: boolean;
  user?: UserInfoModel;
}

function state(): UserStateInterface {
  return {
    apiToken: undefined,
    isLogin: false,
    user: undefined
  }
};

export default state;
