export default function about({
    children,
  }: {
    children: React.ReactNode
  })

  {
    return (
        <>
        <h2>This is ABout</h2>
        <main>{children}</main>
        </>
    )
  }
