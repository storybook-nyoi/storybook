import React from "react";

export default function LoadingText() {
  return (
    <div role="status" class="max-w-m animate-pulse">
        <div class="h-2 bg-gray-50 rounded-full dark:bg-gray-200 w-48 mb-4"></div>
        <div class="h-2 bg-gray-50 rounded-full dark:bg-gray-200 w-5/6 mb-2.5"></div>
        <div class="h-2 bg-gray-50 rounded-full dark:bg-gray-200 mb-2.5"></div>
        <div class="h-2 bg-gray-50 rounded-full dark:bg-gray-200 w-5/6 mb-2.5"></div>
        <div class="h-2 bg-gray-50 rounded-full dark:bg-gray-200 w-5/6 mb-2.5"></div>
        <div class="h-2 bg-gray-50 rounded-full dark:bg-gray-200 w-5/6"></div>
        <span class="sr-only">Loading...</span>
    </div>
  );
}