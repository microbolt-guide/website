import { useMDXComponents } from 'nextra/mdx'

function FAQBox({ title, children }) {
  const components = useMDXComponents()
  const Details = components.details || 'details'
  const Summary = components.summary || 'summary'

  return (
    <Details className="_my-4 _p-2 _rounded _border _border-gray-200 _bg-white dark:_border-neutral-800 dark:_bg-neutral-900">
      <Summary>
        <strong>{title}</strong>
      </Summary>
      <div className="_p-2">
        {children}
      </div>
    </Details>
  );
}

export default FAQBox