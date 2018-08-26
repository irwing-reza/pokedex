export default {
  filterData(query = '', data = []) {
    return data.filter(option => option.name.toString()
      .toLowerCase().indexOf(query.toLowerCase()) >= 0);
  },
};
