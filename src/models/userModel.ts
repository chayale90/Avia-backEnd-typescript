export type UserProps = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  plan: string;
};

export class User {
  private firstname: string;
  private lastname: string;
  private phone: string;
  private email: string;
  private plan: string;

  constructor(userProps: UserProps) {
    this.firstname = userProps.firstname;
    this.lastname = userProps.lastname;
    this.phone = userProps.phone;
    this.email = userProps.email;
    this.plan = userProps.plan;
  }

  public getEmail(): string {
    return this.email;
  }
}

exports.User;
