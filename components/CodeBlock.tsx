'use client';
import { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

interface CodeProps {
  children: string;
  className?: string; // e.g., "language-tsx"
  ['data-language']?: string
}

export default function CopyBlock(props: CodeProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(props.children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return props['data-language'] ? (
    <div className="relative group">
      <code>{props.children}</code>
      <button
        onClick={handleCopy}
        className="hidden group-hover:flex absolute top-0 right-0 px-2 py-1 text-xs bg-gray-800 text-white rounded hover:bg-gray-700 items-center gap-1">
        {copied ?
          <CheckIcon className="w-4 h-4" /> :
          <ClipboardIcon className="w-4 h-4" />
        }
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  ) :
  <code className="rounded bg-gray-100 px-1 py-[0.15rem]">
    {props.children}
  </code>;
}
