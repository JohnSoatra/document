const Libs = {
  Vref: 'vref',
  ReactUseCurrent: 'react-use-current'
} as const;

export type Libs = typeof Libs extends Record<string, infer T> ? T : never;
export default Libs;
