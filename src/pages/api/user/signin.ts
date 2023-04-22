import { parse } from '@/util/parse';
import { prisma } from '@/util/prisma';
import { compare } from 'bcryptjs';
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
}

/**
 * The `/user/signin` endpoint.
 *
 * This endpoint is responsible for authenticating a user for next-auth,
 * returning the user's respective entry within the database.
 * @openapi
 * /user/signin:
 *   post:
 *     summary: Sign in
 *     description: Retrieve a user's basic information within the database.
 *     tags:
 *       - user
 *     requestBody:
 *       description: Information of the desired user to authenticate.
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
 *     responses:
 *       200:
 *         description: The specified user was authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The user's username.
 *                 email:
 *                   type: string
 *                   description: The user's email.
 *                 user:
 *                   oneOf:
 *                     - string
 *                     - null
 *       400:
 *         description: Invalid request body.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvalidBodyModel'
 *       401:
 *         description: Invalid credentials were provided.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageModel'
 *       405:
 *         description: An invalid HTTP method was used.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageModel'
 *       409:
 *         description: The user attempted to authenticate using a different
 *                      method that was originally used to create the account.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageModel'
 *       500:
 *         description: An internal error has occurred.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ message: 'Method not allowed.' });
  }

  const data: RequestBody | void = parse<RequestBody>(req, res, {
    email: 'string',
    password: 'string',
  });

  // If the request body was invalid, the `parse` function will return `void`,
  // thus, we can end the function here.
  if (!data) {
    return;
  }

  // First, we'll need to ensure that the user exists within the database. As
  // the `User` model has a unique constraint on the `email` field, we can use
  // this property to find the desired user.
  const user: User | null = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  // If the user does not exist within the database, we'll return a generic
  // `Unauthorized` status code to indicate that the desired user does not exist
  // within the database.
  if (!user) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'The specified user does not exist.' });
  } else if (!user.password) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ message: 'The specified account was not created through credentials.' });
  }

  // Now that we have a reference to the user, we can compare the provided
  // password with the password stored within the database. `bcrypt` was
  // implemented to hash the password during creation, so we'll use it to
  // compare the provided password against the stored password.
  const authorized: boolean = await compare(data.password, user.password);

  if (!authorized) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials.' });
  }

  // If the user was authorized, we can then generate an access and refresh
  // token for the user. The `Auth` class is responsible for generating these
  // tokens.
  return res.status(StatusCodes.OK).json({ name: user.name, email: user.email, image: user.image });
}
