import { firestoreDb } from '~/providers';

class ListUsers {
  public async execute(data): Promise<any> {
    const snapshot = await firestoreDb.collection('users').add(data);

    return snapshot;
  }
}

export default new ListUsers();
