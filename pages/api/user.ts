import type { NextApiRequest, NextApiResponse } from 'next'
import { ProductsRealmAdapter } from './ProductsRealmAdapter';
import { RealmLoginAdapter } from './RealmLoginAdapter'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const userInfo = new RealmLoginAdapter();
    await userInfo.handleLogin();
    const adapter = await ProductsRealmAdapter(userInfo.user);

    const stores = adapter.objects('store').toJSON()
    res.status(200).json(stores)
}