"use client";

export default function WaitlistForm() {
  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        required
        placeholder="deine@email.de"
        className="flex-1 rounded-full border border-zinc-200 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
      />
      <button
        type="submit"
        className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
      >
        Vormerken
      </button>
    </form>
  );
}
