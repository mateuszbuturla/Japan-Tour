export interface User {
  _id: string;
  pass: string;
  email: string;
  token: string | null;
}
