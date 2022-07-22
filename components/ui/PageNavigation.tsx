import Link from "next/link";
import { FC } from "react";

interface PageNavigationProps {
  backHref?: string;
}

export const PageNavigation: FC<PageNavigationProps> = ({ backHref }) => {
  return (
    <nav className="p-1">
      {backHref && (
        <Link href={backHref}>
          <a className="link">Back</a>
        </Link>
      )}
    </nav>
  );
};
