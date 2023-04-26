import {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-zinc-100 text-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
