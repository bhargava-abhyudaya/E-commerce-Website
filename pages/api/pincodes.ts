import type { NextApiRequest, NextApiResponse } from "next";

type Data = number[]; // Change the type to number[]
const pincodes = [122002,122001,110001,110055,110003,400001,400005,560063,560030,560007];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.status(200).json(pincodes);
}