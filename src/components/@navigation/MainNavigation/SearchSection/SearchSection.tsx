import { Input } from 'components/@common/Input';
import React from 'react';

const SearchSection = () => (
  <div className="basis-[300px]">
    <Input
      type="text"
      placeholder="Search tasks"
      endIcon={(
        <kbd className="pointer-events-none absolute inset-y-2 right-2 rtl:left-2 rtl:right-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>
          K
        </kbd>
          )}
    />
  </div>
);

export default SearchSection;
