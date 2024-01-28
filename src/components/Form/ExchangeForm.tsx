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

export default function ExchangeForm() {
  const { data, loading, currencies, stores } = useData();
  const [selectedStore, setSelectedStore] = useState('0');
  const [options, setOptions] = useState([]);
  const [sendAmount, setSendAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState({
    label: '',
    value: '',
    buy: '',
    sell: '',
    id: '',
    name: '',
    image: '',
    shop_id: ''
  });

  const [currencyTo, setCurrencyTo] = useState({
    label: '',
    value: '',
    buy: '',
    sell: '',
    id: '',
    name: '',
    image: '',
    shop_id: ''
  });

  const changeCurrency = (shopId: string) => {
    setSelectedStore(shopId);
    const activeCurrencies = currencies.filter(
      (c: { shop_id: string }) => c.shop_id === shopId
    );
    setOptions(activeCurrencies);
    setCurrencyFrom(activeCurrencies[1]);
    setCurrencyTo(activeCurrencies[0]);
  };

  const getRate = (): number => {
    if (!currencyFrom?.buy || !currencyTo?.sell) return 0;
    return parseFloat(currencyFrom.buy) / parseFloat(currencyTo.sell);
  };
  const getReceivedAmount = (): number => {
    if (!sendAmount) return 0;
    return sendAmount * getRate();
  };

  useEffect(() => {
    if (!currencies) return;
    changeCurrency('1');
  }, [currencies]);

  useEffect(() => {
    setReceivedAmount(getReceivedAmount());
  }, [sendAmount, currencyFrom, currencyTo]);

  interface OptionProvided {
    [key: string]: any;
  }

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

  if (loading || !data) {
    return (
      <Card className="flex justify-start items-center space-x-3 text-gray-600">
        <img src="/loading.svg" className="w-4 animate-spin" alt="" srcSet="" />
        <span>Fetching live rates...</span>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-50 p-5">
      <form id="exchange" className="text-left bg-slate-50 p-3 rounded">
        <div className="block md:hidden font-semibold">Store</div>

        {stores && (
          <Select
            options={stores}
            onChange={(e: any) => changeCurrency(e.value)}
            defaultValue={stores[0]}
            styles={customStyles}
            instanceId={1}
            className="mb-5 bg-white focus:outline-none"
          />
        )}
        <div className="flex md:flex-row flex-col justify-center items-center md:space-y-0 space-y-5 md:space-x-5 mb-5">
          <div className="w-full md:w-[calc(100%-50px)]">
            <div className="block md:hidden font-semibold">From</div>
            {currencies && (
              <Select
                key={selectedStore}
                onChange={(e: any) => setCurrencyFrom(e)}
                placeholder="From"
                options={options}
                defaultValue={options[1]}
                formatOptionLabel={formatOption}
                styles={customStyles}
                instanceId={2}
                className="mb-3"
              />
            )}
            <TextField
              fullWidth
              label=""
              type="number"
              onChange={e => setSendAmount(parseFloat(e.target.value))}
              placeholder="Send Amount"
              variant="outlined"
              className="bg-white"
            />
          </div>

          <div className="w-[100px] md:flex justify-center items-center hidden">
            <div className="rounded-full p-3 bg-gray-100 flex justify-center items-center">
              <img src="/exchange-mid.svg" alt="exchange" className="h-6" />
            </div>
          </div>
          <div className="w-full md:w-[calc(100%-50px)]">
            <div className="block md:hidden font-semibold">To</div>

            {currencies && (
              <Select
                placeholder="To"
                onChange={(e: any) => setCurrencyTo(e)}
                key={`${selectedStore}-receive`}
                options={options}
                defaultValue={options[0]}
                formatOptionLabel={formatOption}
                styles={customStyles}
                instanceId={3}
                className="mb-3"
              />
            )}
            <TextField
              fullWidth
              label=""
              value={receivedAmount.toLocaleString('en-US', {
                minimumFractionDigits: 2
              })}
              type="text"
              placeholder="Received Amount"
              variant="outlined"
              className="bg-white text-gray-900 font-bold"
            />
          </div>
        </div>

        {currencyFrom?.name && (
          <h3 className="font-bold my-3">
            1 {currencyFrom?.name} ={' '}
            {getRate().toLocaleString('en-US', {
              minimumFractionDigits: 2
            })}{' '}
            {currencyTo?.name}
          </h3>
        )}
        <hr />

        <div className="grid grid-cols-12 gap-5 mt-5">
          <p className="col-span-12 lg:col-span-7 text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque
            obcaecati accusantium illo deserunt assumenda maiores at quod
            quisquam quibusdam!
          </p>
          <button
            type="button"
            className="bg-secondary col-span-12 lg:col-span-5 mt-5 md:mt-0 p-4 rounded text-white flex justify-center space-x-2 items-center px-5"
          >
            <span>Get Exchange Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </Card>
  );
}
