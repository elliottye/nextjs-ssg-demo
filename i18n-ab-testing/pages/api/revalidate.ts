import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { target = [] } = req.query;

  console.log('revalidating homepage...');

  // Just a demo
  const targetPaths = target === 'hp'
    ?
      [
        '/en-US/desktop',
        '/en-US/mobile',
        '/zh-CN/desktop',
        '/zh-CN/mobile',
      ]
    : [];

  await Promise.all(targetPaths.map((path) => res.revalidate(path)));
  return res.json({ revalidated: true });
}
