class User {
  id: number | undefined;
  name: string | undefined;
  age: number | undefined;
  createdAt: Date | undefined;

  constructor() {
    if(!this.id) {
      this.id = Math.random() * 1000000;
      this.createdAt = new Date();
    }
  }
}

export { User };