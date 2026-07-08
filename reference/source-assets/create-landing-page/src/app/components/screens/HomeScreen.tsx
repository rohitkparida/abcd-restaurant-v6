import AbcdHome from "../../../imports/AbcdHome";
import { NavInterceptor } from "../NavInterceptor";

export function HomeScreen() {
  return (
    <div className="min-w-[1379px]">
      <NavInterceptor>
        <AbcdHome />
      </NavInterceptor>
    </div>
  );
}
