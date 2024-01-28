'use client';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';

import { useData } from '@/context/StoreContext';

import Card from '../Card/Card';

export default function RateTab() {
  const { data, loading } = useData();
  const [value, setValue] = useState<any>(null);
  useEffect(() => {
    if (!data) return;
    setValue(data[0]?.email);
  }, [data]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (!data && !loading) {
    return (
      <Card className="text-red-400">
        Failed to fetch the rates, please refresh the page
      </Card>
    );
  }
  if (loading || !value) {
    return (
      <Card className="flex justify-start items-center space-x-3 text-gray-600">
        <img src="/loading.svg" className="w-4 animate-spin" alt="" srcSet="" />
        <span>Fetching live rates...</span>
      </Card>
    );
  }

  return (
    <Card className="flex-grow w-full transition-all">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            textColor="inherit"
            indicatorColor="primary"
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{
              sx: {
                bgcolor: '#fd7014'
              }
            }}
          >
            {data?.map((d: any) => (
              <Tab
                className="font-bold"
                label={d.name}
                value={d.email}
                key={d.email}
              />
            ))}
          </TabList>
        </Box>
        {data?.map((d: any) => (
          <TabPanel key={d.email} value={d.email} className="p-0">
            <div className="text-center py-4">
              <p className="text-sm font-bold text-gray-800">
                {d.company_name}
              </p>
              <p className="font-light text-xs mt-2 capitalize">{d.address}</p>
            </div>
            <div className="p-1.5 inline-block w-full align-middle">
              <div className="border border-secondary rounded-lg overflow-hidden">
                <table className="divide-y w-full divide-secondary">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-xs font-medium text-white"
                      >
                        Currency
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-xs font-medium text-white hidden lg:block"
                      >
                        Symbol
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-xs font-medium text-white"
                      >
                        Buy
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-xs font-medium text-white"
                      >
                        Sell
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary">
                    {d?.currencies_rates?.map((c: any) => (
                      <tr key={c.currency_code}>
                        <td className="px-2 py-4 text-sm font-medium text-gray-800">
                          <div className="flex items-center">
                            <img
                              alt="Australian dollar"
                              loading="lazy"
                              width="50"
                              height="50"
                              decoding="async"
                              data-nimg="1"
                              className="rounded-full overflow-hidden object-cover w-5 h-5"
                              src={c.currency_flag}
                            />
                            <span className="ml-2">{c.currency_code}</span>

                            <span className="hidden lg:flex lg:ml-2 font-light text-xs">
                              {c.currency_name}
                            </span>
                          </div>
                        </td>
                        <td className="px-2 py-4 text-sm text-gray-800 hidden lg:block">
                          {c.currency_symbol}
                        </td>
                        <td className="px-2 py-4 text-sm text-secondary">
                          {c.buy}
                        </td>
                        <td className="px-2 py-4 text-sm text-gray-800">
                          {c.sell}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
        ))}
      </TabContext>
    </Card>
  );
}
