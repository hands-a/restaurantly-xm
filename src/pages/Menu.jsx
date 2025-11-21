// src/pages/Menu.jsx
import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [quantity, setQuantity] = useState({});
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    { id: 'all', name: 'All Menu', icon: '🍽️' },
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍖' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🍹' }
  ];

  const menuItems = [
    // Starters
    {
      id: 1,
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls with black truffle and mozzarella cheese',
      price: 18,
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      ingredients: ['Risotto', 'Black Truffle', 'Mozzarella', 'Parmesan Cream'],
      calories: '320 cal',
      prepTime: '15 min'
    },
    {
      id: 2,
      name: 'Grilled Octopus',
      description: 'Tender octopus with smoked paprika and lemon oil',
      price: 24,
      category: 'starters',
      image: 'https://plus.unsplash.com/premium_photo-1719530306154-15e09a8dc74c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new: true,
      ingredients: ['Octopus', 'Smoked Paprika', 'Lemon Oil', 'Potatoes'],
      calories: '280 cal',
      prepTime: '20 min'
    },
    {
      id: 3,
      name: 'Burrata Caprese',
      description: 'Fresh burrata cheese with heirloom tomatoes and basil',
      price: 16,
      category: 'starters',
      image: '',
      ingredients: ['Burrata', 'Heirloom Tomatoes', 'Basil', 'Balsamic'],
      calories: '240 cal',
      prepTime: '10 min'
    },
    {
      id: 4,
      name: 'Tuna Tartare',
      description: 'Fresh tuna with avocado and soy-lime dressing',
      price: 22,
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      ingredients: ['Tuna', 'Avocado', 'Sesame', 'Soy-Lime'],
      calories: '260 cal',
      prepTime: '12 min'
    },

    // Main Courses
    {
      id: 5,
      name: 'Wagyu Beef Burger',
      description: 'Premium wagyu patty with aged cheddar and truffle aioli',
      price: 32,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      ingredients: ['Wagyu Beef', 'Aged Cheddar', 'Truffle Aioli', 'Brioche Bun'],
      calories: '650 cal',
      prepTime: '25 min'
    },
    {
      id: 6,
      name: 'Lobster Linguine',
      description: 'Fresh lobster with cherry tomatoes and basil pesto',
      price: 38,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1707995548175-a7613effbe32?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ingredients: ['Lobster', 'Linguine', 'Cherry Tomatoes', 'Basil Pesto'],
      calories: '520 cal',
      prepTime: '30 min'
    },
    {
      id: 7,
      name: 'Herb Crusted Salmon',
      description: 'Atlantic salmon with lemon butter sauce',
      price: 28,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      new: true,
      ingredients: ['Atlantic Salmon', 'Fresh Herbs', 'Lemon Butter', 'Vegetables'],
      calories: '380 cal',
      prepTime: '22 min'
    },
    {
      id: 8,
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with roasted potatoes',
      price: 34,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1675718343369-b2e46a5ceeca?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ingredients: ['Duck Leg', 'Roasted Potatoes', 'Red Wine Reduction'],
      calories: '580 cal',
      prepTime: '35 min'
    },
    {
      id: 9,
      name: 'Mushroom Risotto',
      description: 'Creamy arborio rice with wild mushrooms',
      price: 24,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      ingredients: ['Arborio Rice', 'Wild Mushrooms', 'Parmesan'],
      calories: '420 cal',
      prepTime: '28 min'
    },
    {
      id: 10,
      name: 'Ribeye Steak',
      description: 'Prime ribeye with garlic herb butter',
      price: 42,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      ingredients: ['Ribeye Steak', 'Garlic Herb Butter', 'Truffle Fries'],
      calories: '720 cal',
      prepTime: '20 min'
    },

    // Desserts
    {
      id: 11,
      name: 'Chocolate Fondant',
      description: 'Warm chocolate cake with melting center',
      price: 14,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      ingredients: ['Dark Chocolate', 'Vanilla Ice Cream', 'Cocoa Powder'],
      calories: '420 cal',
      prepTime: '15 min'
    },
    {
      id: 12,
      name: 'Berry Pavlova',
      description: 'Crisp meringue with fresh berries',
      price: 12,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      ingredients: ['Meringue', 'Mixed Berries', 'Whipped Cream'],
      calories: '320 cal',
      prepTime: '10 min'
    },
    {
      id: 13,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee',
      price: 13,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      ingredients: ['Ladyfingers', 'Coffee', 'Mascarpone', 'Cocoa'],
      calories: '380 cal',
      prepTime: '12 min'
    },
    {
      id: 14,
      name: 'Crème Brûlée',
      description: 'Vanilla custard with caramelized sugar',
      price: 11,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      ingredients: ['Vanilla Custard', 'Caramelized Sugar'],
      calories: '290 cal',
      prepTime: '8 min'
    },

    // Drinks
    {
      id: 15,
      name: 'Signature Cocktail',
      description: 'Special mix of gin and fresh citrus',
      price: 16,
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      new: true,
      ingredients: ['Gin', 'Elderflower', 'Fresh Citrus', 'Mint'],
      calories: '180 cal',
      prepTime: '5 min'
    },
    {
      id: 16,
      name: 'California Wine',
      description: 'Finest local wines from Napa Valley',
      price: 12,
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      ingredients: ['Local Wines', 'Napa Valley Selection'],
      calories: '120 cal',
      prepTime: '2 min'
    },
    {
      id: 17,
      name: 'Craft Beer Flight',
      description: 'Four pours of local craft beer',
      price: 18,
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      ingredients: ['Craft Beer Selection'],
      calories: '200 cal',
      prepTime: '3 min'
    },
    {
      id: 18,
      name: 'Fresh Lemonade',
      description: 'House-made lemonade with mint',
      price: 8,
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      ingredients: ['Fresh Lemons', 'Mint', 'Seasonal Berries'],
      calories: '90 cal',
      prepTime: '4 min'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const addToCart = (item) => {
    const itemQuantity = quantity[item.id] || 1;
    const cartItem = {
      ...item,
      quantity: itemQuantity,
      total: item.price * itemQuantity
    };
    
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + itemQuantity, total: cartItem.total + item.price * itemQuantity }
            : cartItem
        );
      }
      return [...prev, cartItem];
    });
    
    setQuantity(prev => ({ ...prev, [item.id]: 1 }));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(prev => ({ ...prev, [itemId]: newQuantity }));
  };

  const cartTotal = cart.reduce((total, item) => total + item.total, 0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Complete Menu
            </h1>
            <p className="text-amber-100 text-lg max-w-2xl mx-auto">
              Explore our exquisite selection of dishes crafted with the finest ingredients
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Category Filter */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setCurrentPage(1);
                    }}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeCategory === category.id
                        ? 'bg-amber-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {currentItems.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Item Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
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

                    {/* Prep Time */}
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      ⏱️ {item.prepTime}
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <span className="text-amber-600 font-bold">${item.price}</span>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="p-5">
                    <div className="mb-3">
                      <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Ingredients & Calories */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.ingredients.slice(0, 3).map((ingredient, index) => (
                          <span 
                            key={index}
                            className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-xs"
                          >
                            {ingredient}
                          </span>
                        ))}
                        {item.ingredients.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{item.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>🔥 {item.calories}</span>
                        <span>⏱️ {item.prepTime}</span>
                      </div>
                    </div>

                    {/* Quantity Selector & Add to Cart */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-1">
                        <button
                          onClick={() => updateQuantity(item.id, (quantity[item.id] || 1) - 1)}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm"
                        >
                          <span className="text-lg text-gray-600">-</span>
                        </button>
                        <span className="w-8 text-center font-semibold text-gray-700">
                          {quantity[item.id] || 1}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, (quantity[item.id] || 1) + 1)}
                          className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm"
                        >
                          <span className="text-lg">+</span>
                        </button>
                      </div>

                      <button
                        onClick={() => addToCart(item)}
                        className="bg-amber-600 text-white px-4 py-2 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center space-x-2 shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mb-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === pageNumber
                          ? 'bg-amber-600 text-white shadow-lg'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Shopping Cart Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Your Order</span>
                {cart.length > 0 && (
                  <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="font-medium text-gray-400">Your cart is empty</p>
                  <p className="text-sm text-gray-400 mt-1">Add some delicious items!</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-gray-900">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {item.quantity} x ${item.price}
                          </div>
                        </div>
                        <div className="font-bold text-amber-600 text-lg">
                          ${item.total}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-semibold">${cartTotal}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Tax:</span>
                      <span className="font-semibold">${(cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Delivery:</span>
                      <span className="font-semibold">$3.99</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-lg">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold text-amber-600">
                        ${(cartTotal + cartTotal * 0.08 + 3.99).toFixed(2)}
                      </span>
                    </div>

                    <button className="w-full bg-amber-600 text-white py-3 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg mb-3">
                      Proceed to Checkout
                    </button>

                    <button 
                      onClick={() => setCart([])}
                      className="w-full border border-gray-300 text-gray-700 py-2 rounded-xl hover:bg-gray-50 transition-colors text-sm"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Special Offers */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white mt-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">🎉</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Special Offer!</h3>
                  <p className="text-amber-100 text-sm">
                    20% off on orders above $50
                  </p>
                </div>
              </div>
              <div className="text-xs text-amber-200 bg-white/10 px-3 py-2 rounded-lg">
                Use code: <span className="font-bold">WELCOME20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;