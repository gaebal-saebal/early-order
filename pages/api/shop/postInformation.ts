import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getLists(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let db = (await connectDB).db('shop');
    let post = await db.collection('information').insertOne(req.body);
    res.status(200).json('작성 완료');
  } else {
    res.status(400).json('bad request');
  }
}
