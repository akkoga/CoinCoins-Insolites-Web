/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface CoincoinsHeader {
    'userLang': string;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCoincoinsHeaderElement extends Components.CoincoinsHeader, HTMLStencilElement {}
  var HTMLCoincoinsHeaderElement: {
    prototype: HTMLCoincoinsHeaderElement;
    new (): HTMLCoincoinsHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'coincoins-header': HTMLCoincoinsHeaderElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface CoincoinsHeader {
    'userLang'?: string;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'coincoins-header': CoincoinsHeader;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'coincoins-header': LocalJSX.CoincoinsHeader & JSXBase.HTMLAttributes<HTMLCoincoinsHeaderElement>;
    }
  }
}


