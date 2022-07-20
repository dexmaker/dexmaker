import Link from "next/link";
import React, { FC } from "react";
import { TextLink } from "./TextLink";

interface PageNavigationProps {
  backHref?: string;
}

export const PageNavigation: FC<PageNavigationProps> = ({ backHref }) => {
  return (
    <nav className="p-1">
      {backHref && (
        <TextLink>
          <Link href={backHref}>
            <a>Back</a>
          </Link>
        </TextLink>
      )}
    </nav>
  );
};
