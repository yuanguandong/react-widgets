declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'lodash'
declare module 'react-color'

declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
