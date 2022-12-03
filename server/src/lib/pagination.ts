class Pagination {
     getPagination = (page:any, size:any) => {
  const limit = size ? +size : 6;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

getPagingData = (data:any, page:any, limit:number) => {
  const { count: totalItems, rows: records } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);
  const norecords = records.length;
  return { totalItems, norecords, records, totalPages, currentPage };
};

}

export default new Pagination();
 