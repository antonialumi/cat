// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
        const response = await fetch('https://catfact.ninja/fact?max_length=140');
        if (!response.ok) {
          res.status(500).json({seCagoTodo:"pero mal"})
        }else{
        const data = await response.json();
        res.status(200).json(data)
        }
}
