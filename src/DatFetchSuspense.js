import React, { Suspense } from 'react';
import { SuspenseMock } from './SuspenseMock';

const resource = SuspenseMock();

const Name = () => {
  let name = resource.name.read();
  console.log('name', name);
  return <div> {name}</div>;
};

const Address = () => {
  let address = resource.address.read();
  return <div> {address}</div>;
};

const DatFetchSuspense = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Name />
        <Address />
      </Suspense>
    </div>
  );
};

export default DatFetchSuspense;
