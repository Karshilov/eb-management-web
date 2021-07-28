/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import moment from 'moment';

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
  id: string;
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

export interface VRDetailModel {
  id: string;
  title: string;
  photos: string[];
  house_type: string;
  area: number;
  create_time: number;
  last_modify: number;
  floor: number;
  total_floor: number;
  price: number;
  user: {
    username: string;
    nickname: string;
    avatar: string;
    email: string;
  }
  decoration: string;
  features: string[];
  neighbourhood: string;
  city: string;
  rent_type: string;
  equipments: number;
}

export interface TeamDetailModel {
  id: string;
  name: string;
  leader_id: string;
  create_time: number;
}

export const vrColumns = [
  {
    name: 'title',
    label: '房源标题',
    field: 'title',
    required: true,
    align: 'center',
    headerStyle: 'min-width: 250px',
  },
  {
    name: 'city',
    label: '房源城市',
    field: 'city',
    required: true,
    align: 'center',
  },
  {
    name: 'create_time',
    label: '申请时间',
    field: 'create_time',
    format: (val: number) => moment(val * 1000).format('YYYY-MM-DD'),
    required: true,
    align: 'center',
  },
  {
    name: 'area',
    label: '面积（㎡）',
    field: 'area',
    required: true,
    align: 'center',
  },
  {
    name: 'floor',
    label: '楼层信息',
    field: (row: VRDetailModel) => `${row.floor} / ${row.total_floor}`,
    required: true,
    align: 'center',
  },
  {
    name: 'owner',
    label: '房东/经纪人',
    field: (row: VRDetailModel) => row.user.username,
    required: true,
    align: 'center',
  },
  {
    name: 'action',
    label: '操作',
    field: (row: VRDetailModel) => row,
    require: true,
    align: 'center'
  }
]

export const teamColumns = [
  {
    name: 'name',
    label: '团队名称',
    field: 'name',
    require: true,
    align: 'center',
  },
  {
    name: 'leader_id',
    label: '团队创建人',
    field: 'leader_id',
    require: true,
    align: 'center',
  },
  {
    name: 'create_time',
    label: '上传时间',
    field: 'create_time',
    format: (val: number) => moment(val * 1000).format('YYYY-MM-DD'),
    required: true,
    align: 'center',
  },
  {
    name: 'action',
    label: '操作',
    field: (row: TeamDetailModel) => row,
    require: true,
    align: 'center'
  }
]

export const columns = [
  {
    name: 'title',
    label: '房源标题',
    field: 'title',
    required: true,
    align: 'center',
    headerStyle: 'min-width: 250px',
  },
  {
    name: 'city',
    label: '房源城市',
    field: 'city',
    required: true,
    align: 'center',
  },
  {
    name: 'price',
    label: '预期价格（元/月）',
    field: 'price',
    require: true,
    align: 'center',
  },
  {
    name: 'rent_type',
    label: '结算类型',
    field: 'rent_type',
    require: true,
    align: 'center',
  },
  {
    name: 'create_time',
    label: '上传时间',
    field: 'create_time',
    format: (val: number) => moment(val * 1000).format('YYYY-MM-DD'),
    required: true,
    align: 'center',
  },
  {
    name: 'area',
    label: '面积（㎡）',
    field: 'area',
    required: true,
    align: 'center',
  },
  {
    name: 'floor',
    label: '楼层信息',
    field: (row: RentDetailModel) => `${row.floor} / ${row.total_floor}`,
    required: true,
    align: 'center',
  },
  {
    name: 'owner',
    label: '房东/经纪人',
    field: (row: RentDetailModel) => row.owner.username,
    required: true,
    align: 'center',
  },
  {
    name: 'action',
    label: '操作',
    field: (row: RentDetailModel) => row,
    require: true,
    align: 'center'
  }
];
