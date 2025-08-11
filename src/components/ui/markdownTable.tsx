/* eslint-disable @typescript-eslint/no-explicit-any */
const MarkdownTable = {
  table: (props: any) => (
    <div className='my-6 w-full overflow-x-auto'>
      <table className='w-full border-collapse'>{props.children}</table>
    </div>
  ),
  thead: (props: any) => <thead className='bg-muted'>{props.children}</thead>,
  tbody: (props: any) => <tbody>{props.children}</tbody>,
  tr: (props: any) => (
    <tr className='border-t even:bg-muted'>{props.children}</tr>
  ),
  th: (props: any) => (
    <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
      {props.children}
    </th>
  ),
  td: (props: any) => (
    <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
      {props.children}
    </td>
  ),
};

export default MarkdownTable;
