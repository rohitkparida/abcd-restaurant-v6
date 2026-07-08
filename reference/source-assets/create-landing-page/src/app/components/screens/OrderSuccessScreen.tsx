import AbcdOrderSuccessfullDineIn from "../../../imports/AbcdOrderSuccessfullDineIn";
import { NavInterceptor } from "../NavInterceptor";

export function OrderSuccessScreen() {
  return (
    <div className="min-w-[1379px]">
      <NavInterceptor>
        <AbcdOrderSuccessfullDineIn />
      </NavInterceptor>
    </div>
  );
}
