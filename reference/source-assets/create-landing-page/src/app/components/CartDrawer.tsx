import AbcdCart from "../../imports/AbcdCart";
import { useNavigate } from "react-router";
import type { MouseEvent } from "react";

type Props = { open: boolean; onClose: () => void };

export function CartDrawer({ open, onClose }: Props) {
  const navigate = useNavigate();
  if (!open) return null;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const txt = ((e.target as HTMLElement).textContent || "").trim();
    if (/place order/i.test(txt) && txt.length < 40) {
      e.preventDefault();
      onClose();
      navigate("/order/success");
    }
  };

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div
        className="w-[1379px] h-[942px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={handleClick}>
          <AbcdCart />
        </div>
        <button
          aria-label="Close cart"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 border border-[#ead8bf] text-[#4e121e] hover:bg-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}
