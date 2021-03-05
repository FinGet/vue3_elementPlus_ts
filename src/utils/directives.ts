import hljs from 'highlight.js';

export const highlightjs = {
	deep: true,
	beforeMount (el: any) {
		// on first bind, highlight all targets
		let blocks = el.querySelectorAll('pre code');
		for (let i = 0; i < blocks.length; i++) {
			let item = blocks[i];
			console.log(item);
			hljs.highlightBlock(item);
		}
	},
	// called after the containing component's VNode and the VNodes of its children // have updated
	updated (el: any, binding: any) {
		// after an update, re-fill the content and then highlight
		let targets = el.querySelectorAll('code');
		for (let i = 0; i < targets.length; i += 1) {
			let target = targets[i];
			if (typeof binding.value === 'string') {
				target.textContent = binding.value;
			}
			hljs.highlightBlock(target);
		}
	}
};
