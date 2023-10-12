import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const { moviesGenre } = req.query;

    if (typeof moviesGenre !== 'string') {
      throw new Error('Invalid Genre ');
    }

    if (!moviesGenre) {
      throw new Error('Missing Genre ');
    }

    const moviesL = await prismadb.course.findMany({
      where: {
        genre: moviesGenre
      }
    });

    return res.status(200).json(moviesL);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
