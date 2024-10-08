const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
});

export function formatCurrency(value) {
    return CURRENCY_FORMATTER.format(value); // Виклик функції format з аргументом
}
