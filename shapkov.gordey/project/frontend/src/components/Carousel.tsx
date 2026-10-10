import { useState } from 'react';
import ProductCard from './ProductCard';

export default function Carousel({ title, items }: { title: string; items: any[] }) {
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const next = () => setIndex((prev) => (prev + 1 >= items.length ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1));

  const getVisibleItems = () => {
    const result = [];
    for (let i = 0; i < 3; i++) result.push(items[(index + i) % items.length]);
    return result;
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ marginBottom: '20px' }}>{title}</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button className="btn btn-blue" onClick={prev}>←</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', flex: 1 }}>
          {getVisibleItems().map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
        <button className="btn btn-blue" onClick={next}>→</button>
      </div>
    </div>
  );
}