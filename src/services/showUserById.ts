import { NotFound } from '~/errors';
import { firestoreDb } from '~/providers';

interface Request {
  userId: string;
}

class ShowUserById {
  public async execute({ userId }: Request): Promise<any> {
    const user = await firestoreDb.collection('users').doc(userId).get();

    if (!user.exists) {
      throw new NotFound('Usuário não encontrado');
    }

    return { id: userId, ...user.data() };
  }
}

export default new ShowUserById();
