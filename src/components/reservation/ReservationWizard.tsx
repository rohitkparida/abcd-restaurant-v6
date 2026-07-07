import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type { ReservationState, ReservationStep } from "../../types/domain";

const initial: ReservationState = {
  step: 1,
  date: "",
  time: "",
  experience: "Dining Room",
  guests: "2",
  seating: "No preference",
  name: "",
  phone: "",
  email: "",
  occasion: "",
  request: "",
  code: "",
};
const steps: Array<{ id: 1 | 2 | 3; label: string }> = [
  { id: 1, label: "Date & Time" },
  { id: 2, label: "Experience" },
  { id: 3, label: "Your Details" },
];
const times = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
];

function queryStep(): ReservationStep {
  const value = new URLSearchParams(window.location.search).get("step");
  return value === "2" || value === "3"
    ? (Number(value) as 2 | 3)
    : value === "confirmed"
      ? "confirmed"
      : 1;
}
function setQuery(step: ReservationStep) {
  const url = new URL(window.location.href);
  url.searchParams.set("step", String(step));
  history.replaceState({}, "", url);
}

export default function ReservationWizard() {
  const [state, setState] = useState(initial);
  const [message, setMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const saved = localStorage.getItem("abcd:reservation");
    let next = { ...initial, step: queryStep() };
    if (saved) {
      try {
        next = { ...next, ...JSON.parse(saved), step: queryStep() };
      } catch {
        localStorage.removeItem("abcd:reservation");
      }
    }
    setState(next);
  }, []);
  useEffect(() => {
    if (state.date || state.name)
      localStorage.setItem("abcd:reservation", JSON.stringify(state));
  }, [state]);
  useEffect(() => {
    if (message.startsWith("Please")) nameRef.current?.focus();
  }, [message]);
  const update = (patch: Partial<ReservationState>) =>
    setState((current) => ({ ...current, ...patch }));
  const advance = (step: ReservationStep) => {
    update({ step });
    setQuery(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const canContinue = useMemo(
    () =>
      state.step === 1
        ? Boolean(state.date && state.time)
        : state.step === 2
          ? Boolean(state.experience && state.guests)
          : true,
    [state],
  );
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const first = form.querySelector<HTMLElement>(":invalid");
    if (first) {
      setMessage("Please complete the highlighted fields.");
      setTimeout(
        () =>
          document.querySelector<HTMLElement>(".wizard form :invalid")?.focus(),
        0,
      );
      return;
    }
    const code = `ABCD-${Math.floor(100000 + Math.random() * 900000)}`;
    update({ step: "confirmed", code });
    setQuery("confirmed");
    setMessage("Reservation confirmed.");
  };
  if (state.step === "confirmed")
    return (
      <section className="confirmation">
        <span className="check">✓</span>
        <p className="eyebrow">Reservation confirmed</p>
        <h2>Your table is waiting.</h2>
        <p>We look forward to welcoming you to ABCD Restaurant.</p>
        <dl>
          <div>
            <dt>Confirmation</dt>
            <dd>{state.code || "ABCD-246810"}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{state.date || "Selected date"}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{state.time || "Selected time"}</dd>
          </div>
          <div>
            <dt>Party</dt>
            <dd>{state.guests} guests</dd>
          </div>
        </dl>
        <button onClick={() => advance(1)}>Make another reservation</button>
      </section>
    );
  return (
    <div className="wizard">
      <ol className="steps">
        {steps.map((step) => (
          <li
            className={
              state.step === step.id
                ? "active"
                : Number(state.step) > step.id
                  ? "done"
                  : ""
            }
          >
            <span>{Number(state.step) > step.id ? "✓" : step.id}</span>
            {step.label}
          </li>
        ))}
      </ol>
      <div className="wizard-grid">
        <form onSubmitCapture={submit} noValidate>
          {state.step === 1 && (
            <fieldset>
              <legend>Choose your date and time</legend>
              <p>Select when you’d like to join us.</p>
              <label>
                Date
                <input
                  type="date"
                  required
                  value={state.date}
                  onChange={(e) => update({ date: e.target.value })}
                />
              </label>
              <div
                className="choice-grid times"
                role="group"
                aria-label="Reservation time"
              >
                {times.map((time) => (
                  <button
                    type="button"
                    className={state.time === time ? "selected" : ""}
                    onClick={() => update({ time })}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <button
                className="next"
                type="button"
                disabled={!canContinue}
                onClick={() => advance(2)}
              >
                Continue →
              </button>
            </fieldset>
          )}
          {state.step === 2 && (
            <fieldset>
              <legend>Choose your experience</legend>
              <p>Tell us how you’d like to dine.</p>
              <div className="choice-grid">
                {["Dining Room", "Chef’s Table", "Celebration"].map((value) => (
                  <button
                    type="button"
                    className={state.experience === value ? "selected" : ""}
                    onClick={() => update({ experience: value })}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <label>
                Party size
                <select
                  value={state.guests}
                  onChange={(e) => update({ guests: e.target.value })}
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option value={String(i + 1)}>
                      {i + 1} {i ? "guests" : "guest"}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Seating preference
                <select
                  value={state.seating}
                  onChange={(e) => update({ seating: e.target.value })}
                >
                  <option>No preference</option>
                  <option>Standard table</option>
                  <option>Booth</option>
                  <option>Outdoor</option>
                </select>
              </label>
              <div className="actions">
                <button type="button" onClick={() => advance(1)}>
                  ← Back
                </button>
                <button
                  className="next"
                  type="button"
                  disabled={!canContinue}
                  onClick={() => advance(3)}
                >
                  Continue →
                </button>
              </div>
            </fieldset>
          )}
          {state.step === 3 && (
            <fieldset>
              <legend>Your details</legend>
              <p>We’ll use these details only for this reservation.</p>
              <label>
                Full name
                <input
                  ref={nameRef}
                  required
                  autoComplete="name"
                  value={state.name}
                  onChange={(e) => update({ name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                Mobile number
                <input
                  required
                  autoComplete="tel"
                  value={state.phone}
                  onChange={(e) => update({ phone: e.target.value })}
                  placeholder="Enter your mobile number"
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={(e) => update({ email: e.target.value })}
                  placeholder="Enter your email address"
                />
              </label>
              <label>
                Occasion
                <input
                  value={state.occasion}
                  onChange={(e) => update({ occasion: e.target.value })}
                  placeholder="Birthday, anniversary, or another occasion"
                />
              </label>
              <label>
                Special request
                <textarea
                  rows={4}
                  value={state.request}
                  onChange={(e) => update({ request: e.target.value })}
                  placeholder="Accessibility, dietary, or seating requests"
                ></textarea>
              </label>
              <p className="status" role="alert">
                {message}
              </p>
              <div className="actions">
                <button type="button" onClick={() => advance(2)}>
                  ← Back
                </button>
                <button className="next" type="submit">
                  Confirm Reservation
                </button>
              </div>
            </fieldset>
          )}
        </form>
        <aside>
          <p className="eyebrow">Your reservation</p>
          <h2>ABCD Restaurant</h2>
          <dl>
            <div>
              <dt>Date</dt>
              <dd>{state.date || "Not selected"}</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>{state.time || "Not selected"}</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{state.experience}</dd>
            </div>
            <div>
              <dt>Party</dt>
              <dd>{state.guests} guests</dd>
            </div>
          </dl>
          <p>
            417 Lancaster Ave
            <br />
            Malvern, Pennsylvania
          </p>
        </aside>
      </div>
    </div>
  );
}
