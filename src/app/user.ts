export class User {
  name!: string;
  followers!: number;
  following!: number;



  constructor(public login: string, public avatar_url: string, public url: string, public created_at: string, public bio: string){

  }
}

