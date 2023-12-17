'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

import { updateName } from '@/actions/user';
import { toast } from '@/hooks/useToast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import * as schemas from '@/schemas';
import * as React from 'react';

import type { User } from '@prisma/client';

const NameObject = z.object({
  username: schemas.user.username,
});

type FormData = z.infer<typeof NameObject>;

export function UpdateNameForm({ user }: { user: Pick<User, 'id' | 'name'> }): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(NameObject),
    defaultValues: {
      username: user?.name ?? '',
    },
  });

  async function onSubmit(data: { username: string }) {
    setLoading(true);

    try {
      await updateName({ name: data.username, userId: user.id });

      toast({
        title: 'Success',
        description: 'Your name has been updated.',
      });

      router.refresh();
    } catch (e) {
      toast({
        title: 'Something went wrong.',
        description: 'Your name was not updated. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle>Your name</CardTitle>
          <CardDescription>Please enter your full name or a display name you are comfortable with.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              className="w-[400px]"
              size={32}
              error={errors?.username?.message}
              defaultValue={user?.name ?? ''}
              {...register('username')}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            loading={loading}
            disabled={errors?.username?.message !== undefined || watch('username') === user.name}
          >
            <span>Save</span>
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
