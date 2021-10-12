export interface IUpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  oldPassword?: string;
  user_id: string;
}
