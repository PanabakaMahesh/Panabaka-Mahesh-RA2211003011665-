
import axios from 'axios';

// Types for our service
export interface NumberResponse {
  numbers: number[];
}

export interface AverageResponse {
  windowPrevState: number[];
  windowCurrentState: number[];
  numbers: number[];
  avg: number;
}

// Base URL for test server
const TEST_SERVER_BASE_URL = 'http://20.244.56.144/test';

// Default window size
const DEFAULT_WINDOW_SIZE = 10;

class NumberService {
  private windowSize: number;
  private windowCurrentState: number[] = [];
  private windowPrevState: number[] = [];

  constructor(windowSize: number = DEFAULT_WINDOW_SIZE) {
    this.windowSize = windowSize;
  }

  // Set window size
  setWindowSize(size: number): void {
    this.windowSize = size;
  }

  // Get prime numbers from server
  async getPrimeNumbers(): Promise<NumberResponse> {
    try {
      const response = await axios.get(`${TEST_SERVER_BASE_URL}/primes`);
      return response.data;
    } catch (error) {
      console.error('Error fetching prime numbers:', error);
      return { numbers: [] };
    }
  }

  // Get fibonacci numbers from server
  async getFibonacciNumbers(): Promise<NumberResponse> {
    try {
      const response = await axios.get(`${TEST_SERVER_BASE_URL}/fibo`);
      return response.data;
    } catch (error) {
      console.error('Error fetching fibonacci numbers:', error);
      return { numbers: [] };
    }
  }

  // Get even numbers from server
  async getEvenNumbers(): Promise<NumberResponse> {
    try {
      const response = await axios.get(`${TEST_SERVER_BASE_URL}/even`);
      return response.data;
    } catch (error) {
      console.error('Error fetching even numbers:', error);
      return { numbers: [] };
    }
  }

  // Get random numbers from server
  async getRandomNumbers(): Promise<NumberResponse> {
    try {
      const response = await axios.get(`${TEST_SERVER_BASE_URL}/rand`);
      return response.data;
    } catch (error) {
      console.error('Error fetching random numbers:', error);
      return { numbers: [] };
    }
  }

  // Process numbers based on type and return the average
  async processNumbersByType(type: 'p' | 'f' | 'e' | 'r'): Promise<AverageResponse> {
    let newNumbers: number[] = [];

    // Get numbers based on type
    switch (type) {
      case 'p':
        const primeResponse = await this.getPrimeNumbers();
        newNumbers = primeResponse.numbers;
        break;
      case 'f':
        const fiboResponse = await this.getFibonacciNumbers();
        newNumbers = fiboResponse.numbers;
        break;
      case 'e':
        const evenResponse = await this.getEvenNumbers();
        newNumbers = evenResponse.numbers;
        break;
      case 'r':
        const randomResponse = await this.getRandomNumbers();
        newNumbers = randomResponse.numbers;
        break;
      default:
        newNumbers = [];
    }

    // Make a copy of current state as previous state
    this.windowPrevState = [...this.windowCurrentState];

    // Filter out duplicates and add new numbers
    for (const num of newNumbers) {
      if (!this.windowCurrentState.includes(num)) {
        this.windowCurrentState.push(num);
      }
    }

    // Trim window if it exceeds size
    if (this.windowCurrentState.length > this.windowSize) {
      this.windowCurrentState = this.windowCurrentState.slice(
        this.windowCurrentState.length - this.windowSize
      );
    }

    // Calculate average
    const avg = this.calculateAverage(this.windowCurrentState);

    return {
      windowPrevState: this.windowPrevState,
      windowCurrentState: this.windowCurrentState,
      numbers: newNumbers,
      avg
    };
  }

  // Calculate average of array
  private calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return parseFloat((sum / numbers.length).toFixed(2));
  }

  // Reset window state
  resetState(): void {
    this.windowCurrentState = [];
    this.windowPrevState = [];
  }

  // Get current state
  getCurrentState(): { 
    windowPrevState: number[], 
    windowCurrentState: number[] 
  } {
    return {
      windowPrevState: this.windowPrevState,
      windowCurrentState: this.windowCurrentState
    };
  }
}

// Export a singleton instance
export const numberService = new NumberService();

// Export the class for testing or custom instances
export default NumberService;
