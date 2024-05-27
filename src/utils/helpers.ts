const setLocalStr = (key: string, value: string) => window.localStorage.setItem(key, value);
const removeLocalStr = (key: string) => window.localStorage.removeItem(key);
const getLocalStr = (key: string): string | null =>window.localStorage.getItem(key);

// const getAccessTokenLS = () => window.localStorage.getItem('ACCESSTOKEN_SRA');
// const setAccessTokenLS = (value: string) => window.localStorage.setItem('ACCESSTOKEN_SRA', value);

// const getUserDataLS = () => window.localStorage.getItem('userSRAData');
// const setUserDataLS = (value: string) => window.localStorage.setItem('userSRAData', value);

const clearLocalStorage = () => window.localStorage.clear();

const helpers = {
	setLocalStr,
	removeLocalStr,
	getLocalStr,
	// getUserDataLS,
	// setUserDataLS,
	// getAccessTokenLS,
	// setAccessTokenLS,
	clearLocalStorage,
};

export default helpers;
