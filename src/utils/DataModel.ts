export interface UserInfoModel {
  username: string;
  email: string;
  avatar: string;
  userid: string;
  token: string;
  nickname: string;
  role: string;
}
export interface RentDetailModel {
  title: string;
  photos: string[];
  house_type: string;
  area: number;
  create_time: number;
  last_modify: number;
  floor: number;
  total_floor: number;
  price: number;
  owner: {
    username: string;
    nickname: string;
    avatar: string;
  }
  decoration: string;
  features: string[];
  neighbourhood: string;
  city: string;
  rent_type: string;
  equipments: number;
}
