import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const {newsId } = req.query;

    if (typeof newsId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!newsId) {
      throw new Error('Missing Id');
    }

    const blog = await prismadb.blog.findUnique({
      where: {
        id: newsId
      }
    });

    return res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
