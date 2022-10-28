const cards = [
  {
    id: 1,
    movie: "Lord of the Rings",
  },
  {
    id: 2,
    movie: "Star Wars",
  },
  {
    id: 3,
    movie: "Bullet train",
  },
]

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row"> 
      <ul className="flex flex-col w-2/12 p-10">
        {cards.map((card => (
          <li key={card.id}>
            {card.movie}
          </li>
        )))}
      </ul>
      <div className="flex flex-col w-10/12">
        {children}
      </div>
    </div>
  );
}
