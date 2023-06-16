import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';

import { authOptions } from '@/utils/auth/options';
import { prisma } from '@/utils/prisma';

import * as schemas from '@/schemas';

const routeContextSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
});

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
): Promise<Response> {
  try {
    // Validate the route context.
    const { params } = routeContextSchema.parse(context);

    // Ensure user is authentication and has access to this user.
    const session = await getServerSession(authOptions);

    if (!session?.user || params.userId !== session?.user.id) {
      return new Response(null, { status: 403 });
    }

    // Get the request body and validate it.
    const body = await req.json();
    const payload = schemas.user.NameObject.parse(body);

    // Update the user.
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name: payload.name,
      },
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

export async function GET(
  req: Request,
  context: z.infer<typeof routeContextSchema>
): Promise<Response> {
  try {
    // Validate the route context.
    const { params } = routeContextSchema.parse(context);

    // Ensure user is authentication and has access to this user.
    const session = await getServerSession(authOptions);

    if (!session?.user || params.userId !== session?.user.id) {
      return new Response(null, { status: StatusCodes.FORBIDDEN });
    }

    // Get the user.
    const user = await prisma.user.findUnique({
      where: {
        id: params.userId,
      },
    });

    if (!user) {
      return new Response(null, { status: StatusCodes.NOT_FOUND });
    }

    // Return the user.
    return new Response(JSON.stringify(user), { status: StatusCodes.OK });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), {
        status: StatusCodes.UNPROCESSABLE_ENTITY,
      });
    }

    return new Response(null, { status: StatusCodes.INTERNAL_SERVER_ERROR });
  }
}
