
import React, { useState, useEffect } from 'react';
import { numberService, AverageResponse } from '../services/numberService';
import NumberDisplay from './NumberDisplay';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const AverageCalculator: React.FC = () => {
  const [windowSize, setWindowSize] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AverageResponse | null>(null);
  const [selectedType, setSelectedType] = useState<'p' | 'f' | 'e' | 'r'>('p');
  const { toast } = useToast();

  const handleWindowSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value);
    if (!isNaN(size) && size > 0) {
      setWindowSize(size);
      numberService.setWindowSize(size);
      toast({
        title: "Window size updated",
        description: `Window size set to ${size}`,
      });
    }
  };

  const handleTypeSelection = (type: 'p' | 'f' | 'e' | 'r') => {
    setSelectedType(type);
  };

  const fetchNumbers = async () => {
    setIsLoading(true);
    try {
      const response = await numberService.processNumbersByType(selectedType);
      setResult(response);
      toast({
        title: "Data fetched successfully",
        description: `Average: ${response.avg}`,
      });
    } catch (error) {
      console.error('Error fetching numbers:', error);
      toast({
        title: "Error fetching data",
        description: "Failed to fetch numbers from the server",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetCalculator = () => {
    numberService.resetState();
    setResult(null);
    toast({
      title: "Reset complete",
      description: "Calculator state has been reset",
    });
  };

  const getTypeLabel = (type: string): string => {
    switch (type) {
      case 'p': return 'Prime';
      case 'f': return 'Fibonacci';
      case 'e': return 'Even';
      case 'r': return 'Random';
      default: return '';
    }
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-morphism rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Average Calculator HTTP Microservice</h2>
        
        <div className="mb-6">
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="window-size">Window Size</Label>
            <Input
              id="window-size"
              type="number"
              value={windowSize}
              onChange={handleWindowSizeChange}
              min="1"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label>Number Type</Label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {(['p', 'f', 'e', 'r'] as const).map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => handleTypeSelection(type)}
                  className="transition-all"
                >
                  {getTypeLabel(type)}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={fetchNumbers} 
            disabled={isLoading}
            className="bg-affordmed-blue hover:bg-affordmed-blue/90 text-white"
          >
            {isLoading ? "Loading..." : "Fetch Numbers"}
          </Button>
          
          <Button 
            onClick={resetCalculator} 
            variant="outline"
          >
            Reset
          </Button>
        </div>
      </div>
      
      {result && (
        <NumberDisplay
          title="Current Response"
          data={result}
          isLoading={isLoading}
        />
      )}
      
      <Separator className="my-8" />
      
      <div className="glass-morphism rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Test Server APIs</h2>
        <p className="text-gray-700 mb-6">
          For your convenience, we are giving you a test server with the following APIs that returns
          numbers of a particular type - prime, fibonacci, even and random.
        </p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Prime Numbers API</h3>
            <div className="mb-2">
              <span className="text-sm font-medium text-gray-700">Request: </span>
              <a 
                href="http://20.244.56.144/test/primes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-affordmed-blue hover:underline"
              >
                http://20.244.56.144/test/primes
              </a>
            </div>
            <div className="json-response">
              {`{`}
              <div className="pl-4">
                "numbers": [2,3,5,7,11]
              </div>
              {`}`}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Fibonacci Numbers API</h3>
            <div className="mb-2">
              <span className="text-sm font-medium text-gray-700">Request: </span>
              <a 
                href="http://20.244.56.144/test/fibo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-affordmed-blue hover:underline"
              >
                http://20.244.56.144/test/fibo
              </a>
            </div>
            <div className="json-response">
              {`{`}
              <div className="pl-4">
                "numbers": [55,89,144,233,377,610,987,1597,2584,4181,6765]
              </div>
              {`}`}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Even Numbers API</h3>
            <div className="mb-2">
              <span className="text-sm font-medium text-gray-700">Request: </span>
              <a 
                href="http://20.244.56.144/test/even" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-affordmed-blue hover:underline"
              >
                http://20.244.56.144/test/even
              </a>
            </div>
            <div className="json-response">
              {`{`}
              <div className="pl-4">
                "numbers": [8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56]
              </div>
              {`}`}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Random Numbers API</h3>
            <div className="mb-2">
              <span className="text-sm font-medium text-gray-700">Request: </span>
              <a 
                href="http://20.244.56.144/test/rand" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-affordmed-blue hover:underline"
              >
                http://20.244.56.144/test/rand
              </a>
            </div>
            <div className="json-response">
              {`{`}
              <div className="pl-4">
                "numbers": [2,19,25,7,4,24,17,27,30,21,14,18,23]
              </div>
              {`}`}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AverageCalculator;
