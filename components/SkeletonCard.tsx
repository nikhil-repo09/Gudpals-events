'use client';

import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="rounded-3xl bg-gray-100 dark:bg-brand-card border border-gray-200/50 dark:border-white/5 overflow-hidden animate-pulse space-y-4">
      <div className="h-52 bg-gray-200 dark:bg-white/10 w-full" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-md w-3/4" />
        <div className="h-3 bg-gray-200 dark:bg-white/10 rounded-md w-1/2" />
        <div className="h-3 bg-gray-200 dark:bg-white/10 rounded-md w-full" />
        <div className="pt-3 border-t border-gray-200/40 dark:border-white/5 flex justify-between items-center">
          <div className="h-5 bg-gray-200 dark:bg-white/10 rounded-md w-20" />
          <div className="h-8 bg-gray-200 dark:bg-white/10 rounded-xl w-24" />
        </div>
      </div>
    </div>
  );
}
