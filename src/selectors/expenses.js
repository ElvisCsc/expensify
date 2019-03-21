import moment from 'moment';

//filter by dates and description
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch =endDate ? endDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt ? 1:-1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1;
        }
    });
};

//search filter is performed here as(not the same) above. by description only
/*const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt ? 1:-1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1;
        }
    });
};

export default getVisibleExpenses;*/