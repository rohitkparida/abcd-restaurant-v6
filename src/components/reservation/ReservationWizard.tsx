import { useEffect, useState, type FormEvent } from "react";
import type { ReservationState, ReservationStep } from "../../types/domain";

const initial: ReservationState = {
  step: 1,
  date: "May 24, 2026",
  time: "7:00 PM",
  experience: "Dinner",
  guests: "4",
  seating: "Tables",
  name: "",
  phone: "",
  email: "",
  occasion: "",
  request: "",
  code: "",
};

const times = ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

function queryStep(): ReservationStep {
  const value = new URLSearchParams(location.search).get("step");
  return value === "2" || value === "3" ? (Number(value) as 2 | 3) : value === "confirmed" ? "confirmed" : 1;
}

function setQuery(step: ReservationStep) {
  const next = new URL(location.href);
  next.searchParams.set("step", String(step));
  history.replaceState({}, "", next);
}

export default function ReservationWizard() {
  const [state, setState] = useState(initial);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let next = { ...initial, step: queryStep() };
    try {
      const saved = localStorage.getItem("abcd:reservation");
      if (saved) next = { ...next, ...JSON.parse(saved), step: queryStep() };
    } catch {
      localStorage.removeItem("abcd:reservation");
    }
    setState(next);
  }, []);

  useEffect(() => {
    if (state.date || state.name) localStorage.setItem("abcd:reservation", JSON.stringify(state));
  }, [state]);

  const update = (patch: Partial<ReservationState>) => setState(current => ({ ...current, ...patch }));

  const advance = (step: ReservationStep) => {
    update({ step });
    setQuery(step);
    document.querySelector(".reservation-shell")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const first = event.currentTarget.querySelector<HTMLElement>(":invalid");
    if (first) {
      setMessage("Please complete the highlighted fields.");
      first.focus();
      return;
    }
    update({ step: "confirmed", code: `ABCD-${Math.floor(100000 + Math.random() * 900000)}` });
    setQuery("confirmed");
  };

  if (state.step === "confirmed") {
    return (
      <section className="reservation-confirm">
        <span aria-hidden="true">✓</span>
        <p className="reserve-kicker">Reservation confirmed</p>
        <h2>Your table is waiting.</h2>
        <p>We look forward to welcoming you to ABCD Restaurant.</p>
        <Summary state={state} advance={advance} />
        <div className="reserve-actions">
          <button onClick={() => advance(3)}>Modify reservation</button>
          <a href="/">Back to home</a>
        </div>
      </section>
    );
  }

  return (
    <div className="reservation-shell">
      <div className="reserve-layout">
        <form onSubmit={submit} noValidate>
          <ol className="reserve-steps">
            {[
              [1, "Choose Date"],
              [2, "Party Size"],
              [3, state.step === 3 ? "Your details" : "Time & Details"],
            ].map(([id, label]) => (
              <li key={id} className={Number(state.step) >= Number(id) ? "active" : ""}>
                <span>{Number(state.step) > Number(id) ? "✓" : id}</span>
                {label}
              </li>
            ))}
          </ol>

          <div className="reserve-form-body">
            {state.step === 1 && <StepOne state={state} update={update} next={() => advance(2)} />}
            {state.step === 2 && <StepTwo state={state} update={update} back={() => advance(1)} next={() => advance(3)} />}
            {state.step === 3 && <StepThree state={state} update={update} back={() => advance(2)} message={message} />}
          </div>
        </form>

        <aside>
          <Summary state={state} advance={advance} />
        </aside>
      </div>
    </div>
  );
}

