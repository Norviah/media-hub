import { parse } from '@/util/parse';
import { prisma } from '@/util/prisma';
import { hashSync } from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

import type { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

interface RequestBody {
  /**
   * The user's email.
   */
  email: string;

  /**
   * The user's password.
   */
  password: string;

  /**
   * The user's name.
   */
  name: string;
}

/**
 * The `/user/signup` endpoint.
 *
 * This endpoint is responsible for creating a new user within the database. The
 * endpoint attempts to do so, ensuring that the user does not already exist.
 * @openapi
 * /user/signup:
 *   post:
 *     summary: New user
 *     description: Create a new user within the database.
 *     tags:
 *       - user
 *     requestBody:
 *       description: The user to create.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *               name:
 *                 type: string
 *                 description: The user's username.
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
  if (req.method !== 'POST') {
    return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ message: 'Method not allowed.' });
  }

  const data: RequestBody | void = parse<RequestBody>(req, res, {
    email: 'string',
    password: 'string',
    name: 'string',
  });

  // If the request body was invalid, the `parse` function will return `void`,
  // thus, we can end the function here.
  if (!data) {
    return;
  }

  // The `user/signup` endpoint, this endpoint implements the logic for
  // creating a new user within the database, referencing information from the
  // request body.

  // First, we'll need to ensure that the user does not already exist within
  // the database. The `User` model has a unique contstraint on the `email`
  // field, meaning that we can use this property to find a user within the
  // database.
  const exists: User | null = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  // Prisma will return `null` if an entry does not exist within the database,
  // meaning if `null` was not returned, the user already exists within the
  // database. We'll return a `409` status code to indicate that the user
  // already exists.
  if (exists) {
    return res.status(StatusCodes.CONFLICT).json({ message: 'The specified user already exists.' });
  }

  await prisma.user.create({
    data: {
      email: data.email,
      password: hashSync(data.password, 10),
      name: data.name,
    },
  });

  // Once the user has been created, we'll return a `200` status code to
  // indicate that the user was created successfully. We don't need to catch any
  // exceptions here, as we have a global error handler that will catch any
  // errors that occur within the application.
  return res.status(StatusCodes.CREATED).json({ message: 'The specified user was created.' });
}
