const sorter = (data, order, reverse = false) => {
  const compareFunc = () => {
    // arrange according to date
    if (order === 'dateCreated' || order === 'dateApplied') {
      return (x, y) => {
        const a = new Date(x[order]);
        const b = new Date(y[order]);
        return reverse ? (a - b) : (b - a);
      };
    }
    // else sort objects
    return (a, b) => {
      const itemA = a[order].toUpperCase();
      const itemB = b[order].toUpperCase();
      if (itemA < itemB) {
        return !reverse ? -1 : 1;
      }
      if (itemA > itemB) {
        return !reverse ? 1 : -1;
      }
      return 0;
    };
  };
  return data.concat().sort(compareFunc(order));
};

export default sorter;
