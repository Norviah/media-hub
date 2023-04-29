import { tmdb } from '@/structs/TMDB';
import { parse } from '@/util/parse';
import { StatusCodes } from 'http-status-codes';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { JsonObject } from 'type-fest';
import type { SearchResult } from '@/types/api/search/SearchResult';

interface RequestParams {
  query: string;
  page: string;
}

/**
 * The `/search/multi` endpoint.
 *
 * This endpoint will search TMDB for the specified query, returning the
 * results.
 * @openapi
 * /search/multi:
 *   get:
 *     summary: Search TMDB for the specified query.
 *     description: Call this endpoint to search TMDB for the specified query.
 *     tags:
 *       - search
 *     parameters:
 *       - name: query
 *     responses:
 *       201:
 *         description: The specified user was created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageModel'
 *       400:
 *         description: Invalid request body.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvalidBodyModel'
 *       405:
 *         description: An invalid HTTP method was used.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageModel'
 *       409:
 *         description: The specified user already exists.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageModel'
 *       500:
 *         description: An internal error has occurred, the specified user was
 *                      not created.
 * components:
 *   schemas:
 *     MessageModel:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: A message regarding the result of the request.
 *     InvalidBodyModel:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: A message regarding the result of the request.
 *         field:
 *           type: string
 *           description: The field that was invalid.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'GET') {
    return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ message: 'Method not allowed.' });
  }

  const data: RequestParams | void = parse<RequestParams>({
    req,
    res,
    structure: { query: 'string', page: 'string' },
    json: req.query as JsonObject,
  });

  // If the request body was invalid, the `parse` function will return `void`,
  // thus, we can end the function here.
  if (!data) {
    return;
  }

  // const result = await tmdb.search.movies({ query: data.query });
  const result: SearchResult = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${data.query}&page=${data.page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        ContentType: 'application/json;charset=utf-8',
      },
    }
  ).then((res) => res.json());

  return res.status(StatusCodes.OK).json({ ...result });
}
