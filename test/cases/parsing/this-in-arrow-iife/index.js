function x() {
	let value;
	(() => {
		value = this;
	})();
	return value;
}

it("should parse this in an IIAFE correctly", () => {
	const o = { ok: true };
	expect(x.call(o)).toBe(o);
});

export {};
