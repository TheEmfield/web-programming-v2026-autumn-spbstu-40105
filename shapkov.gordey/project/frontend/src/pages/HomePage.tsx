import { useEffect, useState } from 'react';
import { getGoods } from '../api';
import Carousel from '../components/Carousel';

export default function HomePage() {
  const [goods, setGoods] = useState<any[]>([]);

  useEffect(() => {
    getGoods().then(res => setGoods(res.data));
  }, []);

  const hits = goods.filter((g) => g.labels?.includes('Хит'));
  const news = goods.filter((g) => g.labels?.includes('Новинка'));

  return (
    <div>
      <Carousel title="Хиты продаж" items={hits} />
      <Carousel title="Новинки" items={news} />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', margin: '40px 0' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>🚚 Доставка в день заказа</div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>✅ Только оригинальные товары</div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>🛡️ Гарантия 1 год</div>
      </div>
    </div>
  );
}