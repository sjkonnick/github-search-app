function findAction(store, type) {
  return store.getActions().find((action) => action.type === type);
}

export function getAction(store, type) {
  const action = findAction(store, type);
  if (action) return Promise.resolve(action);

  return new Promise((resolve) => {
    store.subscribe(() => {
      const action = findAction(store, type);
      if (action) resolve(action);
    });
  });
}

function findError(store, error) {
  return store.getActions().find((action) => action.error === error);
}

export function getError(store, error) {
  const action = findAction(store, error);
  if (action) return Promise.resolve(action);

  return new Promise((resolve) => {
    store.subscribe(() => {
      const action = findAction(store, error);
      if (action) resolve(action);
    });
  });
}
