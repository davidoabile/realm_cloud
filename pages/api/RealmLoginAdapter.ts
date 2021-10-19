
// https://docs.mongodb.com/realm/node/relationships
import * as Realm from 'realm';
import { REALM_API_KEY, REALM_APP_ID } from './constants';

//import { RecipeSchema } from '../shopper/models/recipe.model';
const app = new Realm.App({ id: REALM_APP_ID });


export class RealmLoginAdapter {
  public user: Realm.User<Realm.DefaultFunctionsFactory, any>;

  async handleLogin() {
    try {
      const credentials = Realm.Credentials.serverApiKey(REALM_API_KEY);
      await app.logIn(credentials);
      this.user = app.currentUser!
    } catch (err) {
      console.error("Failed to log in:", err)
    }
  }
}
