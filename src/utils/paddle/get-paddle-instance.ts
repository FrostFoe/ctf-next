// Mock Paddle instance - replaced Paddle SDK integration
export function getPaddleInstance() {
  // Return a mock object that satisfies the interface requirements
  return {
    subscriptions: {
      get: async () => null,
      list: async () => ({ data: [], meta: { requestId: 'mock' } }),
      cancel: async () => null,
    },
    transactions: {
      list: async () => ({ data: [], meta: { requestId: 'mock' } }),
    },
    // Add other methods as needed
  };
}
