import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Item } from '../types';
import itemsData from '../data/items.json';

interface GameContextType {
  inventory: Item[];
  useItem: (itemId: string, itemToAddId: string | null) => boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const startingItem = itemsData.find((i) => 
    i.item.toLowerCase().includes('uv')
  );

  const [inventory, setInventory] = useState<Item[]>(
    startingItem ? [startingItem as Item] : []
  );

  const useItem = (itemId: string, itemToAddId: string | null): boolean => {
    const hasItem = inventory.some((i) => String(i.id) === String(itemId));

    if (hasItem) {
      if (itemToAddId !== null) {
        const alreadyHasNewItem = inventory.some((i) => String(i.id) === String(itemToAddId));
        
        if (!alreadyHasNewItem) {
          const newItem = itemsData.find((i) => String(i.id) === String(itemToAddId));
          if (newItem) {
            setInventory((prev) => [...prev, newItem as Item]);
          }
        }
      }
      return true;
    }
    return false;
  };

  return (
    <GameContext.Provider value={{ inventory, useItem }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('Error');
  return context;
};