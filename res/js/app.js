const localeKey = "locale";

function loadLocale(langRes) {
	const element = getLocaleSelector();
	if (!element) {
		return;
	}

	const locale = localStorage.getItem(localeKey) || "en";
	element.value = locale;
	setLocalePrivate(locale, langRes, "innerHTML");
}

function setLocale(langRes) {
	const element = getLocaleSelector();
	if (!element) {
		return;
	}

	localStorage.setItem(localeKey, element.value);
	setLocalePrivate(element.value, langRes, "innerHTML");
}

function setHrefLocale(downloads) {
	const element = getLocaleSelector();
	if (!element) {
		return;
	}

	setLocalePrivate(element.value, downloads, "href", getHrefPath);
}

function setLocalePrivate(locale, langRes, attr, func) {
	const obj = langRes[locale];
	if (!obj) {
		return;
	}

	for (const key of Object.keys(obj)) {
		const localeElem = document.getElementById(key);
		if (localeElem) {
			if (func) {
				localeElem[attr] = func(obj[key]);
			} else {
				localeElem[attr] = obj[key];
			}
		}
	}
}

function getLocaleSelector() {
	return document.getElementById("lang-selector");
}

function getHrefPath(fileName) {
	return "./res/data/" + fileName;
}
