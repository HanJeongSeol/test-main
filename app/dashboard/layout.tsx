export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-row items-center">
      <nav />
      {children}
    </section>
  )
}
