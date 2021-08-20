import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message, toEmail } = req.body;
  const msg = {
    to: toEmail,
    from: email,
    text: message,
  };
  res.json(msg);
};
