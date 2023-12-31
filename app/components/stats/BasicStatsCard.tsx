const stats = [
    { id: 1, name: 'Images hosted worldwide', value: '44 million' },
    { id: 2, name: 'Instances hosted', value: '4k single instances' },
    { id: 3, name: 'Transactions', value: '46,000' },
  ]
  
  export default function BasicStatsCard() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <h2 className="bg-white font-bold font-sans align-center">Trusted by Thousands</h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  