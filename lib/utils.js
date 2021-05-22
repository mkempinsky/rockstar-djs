export const getElemOffset = (el) => {
    if (typeof window === 'undefined') {
        console.log('window object not available');
        return;
    }
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
};

export const scrollToElement = (id, marginTop = 150) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const element = document.getElementById(id);
        if (!element) return;
        const elOffset = getElemOffset(element);

        elOffset.top &&
            window.scrollTo({
                top: elOffset.top - marginTop,
                behavior: 'smooth',
            });
    }
};

export const formatGoogleSheetData = (data) => {
    const entries = data?.feed?.entry || [];

    let rowValues = [];

    // get first row - use as keys
    let firstRow = Array.isArray(entries) && entries.filter((x) => x?.gs$cell?.row == 1);
    firstRow = firstRow.map((item) => {
        return {column: item?.gs$cell?.col, value: item?.gs$cell?.inputValue};
    });

    // format
    Array.isArray(entries) &&
        entries.map((item, index) => {
            // skip row 1
            if (index === 0) return;
            const row = item?.gs$cell?.row || 0;
            const prevRow = entries[index - 1]?.gs$cell?.row || 0;

            if (row !== prevRow) {
                const itemsInRow = entries.filter((x) => x?.gs$cell?.row === row);

                let obj = {};
                firstRow.map((x) => {
                    const column = x?.column;
                    const columnName = x?.value;
                    let value = itemsInRow.find((x) => x?.gs$cell?.col === column);
                    value = value?.gs$cell?.inputValue || null;
                    obj = {...obj, [columnName]: value};
                    return;
                });
                rowValues.push(obj);
            }
        });

    return rowValues;
};
