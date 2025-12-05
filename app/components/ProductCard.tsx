import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  onAddToCart?: (product: any) => void;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  onAddToCart,
}: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, description, price, image, category });
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200">
      <div className="w-full h-56 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
        <div className="text-8xl">{image}</div>
      </div>
      
      <div className="p-8">
        <div className="text-xs text-blue-600 font-semibold uppercase tracking-widest mb-3">{category}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">{name}</h3>
        <p className="text-base text-gray-600 mb-6 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between gap-4">
          <div className="text-3xl font-bold text-blue-600">₹{price.toLocaleString('en-IN')}</div>
          <button
            onClick={handleAddToCart}
            className={`px-5 py-3 rounded-lg font-semibold text-base transition whitespace-nowrap ${
              isAdded
                ? 'bg-green-600 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isAdded ? '✓ Added' : 'Buy'}
          </button>
        </div>
      </div>
    </div>
  );
}
