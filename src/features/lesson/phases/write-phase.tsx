"use client";

type WritePhaseProps = {
  prompt: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function WritePhase({
  prompt,
  value,
  onChange,
  placeholder,
}: WritePhaseProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[1.25rem] font-semibold leading-snug text-ink">
        {prompt}
      </p>
      <label className="flex flex-col gap-2">
        <span className="text-sm text-ink-muted">Write it in your own words.</span>
        <textarea
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          placeholder={placeholder}
          rows={5}
          className="w-full resize-y rounded-[1.2rem] bg-surface-elevated px-4 py-3 text-base leading-7 text-ink shadow-card ring-1 ring-line outline-none focus-visible:ring-2 focus-visible:ring-teal"
        />
      </label>
    </div>
  );
}
