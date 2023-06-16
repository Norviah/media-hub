'use client';

import Link from 'next/link';

import { Logo } from '@/components/Logo';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';

import { routes } from '../routes';

export function SideBar(props: { authenticated: boolean }): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      {/* <nav className="relative z-10 flex flex-wrap items-center justify-between bg-background px-6 py-4 shadow-xl md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        {/* <nav className="relative z-10 flex flex-wrap items-center justify-between border-x border-dashed bg-background px-6 py-4 md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto"> */}
      <nav
        // className={cn(
        //   'relative z-10 flex hidden w-64 flex-wrap items-center justify-between border-x border-dashed bg-background px-4 py-4 md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto'
        // )}
        // className="relative z-10 flex hidden flex-wrap items-center justify-between border-x border-dashed bg-background px-4 py-4 transition-all md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto"
        className="relative z-10 flex hidden flex-wrap items-center justify-between border-x border-dashed bg-background px-4 py-4 transition-all md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto"
      >
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          {/* <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <HomeIcon className="text-primary" />
          </button> */}

          {/* Brand */}
          <Logo />

          {/* Collapse */}
          <div
            className={
              'absolute left-0 right-0 top-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none'
            }
          >
            {/* Navigation */}
            <div className="w-full">
              <div className="flex w-full flex-col items-center gap-2">
                {routes.map((route, index) => {
                  if (route.auth && !props.authenticated) {
                    return;
                  }

                  return (
                    <Link
                      href={route.path}
                      key={index}
                      className={cn(
                        'flex h-12 w-full items-center rounded px-3 transition-colors',
                        (
                          route.path === '/'
                            ? pathname === route.path
                            : pathname.startsWith(route.path)
                        )
                          ? 'bg-foreground-selected font-bold text-primary'
                          : 'hover:bg-foreground-accent'
                      )}
                    >
                      <route.icon className="h-5 w-5 stroke-current" />
                      <span className="ml-4 text-sm">{route.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
