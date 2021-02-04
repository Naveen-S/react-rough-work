import React, { lazy, Suspense } from 'react';
const HugeComponent = lazy(() => import('./HugeComponent.js'));
const LazySuspense = () => {
  return (
    <div>
      This is normal component
      {/* 
        Load this component lazily once everything is loaded.
        Chrome: change to Slow 3G in network tab to see this in effect.
       */}
      <Suspense fallback={<div> Loading...</div>}>
        <HugeComponent />
      </Suspense>
    </div>
  );
};

export default LazySuspense;
