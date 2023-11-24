export const filterContacts = (items, filter) => {
  const formattedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(formattedFilter)
  );
};
