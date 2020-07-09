interface Functor<T> {
  (value?: any): {
    fmap: (f: Function) => Functor<T>
  }
}

namespace jest {
	export interface Matchers<R> {
			functorToBe<T>(actual: Functor<T>, expected:  Functor<T>): R;
	}
}