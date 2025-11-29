import React from 'react';
import CodeBlock from './CodeBlock';

export const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={`text-4xl md:text-5xl font-bold mt-8 mb-4 text-[var(--foreground)] ${className || ''}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={`text-3xl md:text-4xl font-bold mt-6 mb-3 text-[var(--foreground)] ${className || ''}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={`text-2xl md:text-3xl font-bold mt-5 mb-2 text-[var(--foreground)] ${className || ''}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={`text-xl md:text-2xl font-bold mt-4 mb-2 text-[var(--foreground)] ${className || ''}`}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={`mb-4 text-[var(--foreground)]/90 leading-relaxed text-lg ${className || ''}`}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={`text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-bold ${className || ''}`}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={`list-disc list-inside mb-4 space-y-2 ml-4 ${className || ''}`}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={`list-decimal list-inside mb-4 space-y-2 ml-4 ${className || ''}`}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={`text-[var(--foreground)]/90 leading-relaxed ${className || ''}`}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={`border-l-4 border-[var(--color-retro-pink)] pl-4 italic my-4 text-[var(--foreground)]/80 bg-[var(--color-retro-yellow)] p-4 rounded-r-lg ${className || ''}`}
      {...props}
    />
  ),
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className?.includes('language-') && !className?.includes('hljs');
    
    if (isInline) {
      return (
        <code
          className={`bg-[var(--color-retro-sage)] border-2 border-[var(--color-border)] rounded px-2 py-1 text-sm font-mono text-[var(--foreground)] font-bold ${className || ''}`}
          {...props}
        >
          {children}
        </code>
      );
    }
    
    // For code blocks, return as-is (will be wrapped in pre)
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ className, children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // Extract language from code element
    const codeElement = React.Children.only(children) as React.ReactElement;
    const codeClassName = (codeElement?.props as React.HTMLAttributes<HTMLElement>)?.className || '';
    const languageMatch = codeClassName.match(/language-(\w+)/);
    const language = languageMatch ? languageMatch[1] : undefined;
    
    // Extract text content from code element
    const codeContent = (codeElement?.props as React.PropsWithChildren<React.ReactElement>)?.children || children;
    
    return (
      <CodeBlock language={language} className={className}>
        {codeContent}
      </CodeBlock>
    );
  },
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={`my-8 border-t-2 border-dashed border-[var(--color-border)] ${className || ''}`}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={`font-bold text-[var(--foreground)] ${className || ''}`}
      {...props}
    />
  ),
  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em
      className={`italic ${className || ''}`}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-4">
      <table
        className={`min-w-full border-2 border-[var(--color-border)] ${className || ''}`}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      className={`bg-[var(--color-retro-blue)] ${className || ''}`}
      {...props}
    />
  ),
  tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody
      className={`bg-white dark:bg-gray-900 ${className || ''}`}
      {...props}
    />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={`border-b-2 border-[var(--color-border)] ${className || ''}`}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={`px-4 py-2 text-left font-bold border-r-2 border-[var(--color-border)] text-[var(--foreground)] ${className || ''}`}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={`px-4 py-2 border-r-2 border-[var(--color-border)] text-[var(--foreground)]/90 ${className || ''}`}
      {...props}
    />
  ),
};
