import React from 'react';
import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';

import { GlobalProvider } from '../context/GlobalState';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
          <title>Next Expense Tracker</title>
          <meta name="keywords" content="tracker"/>
      </Head>
      <GlobalProvider>
        <Header />
        <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </div>
        {/* <Footer /> */}
      </GlobalProvider>
    </>
  )
}
