export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isActive?: boolean;
  balance?: number;
  registeredAt?: Date;
  hide?: boolean;
}
