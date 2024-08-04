import { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    console.log('yo');
  }, []);
  return <div>[TEMP] HOME (root)</div>;
};
export default Root;
