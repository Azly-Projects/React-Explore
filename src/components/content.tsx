import React from 'react';

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-auto items-center justify-center">{children}</div>
  );
}
