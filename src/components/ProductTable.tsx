import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Product } from '../types/product';

interface ProductTableProps {
  products: Product[];
}

function StockBadge({ level }: { level: number }) {
  if (level === 0)
    return <Badge variant="destructive">Out of Stock</Badge>;
  if (level < 10)
    return <Badge variant="outline" className="text-orange-500 border-orange-400">Low: {level}</Badge>;
  return <Badge variant="outline" className="text-green-600 border-green-500">{level}</Badge>;
}

function ProductTable({ products }: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        No products found.
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Product Group</TableHead>
            <TableHead>Stock Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={`${product.code}-${index}`}>
              <TableCell className="font-medium">{product.code}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.model}</TableCell>
              <TableCell>{product.productGroup}</TableCell>
              <TableCell>
                <StockBadge level={product.stockLevel} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductTable;