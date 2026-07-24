type SectionTitleProps = {
    eyebrow: string;
    title: string;
    description?: string;
  };
  
  export function SectionTitle({
    eyebrow,
    title,
    description,
  }: SectionTitleProps) {
    return (
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
            {eyebrow}
          </p>
  
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
  
        {description && (
          <p className="max-w-md leading-7 text-slate-400">
            {description}
          </p>
        )}
      </div>
    );
  }