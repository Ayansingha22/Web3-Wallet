import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './components/solana-wallet';
import { EthWallet } from './components/ethereum-wallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");
  return (
    <>
    <button onClick={async function() {
      const mn = await generateMnemonic();
      setMnemonic(mn)
      }}>
        Create Seed Phrase
      </button>
      <input type="text" value={mnemonic}></input>

      <SolanaWallet mnemonic={mnemonic}/>
      <EthWallet mnemonic={mnemonic}/>
    </>
  )
}

export default App
