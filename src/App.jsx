import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>
      <ProductList />
    </div>
  );
};

export default App;
