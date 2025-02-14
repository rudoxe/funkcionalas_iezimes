import React from "react";

const terms = [
  { keyword: "Feature", translations: ["Funkcionalitāte", "Fīča"] },
  { keyword: "Background", translations: ["Konteksts", "Situācija"] },
  { keyword: "Rule", translations: ["Rule"] },
  { keyword: "Scenario", translations: ["Piemērs", "Scenārijs"] },
  { keyword: "Scenario Outline", translations: ["Scenārijs pēc parauga"] },
  { keyword: "Examples", translations: ["Piemēri", "Paraugs"] },
  { keyword: "Given", translations: ["Kad"] },
  { keyword: "When", translations: ["Ja"] },
  { keyword: "Then", translations: ["Tad"] },
  { keyword: "And", translations: ["Un"] },
  { keyword: "But", translations: ["Bet"] },
];

const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
      {children}
    </table>
  </div>
);

const TableHeader = () => (
  <thead className="bg-gray-200">
    <tr>
      <th className="px-4 py-2 text-left">Angļu valodā</th>
      <th className="px-4 py-2 text-left">Latviešu valodā</th>
    </tr>
  </thead>
);

const TableRow = ({ keyword, translations }) => (
  <tr className="border-t">
    <TableCell>{keyword}</TableCell>
    <TableCell>
      <div className="flex flex-wrap gap-2">
        {translations.map((t, i) => (
          <Tag key={i}>{t}</Tag>
        ))}
      </div>
    </TableCell>
  </tr>
);

const TableCell = ({ children }) => (
  <td className="px-4 py-2 border-r border-gray-300">{children}</td>
);

const Tag = ({ children }) => (
  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
    {children}
  </span>
);

export default function GherkinTermsTable() {
  return (
    <Table>
      <TableHeader />
      <tbody>
        {terms.map((term, index) => (
          <TableRow key={index} {...term} />
        ))}
      </tbody>
    </Table>
  );
}
