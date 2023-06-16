'use client';

import * as React from 'react';
import * as schemas from '@/schemas';

import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@prisma/client';

import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { toast } from '@/components/ui/Toast';
import { cn } from '@/utils/cn';

interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, 'id' | 'name'>;
}

type FormData = z.infer<typeof schemas.user.NameObject>;

export function UserNameForm({ user, className, ...props }: UserNameFormProps): JSX.Element {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schemas.user.NameObject),
    defaultValues: {
      name: user?.name || '',
    },
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setLoading(true);

    const response = await fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
      }),
    });

    setLoading(false);

    if (!response?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your name was not updated. Please try again.',
        variant: 'destructive',
      });
    }

    toast({
      title: 'Success',
      description: 'Your name has been updated.',
      variant: 'success',
    });

    router.refresh();
  }

  return (
    <form className={cn(className)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Your name</CardTitle>
          <CardDescription>
            Please enter your full name or a display name you are comfortable with.
          </CardDescription>
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
              error={errors?.name?.message}
              {...register('name')}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            loading={loading}
            disabled={errors?.name?.message !== undefined || watch('name') === user.name}
          >
            <span>Save</span>
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
