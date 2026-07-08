import AbcdAbout from "../../../imports/AbcdAbout";
import { NavInterceptor } from "../NavInterceptor";

export function StoryScreen() {
  return (
    <div className="min-w-[1379px]">
      <NavInterceptor>
        <AbcdAbout />
      </NavInterceptor>
    </div>
  );
}
