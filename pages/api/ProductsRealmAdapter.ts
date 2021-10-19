
// https://docs.mongodb.com/realm/node/relationships
import * as Realm from 'realm';


export const ProductsRealmAdapter = async (user: Realm.User<Realm.DefaultFunctionsFactory, any>) => {
  try {
    //@ts-ignore
    return await Realm.open({

      sync: {
        user: user!,
        partitionValue: "products",
        // existingRealmFileBehavior: {
        //   type: Realm.OpenRealmBehaviorType.OpenImmediately,
        // },
        error: (_session, error) => {
          (error) => {
            console.log(error.name, error.message);
          };
        },
      },

    });

  } catch (err) {
    console.error("Failed to log in:", err)
  }
}

