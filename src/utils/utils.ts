// 防抖
export function debounce (this: any, fn: Function, delay = 500) {
	let timer = 0;
	return (...args) => {
		if (timer) window.clearTimeout(timer);
		timer = window.setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};

// 节流
export function throttle (this: any, fn: Function, interval = 500) {
	let last = 0;
	return (...args) => {
		let now = +new Date();
		// 还没到时间
		if (now - last < interval) return;
		last = now;
		fn.apply(this, args);
	};
}

export function html2Escape (sHtml: string) {
	const dict = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
	return sHtml.replace(/[<>&"]/g, (c: string) => {
		return dict[c];
	});
}
