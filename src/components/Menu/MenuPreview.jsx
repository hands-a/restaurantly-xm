import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});

  const categories = [
    { id: 'all', name: 'All Menu' },
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls with black truffle and mozzarella',
      price: '$18',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 2,
      name: 'Grilled Octopus',
      description: 'Tender octopus with smoked paprika and lemon oil',
      price: '$24',
      category: 'starters',
      image: 'https://plus.unsplash.com/premium_photo-1719530306154-15e09a8dc74c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new: true
    },
    {
      id: 3,
      name: 'Burrata Caprese',
      description: 'Fresh burrata with heirloom tomatoes and basil',
      price: '$16',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1760023570385-ee484f7076b3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: 'Tuna Tartare',
      description: 'Fresh tuna with avocado, sesame, and soy-lime dressing',
      price: '$22',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },

    {
      id: 5,
      name: 'Wagyu Beef Burger',
      description: 'Premium wagyu patty with aged cheddar and truffle aioli',
      price: '$32',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 6,
      name: 'Lobster Linguine',
      description: 'Fresh lobster with cherry tomatoes and basil pesto',
      price: '$38',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 7,
      name: 'Herb Crusted Salmon',
      description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables',
      price: '$28',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      new: true
    },
    {
      id: 8,
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with roasted potatoes and red wine reduction',
      price: '$34',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1599921841143-4c86c75ba8f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 9,
      name: 'Mushroom Risotto',
      description: 'Creamy arborio rice with wild mushrooms and parmesan',
      price: '$24',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 10,
      name: 'Ribeye Steak',
      description: 'Prime ribeye with garlic herb butter and truffle fries',
      price: '$42',
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },

    {
      id: 11,
      name: 'Chocolate Fondant',
      description: 'Warm chocolate cake with melting center and vanilla ice cream',
      price: '$14',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 12,
      name: 'Berry Pavlova',
      description: 'Crisp meringue with fresh berries and whipped cream',
      price: '$12',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 13,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers',
      price: '$13',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true
    },
    {
      id: 14,
      name: 'Crème Brûlée',
      description: 'Vanilla custard with caramelized sugar crust',
      price: '$11',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },

    {
      id: 15,
      name: 'Signature Cocktail',
      description: 'Our special mix of gin, elderflower and fresh citrus',
      price: '$16',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      new: true
    },
    {
      id: 16,
      name: 'California Wine',
      description: 'Selection of finest local wines from Napa Valley',
      price: '$12',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 17,
      name: 'Craft Beer Flight',
      description: 'Four 4oz pours of our local craft beer selection',
      price: '$18',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 18,
      name: 'Fresh Lemonade',
      description: 'House-made lemonade with mint and seasonal berries',
      price: '$8',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (e, id) => {
    e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            BROWSE OUR MENU
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Loading deliciousness...</div>
                  </div>
                )}
                
                <img 
                  src={item.image} 
                  alt={item.name}
                  className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ${
                    !loadedImages[item.id] ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad(item.id)}
                  onError={(e) => handleImageError(e, item.id)}
                />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.popular && (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Popular
                    </span>
                  )}
                  {item.new && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      New
                    </span>
                  )}
                </div>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-amber-600 font-bold text-sm">{item.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <button className="w-full bg-amber-600 text-white py-3 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 group/btn shadow-lg hover:shadow-xl">
                  <span>Add to Order</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Order?
              </h3>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                Browse our full menu and place your order online for pickup or delivery
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/menu"
                  className="bg-white text-amber-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <span>BROWSE FULL MENU</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </Link>
                
                <Link
                  to="/delivery"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-amber-600 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3"
                >
                  <span>ORDER ONLINE</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-amber-400/30">
                <div className="text-center">
                  <div className="text-3xl font-bold">18+</div>
                  <div className="text-amber-200 text-sm">Menu Items</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">30min</div>
                  <div className="text-amber-200 text-sm">Avg. Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-amber-200 text-sm">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
