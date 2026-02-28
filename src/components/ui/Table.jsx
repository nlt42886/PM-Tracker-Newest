export default function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-base border-collapse">
        <thead>
          <tr className="bg-slate-100 border-b border-slate-200">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-semibold text-slate-700 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
