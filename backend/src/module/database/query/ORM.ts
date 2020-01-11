export class Query {

    private readonly query: string;

    constructor(rawQuery: string, params?: {
        filter?: SQLFilter,
        sort?: SQLSort,
        paginator?: SQLPaginator
    }) {
        let preparedQuery = rawQuery;
        if (params.filter) {
            preparedQuery = params.filter.build(preparedQuery);
        }

        if (params.sort) {
            preparedQuery = params.sort.build(preparedQuery);
        }

        if (params.paginator) {
            preparedQuery = params.paginator.build(preparedQuery);
        }

        // TODO dor debug
        // console.log(preparedQuery);
        this.query = preparedQuery;
    }

    getQuery(): string {
        return this.query;
    }
}

export interface QueryPart {
    getQueryPart(): string;

    build(query: string): string;
}

export class FilterPredicate {

    private readonly filterFields: Array<FilterPredicate | string>;

    constructor(...filterFields: Array<FilterPredicate | string>) {
        this.filterFields = filterFields;
    }

    protected get separator(): string {
        return ' ';
    }

    getQuery() {
        return this.filterFields
            .filter(Boolean)
            .map(field => typeof field === 'string' ? field : `(${field.getQuery()})`)
            .join(this.separator);
    }
}

export class Or extends FilterPredicate {
    protected get separator(): string {
        return ' or ';
    }
}

export class And extends FilterPredicate {
    protected get separator(): string {
        return ' and ';
    }
}

export class SQLFilter implements QueryPart {

    constructor(private filterPredicate?: FilterPredicate | string) {
    }

    getQueryPart() {
        return this.filterPredicate
            ? ` WHERE ${typeof this.filterPredicate === 'string'
                ? this.filterPredicate
                : this.filterPredicate.getQuery()}`
            : '';
    }

    build(query: string): string {
        return query.replace('{{filter}}', this.getQueryPart());
    }
}

export abstract class SortPredicate {

    protected constructor(protected sortField: string) {
    }

    abstract getQuery(): string;
}

export class Asc extends SortPredicate {

    constructor(sortField: string) {
        super(sortField);
    }

    getQuery(): string {
        return `${this.sortField} ASC`;
    }
}

export class Desc extends SortPredicate {
    constructor(sortField: string) {
        super(sortField);
    }

    getQuery(): string {
        return `${this.sortField} DESC`;
    }
}


export class SQLSort implements QueryPart {

    private readonly sortPredicates: SortPredicate[];

    constructor(...sortPredicates: SortPredicate[]) {
        this.sortPredicates = sortPredicates;
    }

    getQueryPart() {
        return this.sortPredicates.length
            ? ` ORDER BY ${this.sortPredicates.map(predicate => predicate.getQuery()).join(', ')}`
            : '';
    }

    build(query: string): string {
        return query.replace('{{sort}}', this.getQueryPart());
    }
}

export class SQLPaginator implements QueryPart {
    constructor(private limit?: number, private offset?: number) {
    }

    getQueryPart() {
        return this.limit ? ` LIMIT ${this.limit} OFFSET ${this.offset || 0}` : '';
    }

    build(query: string): string {
        return query.replace('{{paginator}}', this.getQueryPart());
    }
}

