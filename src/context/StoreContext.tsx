'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { fetchStore } from '@/lib/fetcher';

const DataContext = createContext<any>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState<any[]>([]);
  const [stores, setStores] = useState<string[]>([]);

  const value = useMemo(
    () => ({ data, loading, currencies, stores }),
    [data, loading, currencies, stores]
  );

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchStore();
        setData(fetchedData);

        // store list
        const storeNames = fetchedData.map((s: any) => {
          return { label: s.name, value: s.id.toString() };
        });

        setStores(storeNames);
        // currencies list
        const crs: any[] = [];
        fetchedData.forEach((d: any) => {
          const cr = d.currencies_rates.map((c: any) => {
            return {
              label: c.currency_name,
              value: c.currency_code,
              buy: c.buy,
              sell: c.sell,
              id: c.currency_id,
              name: c.currency_name,
              image: c.currency_flag,
              shop_id: c.shop_id
            };
          });
          crs.push(...cr);
        });
        setCurrencies(crs);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
