import { useState } from "react";
import { useNavigate } from "react-router";
import AbcdReserve from "../../../imports/AbcdReserve";
import AbcdReserve1 from "../../../imports/AbcdReserve-1";
import AbcdReserve2 from "../../../imports/AbcdReserve-2";
import { NavInterceptor } from "../NavInterceptor";
import type { MouseEvent } from "react";

export function ReserveFlow() {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const txt = ((e.target as HTMLElement).textContent || "").trim();
    if (!txt || txt.length > 60) return;
    if (/^next/i.test(txt) || /party size/i.test(txt) || /time & details/i.test(txt)) {
      e.preventDefault();
      setStep((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : s));
    } else if (/^back$/i.test(txt) || /^← back$/i.test(txt)) {
      e.preventDefault();
      setStep((s) => (s > 0 ? ((s - 1) as 0 | 1 | 2) : s));
    } else if (/confirm reservation/i.test(txt)) {
      e.preventDefault();
      navigate("/order/success");
    }
  };

  const Screen = step === 0 ? AbcdReserve : step === 1 ? AbcdReserve1 : AbcdReserve2;

  return (
    <div className="min-w-[1379px]">
      <NavInterceptor>
        <div onClick={handleClick}>
          <Screen />
        </div>
      </NavInterceptor>
    </div>
  );
}
