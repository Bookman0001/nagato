export function Skeleton() {
  return (
    <div className="flex pb-12">
      <div className="skeleton w-full mr-auto" data-testid="title" />
      <div className="skeleton w-52 ml-8" data-testid="date" />
    </div>
  )
}
