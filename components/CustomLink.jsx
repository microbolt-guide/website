import Link from 'next/link'

function CustomLink({ href, children }) {
  const isExternalLink = href.startsWith("http") || href.startsWith("/config")
  const linkClasses = "nextra-focus _text-primary-600 _underline hover:_no-underline _decoration-from-font [text-underline-position:from-font]"

  if (isExternalLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={linkClasses}>{children}</a>
    </Link>
  );
}

export default CustomLink