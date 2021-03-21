import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'
import EnterPage from './enter';
import Link from 'next/link'
import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      <Loader show/>
    </div>
  )
}
