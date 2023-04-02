import React from 'react';
import styles from "./loader.module.css"
import { RotatingLines } from 'react-loader-spinner'
// const Loader = () =>  { return ( <div className={styles.loading}> Loading...</div>)}
const Loader = () =>  { return (<div className={styles.loading}>
<RotatingLines
    strokeColor="green"
    strokeWidth="5"
    animationDuration="0.75"
    width="76"
    visible={true}
  />
  </div>)}
export default Loader;