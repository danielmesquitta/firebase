import { auth } from '~/providers';

class Authenticate {
  public async execute({ email, password, type }): Promise<any> {
    const user = await auth.createUser({
      email: 'user@example.com',
      phoneNumber: '+11234567890',
      password: 'secretPassword',
      displayName: 'John Doe',
    });

    await auth.generateEmailVerificationLink(email);

    console.log(JSON.stringify(user));

    return user;
  }
}

export default new Authenticate();
