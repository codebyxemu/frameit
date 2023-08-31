import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = req.body;
    const id = 0; // implement login data here
    res.status(200).json({ id });
}