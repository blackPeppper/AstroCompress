var f = (await import("typescript-esbuild/Target/Function/Merge.js")).default(
	(await import("files-pipe/Target/Variable/Option.js")).default,
	{
		CSS: {
			csso: (await import("./CSS/csso.js")).default,
			lightningcss: (await import("./CSS/lightningcss.js")).default,
		},
		HTML: {
			"html-minifier-terser": (
				await import("./HTML/html-minifier-terser.js")
			).default,
		},
		JavaScript: {
			terser: (await import("./JavaScript/terser.js")).default,
		},
		Image: { sharp: (await import("./Image/sharp.js")).default },
		SVG: { svgo: (await import("./SVG/svgo.js")).default },
		Map: (await import("./Map.js")).default,
		Parser: (await import("./Parser.js")).default,
		Action: {
			Failed: async ({ Input: t }) =>
				`${r("Error:")} Cannot compress file ${i(await o(t))}${r(
					(await import("path")).parse(t).base,
				)}`,
			Passed: async ({ Before: t, Buffer: a }) =>
				t > s.byteLength(a.toString()),
			Accomplished: async ({ Input: t, Before: a, After: p }) => {
				const e = a - p;
				return `${i(
					`(-${await (
						await import("files-pipe/Target/Function/Bytes.js")
					).default(e)})`,
				)}	${(await import("kleur/colors")).green(
					`${((e / a) * 100).toFixed(2)}%`,
				)} reduction in ${i(await o(t))}${(
					await import("kleur/colors")
				).cyan((await import("path")).parse(t).base)}`;
			},
			Changed: async (t) =>
				Object.defineProperty(t.Info, "Total", {
					value:
						(t.Info.Total ? t.Info.Total : 0) +
						(t.On.Before - t.On.After),
					configurable: !0,
					writable: !0,
				}) && t,
		},
	},
);
const { gray: i, red: r } = await import("kleur/colors"),
	{ default: o } = await import("../Function/Directory.js"),
	{ Buffer: s } = await import("buffer");
export { f as default };
