import Link from "next/link";
import React from "react";
import { ClatteryImage } from "../ClatteryImage/ClatteryImage";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
          <ClatteryImage
            className="object-contain"
            src={value}
            alt="Blog Post Image"
          />
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-5 list-dic">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
          <h1 className="text-xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-lg font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-md font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-sm font-bold">{children}</h4>
    ),
    p: ({children}: any) => (
        <p className="text-gray-500 mt-5 text-justify">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
