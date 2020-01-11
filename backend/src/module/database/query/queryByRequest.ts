import { Repository, FindConditions, FindManyOptions } from 'typeorm';
import { Request } from '@app/web';
import { filterParser } from 'src/module/database/query/parser';

export const queryByRequest = async <T>(
    repositoryOrQueryBuilder: Repository<T>,
    request: Request,
    searchOptions?: FindConditions<T> | FindManyOptions<T>
) => {

    return await repositoryOrQueryBuilder.findAndCount({
        ...buildPaginatorOptions(request),
        ...buildOrderOptions(request),
        ...buildFilterOptions(request),
        ...searchOptions
    });
};

const buildPaginatorOptions = (request: Request) => {
    if (request.paginator) {
        return {
            skip: request.paginator.offset,
            take: request.paginator.limit,
        };
    }
};

const buildOrderOptions = (request: Request) => {
    if (request.sort) {
        return request.sort.reduce((sort, [name, id]) => {
            sort[name] = id;
            return sort;
        }, {});
    }
};

const buildFilterOptions = (request: Request) => {
    if (request.filter) {
        const sqlFilter = filterParser(request.filter);
        return {
            where: sqlFilter.getQuery()
        };
    }
};
