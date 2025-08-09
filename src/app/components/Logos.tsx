const logos = ['IPSUM', 'N', 'COO', 'LogoIpsum', 'Hyperlink', 'Ipsum', 'hp'];

export default function Logos() {
  return (
    <section className="py-10 bg-gradient-to-r from-orange-600 via-pink-600 to-yellow-400">
  <div className="flex justify-between w-full px-4">
    {logos.map((logo, i) => (
      <div key={i} className="flex-1 min-w-0 flex justify-center">
        {logo}
      </div>
    ))}
  </div>
</section>
  );
}
