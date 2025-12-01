const Libs = {
  Vref: 'vref',
} as const;

export type Libs = typeof Libs extends Record<string, infer T> ? T : never;
export default Libs;
