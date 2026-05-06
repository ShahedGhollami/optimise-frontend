import { useEffect, useState } from 'react';
import { getProducts } from './api/productApi';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Product, SearchParams } from './types/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (params: SearchParams = { code: '', partOfDescription: '' }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts(params);
      setProducts(data);
    } catch {
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Product Search</CardTitle>
          <CardDescription>Search and browse available products</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">

          <SearchBar onSearch={fetchProducts} loading={loading} />

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
              {error}
            </div>
          )}

          <div className="text-sm text-muted-foreground">
            {!loading && `${products.length} product(s) found`}
          </div>

          {loading ? (
            <div className="text-center py-16 text-muted-foreground">Loading...</div>
          ) : (
            <ProductTable products={products} />
          )}

        </CardContent>
      </Card>
    </div>
  );
}

export default App;