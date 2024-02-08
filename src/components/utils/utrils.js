const formatType = (type) => {
    let caoTypeName = type[0].toUpperCase() + type.slice(1);
    return caoTypeName;
};
const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format((price / 100).toFixed(2));
    return formattedPrice;
};
const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);
    if (storageItem) {
        storageItem = JSON.parse(storageItem);
    } else {
        storageItem = [];
    }
    return storageItem;
};
const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
};

export {
    formatType,
    formatPrice,
    getStorageItem,
    setStorageItem
}