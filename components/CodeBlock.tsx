'use client';

import React, { useState, useRef } from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  className?: string;
}

// Helper function to extract text content from React nodes
function extractTextContent(node: React.ReactNode): string {
  if (typeof node === 'string') {
    return node;
  }
  if (typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractTextContent).join('');
  }
  if (React.isValidElement(node)) {
    if ((node.props as React.PropsWithChildren<React.ReactElement>).children) {
      return extractTextContent((node.props as React.PropsWithChildren<React.ReactElement>).children);
    }
  }
  return '';
}

export default function CodeBlock({ children, language, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement | null>(null);

  const copyToClipboard = async () => {
    let text = '';
    
    // Try to get text from the code element if available
    if (codeRef.current) {
      text = codeRef.current.innerText || codeRef.current.textContent || '';
    } else {
      // Fallback to extracting from React children
      text = extractTextContent(children);
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group my-4">
      {language && (
        <div className="flex items-center justify-between bg-[var(--color-border)] text-[var(--background)] px-4 py-2 rounded-t-lg border-2 border-[var(--color-border)]">
          <span className="text-xs font-bold uppercase">{language}</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1 bg-[var(--background)] hover:bg-gray-100 text-[var(--foreground)] rounded border-2 border-[var(--background)] transition-colors cursor-pointer shadow-none hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]"
            title="Copy code"
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs font-bold">Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs font-bold">Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className={`relative ${!language ? 'group' : ''}`}>
        <pre
          className={`bg-[#faf9f6] dark:bg-[#1e1e1e] text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto border-2 border-[var(--color-border)] relative ${
            language ? 'rounded-t-none border-t-0' : ''
          } ${className}`}
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 1.5em, #e8e6e1 1.5em, #e8e6e1 1.51em)',
            backgroundSize: '100% 1.5em',
            backgroundPosition: '0 0.5em'
          }}
        >
          <code ref={codeRef} className="font-mono text-sm leading-relaxed block relative z-10">{children}</code>
        </pre>
        {!language && (
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 px-3 py-1 bg-[var(--background)] hover:bg-gray-100 rounded border-2 border-[var(--color-border)] text-[var(--foreground)] text-xs font-bold cursor-pointer shadow-[2px_2px_0px_0px_var(--shadow-color)]"
            title="Copy code"
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
