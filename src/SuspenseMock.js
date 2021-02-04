export function SuspenseMock() {
  return {
    name: wrapPromise(fetchName()),
    address: wrapPromise(fetchAddress()),
  };
}

function fetchName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Naveen!');
    }, 1000);
  });
}

function fetchAddress() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Kanasu VijayNagar!');
    }, 5000);
  });
}

function wrapPromise(promise) {
  let status = 'pending';
  let result;

  let promiseResolver = promise.then(
    (res) => {
      status = 'Success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw promiseResolver;
      } else if (status === 'Success') {
        return result;
      } else {
        throw result;
      }
    },
  };
}
