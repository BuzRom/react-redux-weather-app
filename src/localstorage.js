export const setLocalStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getLocalStorageData = (key) => {
    return localStorage.getItem(key)
}

export const clearLocalStorageData = () => {
    return localStorage.clear();
}