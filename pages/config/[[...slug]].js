import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Head from 'next/head'

import { CircleX, FolderIcon, FileIcon, Route, Undo2 } from 'lucide-react'

export default function ConfigDirectory({ items, currentPath, error }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{`Directory: /${currentPath} – Microbolt`}</title>
      </Head>
      <h1 className={`text-3xl font-bold mb-4 ${error ? 'text-red-500' : ''} flex items-center`}>
        {error ? <CircleX className="mr-2" /> : <Route className="mr-2" />}Directory: /{currentPath} {error && 'does not exist'}
      </h1>
      <ul className="space-y-2">
        {currentPath !== 'config' && (
          <li className="bg-white shadow rounded p-3">
            <Link href={error ? `/config` : `/${currentPath.split('/').slice(0, -1).join('/')}`}>
              <div className="flex items-center space-x-2">
                <Undo2 className="w-5 h-5 text-slate-500" />
                <span className="text-blue-600 hover:underline">..</span>
              </div>
            </Link>
          </li>
        )}
        {items.map((item, index) => (
          <li key={index} className="bg-white shadow rounded p-3">
            <Link href={`/${item.path}`} target={!item.isDirectory ? "_blank" : "_self"} rel={!item.isDirectory ? "noopener noreferrer" : ""}>
              <div className="flex items-center space-x-2">
                {item.isDirectory
                  ? <FolderIcon className="w-5 h-5 text-yellow-500" />
                  : <FileIcon className="w-5 h-5 text-blue-500" />
                }
                <span className="text-blue-600 hover:underline">
                  {item.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const segments = Array.isArray(params.slug) ? params.slug : [];
  const currentPath = path.join('config', ...segments);
  const directory = path.join(process.cwd(), 'public', currentPath);

  if (!fs.existsSync(directory)) {
    return {
      props: {
        items: [],
        currentPath,
        error: true,
      },
    };
  }

  const items = fs.readdirSync(directory, { withFileTypes: true })
    .map(item => ({
      name: item.name,
      path: path.join(currentPath, item.name),
      isDirectory: item.isDirectory(),
    }));

  return {
    props: {
      items,
      currentPath,
      error: null,
    },
  };
}