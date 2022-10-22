import { Role } from 'src/enums/role.enum';

export class IUser {
  id: number;
  name: string;
  role: Role;
  created_by?: number;
}
