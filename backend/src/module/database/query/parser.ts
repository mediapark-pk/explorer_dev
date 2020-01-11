import { ComparisonOperator, Filter } from '@app/web';
import { And, FilterPredicate, Or } from 'src/module/database/query/ORM';

export const filterParser = (frontendFilter: Filter): FilterPredicate => {
    const filterValues = frontendFilter.filterValues.map(filterValue => {
        if (Array.isArray(filterValue)) {
            const [field, operator, value] = filterValue;
            let SQLOperator;
            let SQLValue;
            switch (operator as ComparisonOperator) {
                case '%*%':
                    SQLValue = `%${value}%`;
                    SQLOperator = 'ILIKE';
                    break;
                case '%*':
                    SQLValue = `%${value}`;
                    SQLOperator = 'ILIKE';
                    break;
                case '*%':
                    SQLValue = `%${value}%`;
                    SQLOperator = 'ILIKE';
                    break;
                default:
                    SQLValue = value;
                    SQLOperator = operator;
            }
            return `${field} ${SQLOperator} ${typeof value === 'string' ? `'${SQLValue}'` : SQLValue}`;
        }
        return filterParser(filterValue);
    });

    if (frontendFilter.type === 'or') {
        return new Or(filterValues[0], filterValues[1], ...filterValues.slice(2));
    }
    return new And(filterValues[0], filterValues[1], ...filterValues.slice(2));
};
