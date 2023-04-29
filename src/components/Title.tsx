import Head from 'next/head';

export function Title(props: { title: string }): JSX.Element {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}
