export interface UserModel {
  id: number;
  name: string;
  role: string;
}
export const roleList = [
  'superadmin',
  'assistant',
  'vendor',
  'customer'
]
export const originSource = [
  {
    id: 1,
    name: 'Ram',
    role: roleList[0]
  },
  {
    id: 2,
    name: 'Hari',
    role: roleList[2]
  },
  {
    id: 3,
    name: 'Sita',
    role: roleList[1]
  },
  {
    id: 4,
    name: 'Gita',
    role: roleList[3]
  },

];



