//In lambda calculus, the only primitive are lambdas. No numbers, no strings, and of course no booleans. Everything is reduced to anonymous functions.

const Not = A => A(False)(True);
const And = A => B => A(B)(A);
const Or = A => B => A(A)(B);
const Xor = A => B => A(Not(B))(B);
