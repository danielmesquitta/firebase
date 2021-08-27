import { firestoreDb } from '~/providers';

class ListUsers {
  public async execute(): Promise<any> {
    const snapshot = await firestoreDb.collection('users').get();

    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return users;
  }
}

export default new ListUsers();
