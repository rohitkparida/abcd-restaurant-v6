import { useNavigate } from "react-router";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onLabel?: (label: string, e: MouseEvent<HTMLDivElement>) => boolean | void;
};

const ROUTES: Record<string, string> = {
  Home: "/",
  Menu: "/menu",
  "Our Story": "/story",
  Gallery: "/gallery",
  Reserve: "/reserve",
  Contact: "/contact",
  "Book a Table": "/reserve",
  "Back to Menu": "/menu",
};

function findLabel(el: HTMLElement | null, root: HTMLElement): string | null {
  let node: HTMLElement | null = el;
  while (node && node !== root) {
    const txt = (node.textContent || "").trim();
    if (txt && txt.length < 40 && !txt.includes("\n")) {
      if (ROUTES[txt]) return txt;
    }
    node = node.parentElement;
  }
  return null;
}

export function NavInterceptor({ children, onLabel }: Props) {
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const root = e.currentTarget;
    const label = findLabel(e.target as HTMLElement, root);
    if (!label) return;
    if (onLabel && onLabel(label, e) === false) return;
    const route = ROUTES[label];
    if (route) {
      e.preventDefault();
      navigate(route);
    }
  };
  return (
    <div onClick={handleClick} className="contents">
      {children}
    </div>
  );
}
