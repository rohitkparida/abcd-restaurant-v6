import AbcdMenu from "../../../imports/AbcdMenu";
import { NavInterceptor } from "../NavInterceptor";

type Props = { onOpenCart: () => void };

export function MenuScreen({ onOpenCart }: Props) {
  return (
    <div className="min-w-[1379px]">
      <NavInterceptor
        onLabel={(label) => {
          if (label === "Cart" || label === "Order") {
            onOpenCart();
            return false;
          }
        }}
      >
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          const txt = (target.textContent || "").trim().toLowerCase();
          if (txt.includes("add") && txt.length < 20) onOpenCart();
        }}>
          <AbcdMenu />
        </div>
      </NavInterceptor>
    </div>
  );
}
