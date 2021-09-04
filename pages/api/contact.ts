import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { email, message, toEmail } = req.body;
  const msg = {
    to: toEmail,
    from: email,
    text: message,
  };
  res.json(msg);
};
