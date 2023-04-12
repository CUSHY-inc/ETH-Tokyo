import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../components/common/Header'

export default function Home() {

  return (
    <div>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <Header />

      <main>
        <div className={styles.header}>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button onClick={openConnectModal} type="button" className={styles.header_btn}>
                          Connect
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div className={styles.header_btn_addr}>
                        <div style={{ display: 'flex', gap: 12 }}>
                          {/* <button
                            onClick={openChainModal}
                            style={{ display: 'flex', alignItems: 'center' }}
                            type="button"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 12,
                                  height: 12,
                                  borderRadius: 999,
                                  overflow: 'hidden',
                                  marginRight: 4,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                  />
                                )}
                              </div>
                            )}
                            {chain.name}
                          </button> */}

                          <button onClick={openAccountModal} type="button">
                            {account.displayName}
                            {/* {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''} */}
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
          <button className={styles.header_menu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={styles.cover}>
          <Image src="/images/umafun.png" alt="UMAFUN Icon" width={208} height={184.78} className={styles.cover_img} />
        </div>
        <div className={styles.main}>
          <button className={styles.main_left}>&lt;</button>
          <div className={styles.main_race}>
            <div className={styles.main_race_date}>3月26日(日)</div>
            <div className={styles.main_race_desc}>春のスプリント王決定戦</div>
            <div className={styles.main_race_name}>高松宮記念</div>
            <div className={styles.main_race_status}><span>3,570</span>人が投票中</div>
          </div>
          <button className={styles.main_right}>&gt;</button>
        </div>
        <div className={styles.vote}>
          <button className={styles.vote_btn}>予想する</button>
        </div>
      </main>
    </div>
  );

}
