import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { SearchParams } from '../types/product';

interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
  loading: boolean;
}

function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [code, setCode] = useState('');
  const [partOfDescription, setPartOfDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ code, partOfDescription });
  };

  const handleReset = () => {
    setCode('');
    setPartOfDescription('');
    onSearch({ code: '', partOfDescription: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-end">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="code">Code</Label>
        <Input
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="e.g. HT"
          className="w-48"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={partOfDescription}
          onChange={(e) => setPartOfDescription(e.target.value)}
          placeholder="e.g. DAVOS"
          className="w-64"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          <Search className="w-4 h-4 mr-2" />
          {loading ? 'Searching...' : 'Search'}
        </Button>
        <Button type="button" variant="outline" onClick={handleReset}>
          <X className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>
    </form>
  );
}

export default SearchBar;