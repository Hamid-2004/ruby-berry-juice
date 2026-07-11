import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import useApi from '../hooks/useApi';

import pr1 from '../assets/products/pr1-rb.png';
import pr2 from '../assets/products/pr2-rb.png';
import pr3 from '../assets/products/pr3-rb.png';
import pr4 from '../assets/products/pr4-rb.jpeg';
import pr5 from '../assets/products/pr5-rb.jpeg';

// Local fallback so the UI still renders fully if the Express API isn't running.
const FALLBACK_PRODUCTS = [
  { id: 'ruby-glow', name: 'Ruby Glow', description: 'Strawberry, raspberry and pink guava, pressed fresh to order.', price: 6.5, calories: 180, color: '#C81D4F', image: pr1 },
  { id: 'berry-bliss', name: 'Berry Bliss', description: 'Blueberry, blackberry and a whisper of Madagascar vanilla.', price: 6.9, calories: 160, color: '#2C124C', image: pr2 },
  { id: 'blueberry-burst', name: 'Blueberry Burst', description: 'Wild blueberry, banana and creamy oat milk.', price: 7.2, calories: 210, color: '#3B2A63', image: pr3 },
  { id: 'mixed-berry', name: 'Mixed Berry', description: 'Five berries in one glass, zero compromise on flavor.', price: 6.8, calories: 170, color: '#A3163F', image: pr4 },
  { id: 'tropical-berry', name: 'Tropical Berry', description: 'Berries meet mango, passionfruit and fresh lime.', price: 7.0, calories: 190, color: '#B7C7A3', image: pr5 },
];

export default function FeaturedProducts() {
  const { data: products } = useApi('/products', FALLBACK_PRODUCTS);

  return (
    <section id="menu" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Menu"
          title="Signature Berry Creations"
          description="Five drinks, five personalities, each blended fresh to order with real fruit and zero shortcuts."
        />
        <div id="products" className="products-grid">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .products-grid { display: grid; grid-template-columns: 1fr; gap: 28px; }
        @media (min-width: 640px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>
    </section>
  );
}
