'use client';

import { TextField } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import type { StylesConfig } from 'react-select';

import { useData } from '@/context/StoreContext';

import Card from '../Card/Card';

const Select = dynamic(() => import('react-select'), {
  ssr: false
});

export default function RateForm() {
  const { data, loading, currencies, stores } = useData();
  const [selectedStore, setSelectedStore] = useState('0');
  const [options, setOptions] = useState([]);

  const changeCurrency = (shopId: string) => {
    setSelectedStore(shopId);
    const activeCurrencies = currencies.filter(
      (c: { shop_id: string }) => c.shop_id === shopId
    );
    setOptions(activeCurrencies);
  };

  useEffect(() => {
    if (!currencies) return;
    changeCurrency('1');
  }, [currencies]);

  interface OptionProvided {
    [key: string]: any;
  }

  const customStyles: StylesConfig<any, false> = {
    option: (provided: OptionProvided, state: any) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: state.isSelected ? '#FDB833' : 'white'
    }),
    control: (provided: OptionProvided) => ({
      ...provided,
      background: '#fff',
      borderColor: '#9e9e9e',
      minHeight: '55px',
      height: '55px'
    }),
    menu: (base: any) => ({
      ...base,
      zIndex: 100
    })
  };
  const formatOption = (option: any) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          alt=""
          src={option.image}
          style={{ width: '20px', marginRight: '10px' }}
        />
        {option.label}
      </div>
    );
  };

  if (loading || !data) {
    return (
      <Card className="flex justify-start items-center space-x-3 text-gray-600">
        <img src="/loading.svg" className="w-4 animate-spin" alt="" srcSet="" />
        <span>Fetching live rates...</span>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <form id="exchange" className="">
        <p className="text-gray-600 bg-slate-100 p-3 text-xs mb-3 text-center rounded">
          Save with our great introductory rate for your personal transfer on 7
          currencies.
        </p>
        <label className="text-gray-600 text-sm" htmlFor="" />
        {stores && (
          <Select
            options={stores}
            onChange={(e: any) => changeCurrency(e.value)}
            defaultValue={stores[0]}
            styles={customStyles}
            instanceId={1}
            className="mb-5 bg-white"
          />
        )}
        <label className="text-gray-600 text-sm" htmlFor="">
          Currency Send
        </label>
        {currencies && (
          <Select
            key={selectedStore}
            options={options}
            defaultValue={options[0]}
            formatOptionLabel={formatOption}
            styles={customStyles}
            instanceId={2}
            className="mb-5 bg-white"
          />
        )}
        <label className="text-gray-600 text-sm" htmlFor="">
          Currency Receive
        </label>
        {currencies && (
          <Select
            key={`${selectedStore}-receive`}
            options={options}
            defaultValue={options[1]}
            formatOptionLabel={formatOption}
            styles={customStyles}
            instanceId={3}
            className="mb-5 bg-white"
          />
        )}
        <label className="text-gray-600 text-sm" htmlFor="">
          Amount
        </label>
        <TextField
          fullWidth
          label=""
          type="number"
          variant="outlined"
          className="mb-5"
        />

        <button
          type="button"
          className="bg-secondary p-4 rounded text-white flex justify-center space-x-2 items-center w-full"
        >
          <span>Get Exchange Now</span>
        </button>
        <p className="text-gray-500 text-xs mt-5">
          * In some instances a third-party intermediary or bank may deduct a
          fee from the value of your transfer. This fee may vary and we receives
          no portion of it.{' '}
        </p>
      </form>
    </Card>
  );
}
