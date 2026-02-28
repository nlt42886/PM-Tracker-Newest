export default function PdfLink({ file, page, label }) {
  const href = page ? `${file}#page=${page}` : file;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-medium underline-offset-2 hover:underline"
    >
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      {label}
      {page && <span className="text-xs text-slate-400 font-normal">(p.{page})</span>}
    </a>
  );
}
