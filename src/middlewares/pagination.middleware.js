export const paginationMiddleware = (req, res, next) => {
    const { page, pageSize } = req.query;
    const currentPage = parseInt(page) || 1;
    const itemsPerPage = parseInt(pageSize) || 10;

    const offset = (currentPage - 1) * itemsPerPage;

    req.pagination = {
        currentPage,
        itemsPerPage,
        offset
    };

    next();
};
