// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type TarotThrownCard = {
  number:number,
  name: string,
  image:string,
  description:string,
  isUpright:boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TarotThrownCard>
) {
  res.status(200).json({
    name:'El Loco',
    number:0,
    image:'/media/cat.png',
    description:'es un loco lolololo',
    isUpright:Math.random() > 0.5
  })
}
