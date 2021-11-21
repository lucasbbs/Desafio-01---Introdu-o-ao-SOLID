import { v4 as uuidV4 } from "uuid";

class User {
  id?: String;
  name: String;
  email: String;
  created_at: Date;
  admin: Boolean;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