function StepOne({
  state,
  update,
  next,
}: {
  state: ReservationState;
  update: (patch: Partial<ReservationState>) => void;
  next: () => void;
}) {
  const days = [
    ...Array.from({ length: 5 }, (_, index) => ({ day: 26 + index, other: true })),
    ...Array.from({ length: 31 }, (_, index) => ({ day: index + 1, other: false })),
    ...Array.from({ length: 6 }, (_, index) => ({ day: index + 1, other: true })),
  ];

  return (
    <fieldset>
      <legend>Select your date</legend>
      <p>Reservations can be booked up to 90 days in advance.</p>

      <div className="reserve-calendar">
        <header>
          <strong>May 2026</strong>
          <span>
            <button type="button" aria-label="Previous month">
              ‹
            </button>
            <button type="button" aria-label="Next month">
              ›
            </button>
          </span>
        </header>

        <div className="week">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
            <b key={day}>{day}</b>
          ))}
          {days.map(({ day, other }, index) => (
            <button
              key={index}
              type="button"
              disabled={other}
              className={`${other ? "other-month " : ""}${!other && state.date === `May ${day}, 2026` ? "selected" : ""}`}
              onClick={() => update({ date: `May ${day}, 2026` })}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="time-head">
        <h3>Choose your time</h3>
        <span>
          <i /> Available &nbsp; <i className="limited" /> Limited &nbsp; <i className="wait" /> Waitlist
        </span>
      </div>

      <div className="meal-tabs">
        <button type="button">Lunch</button>
        <button type="button" className="selected">
          Dinner
        </button>
      </div>

      <div className="time-grid">
        {times.map((time, index) => (
          <button
            key={time}
            type="button"
            disabled={time === "8:30 PM"}
            className={state.time === time ? "selected" : ""}
            onClick={() => update({ time, experience: "Dinner" })}
          >
            <strong>{time}</strong>
            <small>{state.time === time ? "Selected" : time === "8:30 PM" ? "Waitlist" : index === 2 || index === 4 ? "Limited" : "Available"}</small>
          </button>
        ))}
      </div>

      <button className="primary-next" type="button" disabled={!state.date || !state.time} onClick={next}>
        Next: Party Size →
      </button>
    </fieldset>
  );
}

function StepTwo({
  state,
  update,
  back,
  next,
}: {
  state: ReservationState;
  update: (patch: Partial<ReservationState>) => void;
  back: () => void;
  next: () => void;
}) {
  return (
    <fieldset>
      <legend>How many guests?</legend>
      <p>For parties bigger than 10 people, we provide Lounge booking.</p>

      <div className="guest-grid">
        {guestOptions.map(value => (
          <button key={value} type="button" aria-pressed={state.guests === value} className={state.guests === value ? "selected" : ""} onClick={() => update({ guests: value })}>
            <span className="guest-icon" aria-hidden="true">♙</span>
            <strong>{value === "1" ? "1 Guest" : `${value} Guests`}</strong>
          </button>
        ))}
      </div>

      <h3>Seating Type</h3>
      <div className="seat-grid">
        {[
          ["Tables", "Tables"],
          ["Lounge", "Lounge"],
        ].map(([name, label]) => (
          <button key={name} type="button" aria-pressed={state.seating === name} className={state.seating === name ? "selected" : ""} onClick={() => update({ seating: name })}>
            <strong>{label}</strong>
          </button>
        ))}
      </div>

      <div className="reserve-actions">
        <button type="button" onClick={back}>
          ← Back
        </button>
        <button className="primary-next" type="button" onClick={next}>
          Next: Time & Details →
        </button>
      </div>
    </fieldset>
  );
}

function StepThree({
  state,
  update,
  back,
  message,
}: {
  state: ReservationState;
  update: (patch: Partial<ReservationState>) => void;
  back: () => void;
  message: string;
}) {
  return (
    <fieldset>
      <legend>Your details</legend>

      <div className="detail-grid">
        <label className="detail-field">
          <span>Full name</span>
          <input required autoComplete="name" value={state.name} onChange={event => update({ name: event.target.value })} placeholder="Enter your full name" />
        </label>
        <label className="detail-field phone-field">
          <span>Mobile number</span>
          <input required autoComplete="tel" value={state.phone} onChange={event => update({ phone: event.target.value })} placeholder="Enter your mobile number" />
        </label>
        <label className="detail-field">
          <span>Email address</span>
          <input required type="email" autoComplete="email" value={state.email} onChange={event => update({ email: event.target.value })} placeholder="Enter your email address" />
        </label>
        <label className="detail-field">
          <span>Occasion (optional)</span>
          <select value={state.occasion} onChange={event => update({ occasion: event.target.value })}>
            <option value="">Select an occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Business dinner</option>
          </select>
        </label>
      </div>

      <label className="detail-field request-field">
        <span>Special request (optional)</span>
        <textarea rows={3} maxLength={120} value={state.request} onChange={event => update({ request: event.target.value })} placeholder="e.g. Dietary requirements, allergies..." />
        <small>{state.request.length}/120</small>
      </label>

      <p className="status" role="alert">
        {message}
      </p>

      <div className="reserve-actions">
        <button className="details-back" type="button" onClick={back}>← Back</button>
        <button className="primary-next" type="submit">
          Confirm Reservation <span aria-hidden="true">→</span>
        </button>
      </div>
    </fieldset>
  );
}

function Summary({ state, advance }: { state: ReservationState; advance: (step: ReservationStep) => void }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <h2>Your reservation</h2>
      <div className="summary-art" aria-hidden="true">
        <img src={`${base}assets/figma-source/taj-reservation-clean.png`} alt="" />
      </div>
      <dl>
        <div>
          <dt>Date</dt>
          <dd>
            {state.date ? `Sat, ${state.date.replace(", 2026", "")}` : "Not selected"}
            <button onClick={() => advance(1)}>Edit</button>
          </dd>
        </div>
        <div>
          <dt>Party Size</dt>
          <dd>
            {state.guests} guests
            <button onClick={() => advance(2)}>Edit</button>
          </dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>
            {state.time || "Not selected"}
            <button onClick={() => advance(1)}>Edit</button>
          </dd>
        </div>
        <div>
          <dt>Experience</dt>
          <dd>{state.experience}</dd>
        </div>
      </dl>
      <p className="cancel-note">
        ◊ You can cancel or modify up to <b>2 hours before your booking.</b>
      </p>
    </>
  );
}
