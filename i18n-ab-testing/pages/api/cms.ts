// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('request:', req.query);
  const { device = 'desktop' } = req.query;
  const content = device === 'desktop'
    ? 'this is desktop content'
    : 'this is mobile content';
  res.status(200).json({ content });
}
